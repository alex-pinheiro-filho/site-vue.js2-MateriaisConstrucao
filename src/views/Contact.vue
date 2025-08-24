<template>
  <div class="contact">
    
    <section class="page-hero">
      <div class="container">
        <h1>Entre em Contato</h1>
        <p>Estamos prontos para atender você e sua obra</p>
      </div>
    </section>

    <section class="contact-info">
      <div class="container">
        <div class="contact-grid">
          
          <div class="contact-card">
            <div class="contact-icon">📞</div>
            <h3>Telefone</h3>
            <p class="contact-detail">(11) 3862-1922</p>
            <p class="contact-description">
              Horário de atendimento:<br>
              Segunda a Sexta: 7h às 18h<br>
              Sábado: 8h às 13h
            </p>
            <a href="tel:+551138621922" class="btn btn-primary">Ligar Agora</a>
          </div>

          <div class="contact-card">
            <div class="contact-icon">📱</div>
            <h3>WhatsApp</h3>
            <p class="contact-detail">(11) 96930-0805</p>
            <p class="contact-description">
              Atendimento via WhatsApp<br>
              Orçamentos e consultas<br>
              Disponibilidade de produtos
            </p>
            <a href="https://wa.me/5511969300805" class="btn btn-whatsapp" target="_blank">
              Enviar Mensagem
            </a>
          </div>

          <div class="contact-card">
            <div class="contact-icon">📍</div>
            <h3>Endereço</h3>
            <p class="contact-detail">
              Rua Marco Aurélio, 650<br>
              Vila Romana - São Paulo SP
            </p>
            <p class="contact-description">
              Fácil acesso e estacionamento<br>
              Próximo ao centro da Vila Romanna<br>
              Facilidade para carga/descarga
            </p>
            <a href="https://maps.google.com/?q=Rua+Marco+Aurélio+650+Vila+Romanna+São+Paulo" 
               class="btn btn-primary" target="_blank">Ver no Mapa</a>
          </div>

        </div>
      </div>
    </section>

    <section class="instagram-section">
      <div class="container">
        <div class="instagram-header">
          <h2>Siga-nos no Instagram</h2>
          <p>Veja nossos produtos e novidades em nosso perfil</p>
        </div>
        
        <div class="instagram-gallery">
          <div 
            v-for="(image, index) in getInstagramImages()" 
            :key="index" 
            class="instagram-post"
            @click="openImageModal(image, index)"
          >
            <img 
              :src="image.src" 
              :alt="image.alt" 
              class="instagram-image"
              @error="handleImageError"
            />
          </div>
        </div>
        
        <div class="instagram-cta">
          <a href="https://www.instagram.com/depositovilaromanna/" class="btn btn-instagram btn-large" target="_blank">
            <span class="btn-icon">📷</span>
            Ver Mais no Instagram
          </a>
        </div>
      </div>
    </section>

    <ImageModal 
      :show="showModal" 
      :images="currentImages" 
      :current-index="currentImageIndex"
      @close="closeImageModal"
      @next="nextImage"
      @previous="previousImage"
    />

    <section class="location-section">
      <div class="container">
        <h2>Nossa Localização</h2>
        <div class="location-content">
          <div class="map-container">
            <a href="https://maps.google.com/?q=Rua+Marco+Aurélio+650+Vila+Romanna+São+Paulo" target="_blank" class="map-link">
              <img src="@/assets/imgMapa.png" alt="Mapa da localização Vila Romanna" class="map-image" />
            </a>
          </div>
          
          <div class="location-details">
            <h3>Facilidades</h3>
            <div class="facility-list">
              <div class="facility-item">
                <span class="facility-icon">🅿️</span>
                <span>Estacionamento próprio</span>
              </div>
              <div class="facility-item">
                <span class="facility-icon">🚛</span>
                <span>Área para carga/descarga</span>
              </div>
              <div class="facility-item">
                <span class="facility-icon">🏪</span>
                <span>Loja física ampla</span>
              </div>
              <div class="facility-item">
                <span class="facility-icon">👥</span>
                <span>Atendimento especializado</span>
              </div>
            </div>
            
            <h4>Horário de Funcionamento</h4>
            <div class="schedule">
              <p><strong>Segunda a Sexta:</strong> 7h às 18h</p>
              <p><strong>Sábado:</strong> 8h às 13h</p>
              <p><strong>Domingo:</strong> Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import ImageModal from '@/components/modals/ImageModal.vue'

export default {
  name: 'Contact',
  components: {
    ImageModal
  },
  data() {
    return {
      showModal: false,
      currentImageIndex: 0,
      currentImages: []
    }
  },
  methods: {
    getInstagramImages() {
      const images = []
      const imageNames = [
        'imgInst1.png',
        'imgInst2.jpg', 
        'imgInst3.jpg',
        'imgInst4.jpg',
        'imgInst5.jpg',
        'imgInst6.jpg',
        'imgInst7.jpg',
        'imgInst8.jpg',
        'imgInst9.jpg',
        'imgInst10.jpg'
      ]
      
      imageNames.forEach((imageName, index) => {
        try {
          images.push({
            src: require(`@/assets/imgsInsta/${imageName}`),
            alt: `Post ${index + 1} do Instagram`
          })
        } catch (error) {
          
          images.push({
            src: null,
            alt: `Post ${index + 1} do Instagram`,
            isPlaceholder: true
          })
        }
      })
      return images
    },
    
    openImageModal(image, index) {
      this.currentImageIndex = index
      this.currentImages = this.getInstagramImages()
      this.showModal = true
    },
    
    closeImageModal() {
      this.showModal = false
    },
    
    nextImage() {
      if (this.currentImageIndex < this.currentImages.length - 1) {
        this.currentImageIndex++
      }
    },
    
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },
    
    openInstagramProfile() {
      window.open('https://www.instagram.com/depositovilaromanna/', '_blank')
    },
    
    handleImageError(event) {
      event.target.style.display = 'none'
      event.target.parentElement.classList.add('placeholder-mode')
    }
  }
}
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, #071236 0%, #133786 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}
.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
}
.page-hero p {
  font-size: 1.2rem;
  opacity: 0.9;
  color: white;
}
.contact-info {
  padding: 80px 0;
}
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.contact-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-top: 4px solid #1e40af;
}
.contact-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.contact-card h3 {
  color: #1e40af;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
.contact-detail {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 1rem;
}
.contact-description {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.instagram-section {
  padding: 30px 0 80px 0;
}
.instagram-header {
  text-align: center;
  margin-bottom: 3rem;
}
.instagram-header h2 {
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.instagram-header p {
  color: #4b5563;
  font-size: 1.1rem;
}
.instagram-gallery {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.instagram-post {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.instagram-post:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}
.instagram-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
}
.post-overlay {
  display: none;
}
.instagram-post.placeholder-mode,
.instagram-post:has(img[src="null"]) {
  background: linear-gradient(45deg, #071b5c, #2563eb);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.instagram-post.placeholder-mode .post-overlay {
  position: static;
  background: none;
  opacity: 1;
}
.post-placeholder {
  background: linear-gradient(45deg, #071b5c, #2563eb);
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.post-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.instagram-cta {
  text-align: center;
}
.location-section {
  padding: 30px 0 80px 0;
  background: #f8fafc;
}
.location-section h2 {
  text-align: center;
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}
.location-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: stretch;
}
.map-container {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  height: 450px;
}
.map-link {
  display: block;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
}
.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.map-link:hover .map-image {
  transform: scale(1.02);
}
.map-placeholder {
  background: linear-gradient(45deg, #1e40af, #2563eb);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.map-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}
.location-details {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.location-details h3,
.location-details h4 {
  color: #1e40af;
  margin-bottom: 1rem;
}
.facility-list {
  margin-bottom: 2rem;
}
.facility-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  color: #4b5563;
}
.facility-icon {
  font-size: 1.2rem;
}
.schedule p {
  color: #4b5563;
  margin-bottom: 0.5rem;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
.btn-large {
  padding: 16px 32px;
  font-size: 1.1rem;
}
.btn-primary {
  background: #1e40af;
  color: white;
}
.btn-primary:hover {
  background: #1e40af;
  transform: translateY(-2px);
}
.btn-whatsapp {
  background: #22c55e;
  color: white;
}
.btn-whatsapp:hover {
  background: #16a34a;
  transform: translateY(-2px);
}
.btn-instagram {
  background: linear-gradient(45deg, #962fbf, #4f5bd5);
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
}
.btn-instagram:hover {
  background: linear-gradient(45deg, #4f5bd5,#962fbf);
  transform: translateY(-2px);
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
@media (max-width: 768px) {
  .location-content {
    grid-template-columns: 1fr;
  }
  .instagram-gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.5rem;
  }
  .page-hero h1 {
    font-size: 2rem;
  }
}
</style>
