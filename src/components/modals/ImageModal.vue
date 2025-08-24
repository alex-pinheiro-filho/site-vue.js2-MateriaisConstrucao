<template>
  <div v-if="show" class="image-modal" @click="closeModal">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="closeModal">×</button>
      <img 
        :src="currentImage.src" 
        :alt="currentImage.alt" 
        class="modal-image"
      />
      <div class="image-navigation">
        <button 
          class="nav-button prev" 
          @click="previousImage"
          :disabled="currentIndex === 0"
        >
          ‹
        </button>
        <span class="image-counter">
          {{ currentIndex + 1 }} / {{ images.length }}
        </span>
        <button 
          class="nav-button next" 
          @click="nextImage"
          :disabled="currentIndex === images.length - 1"
        >
          ›
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageModal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    images: {
      type: Array,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex] || {}
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.$emit('next')
      }
    },
    previousImage() {
      if (this.currentIndex > 0) {
        this.$emit('previous')
      }
    },
    handleKeydown(event) {
      if (!this.show) return
      
      switch(event.key) {
        case 'Escape':
          this.closeModal()
          break
        case 'ArrowLeft':
          this.previousImage()
          break
        case 'ArrowRight':
          this.nextImage()
          break
      }
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', this.handleKeydown)
      } else {
        document.body.style.overflow = 'auto'
        window.removeEventListener('keydown', this.handleKeydown)
      }
    }
  },
  beforeDestroy() {
    document.body.style.overflow = 'auto'
    window.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

<style scoped>
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  position: relative;
  max-width: 80vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close-button {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1001;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.close-button:hover {
  opacity: 0.7;
}

.modal-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.image-navigation {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  color: white;
}

.nav-button {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.nav-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.image-counter {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  min-width: 80px;
  text-align: center;
}

@media (max-width: 768px) {
  .modal-content {
    max-width: 90vw;
    max-height: 80vh;
  }
  
  .close-button {
    top: -40px;
    right: -10px;
    font-size: 2rem;
    width: 40px;
    height: 40px;
  }
  
  .modal-image {
    max-height: 65vh;
  }
  
  .nav-button {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .image-counter {
    font-size: 0.9rem;
    min-width: 60px;
  }
}
</style>
