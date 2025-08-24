<template>
  <div class="gutters">
    
    <section class="page-hero">
      <div class="container">
        <h1>Fábrica de Calhas e Rufos</h1>
        <p>Fabricação própria com qualidade e durabilidade garantidas</p>
      </div>
    </section>

    <section class="intro-section">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h2>Fabricação Própria de Calhas e Rufos</h2>
            <p>
              Na Vila Romanna, oferecemos um serviço completo de fabricação de calhas 
              e rufos com tecnologia moderna e materiais de primeira qualidade. Nossa 
              fábrica própria garante produtos personalizados para cada projeto, 
              proporcionando a solução ideal para captação e direcionamento de águas pluviais.
            </p>
            <p>
              Com anos de experiência no setor, desenvolvemos técnicas especializadas 
              que garantem produtos duráveis, resistentes e esteticamente adequados 
              para qualquer tipo de construção.
            </p>
          </div>
          <div class="intro-image">
            <div class="placeholder-image">
              <div 
                class="calhas-image-item factory-image-center"
                @click="openImageModal({ 
                  src: require('@/assets/imgCaRu.png'), 
                  alt: 'Nossa Fábrica' 
                }, 0, 'fabrica')"
              >
                <img 
                  :src="require('@/assets/imgCaRu.png')" 
                  alt="Nossa Fábrica" 
                  class="calhas-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="products-section">
      <div class="container">
        <h2>Nossos Produtos</h2>
        <div class="product-category">
          <h3>CALHAS</h3>
          <div class="calhas-gallery">
            <div 
              v-for="(image, index) in getCalhasImages()" 
              :key="index" 
              class="calhas-image-item"
              @click="openImageModal(image, index, 'calhas')"
            >
              <img 
                :src="image.src" 
                :alt="image.alt" 
                class="calhas-image"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>

        <div class="product-category">
          <h3>RUFOS</h3>
          <div class="rufos-gallery">
            <div 
              v-for="(image, index) in getRufosImages()" 
              :key="index" 
              class="rufos-image-item"
              @click="openImageModal(image, index, 'rufos')"
            >
              <img 
                :src="image.src" 
                :alt="image.alt" 
                class="rufos-image"
                @error="handleImageError"
              />
            </div>
          </div>
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

    <section class="materials-section">
      <div class="container">
        <h2>Materiais Utilizados</h2>
        <div class="materials-grid">
          <div class="material-card">
            <div class="material-icon">🛡️</div>
            <h3>Aço Galvanizado</h3>
            <p>Alta resistência e proteção contra oxidação.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <h2>Nosso Processo</h2>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Projeto Personalizado</h3>
              <p>Desenvolvemos um projeto específico para suas necessidades.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Fabricação</h3>
              <p>Produzimos as peças em nossa fábrica com controle de qualidade rigoroso.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="advantages-section">
      <div class="container">
        <h2>Vantagens da Nossa Fábrica</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">⚡</div>
            <h3>Agilidade</h3>
            <p>Produção rápida sem intermediários, direto da fábrica para sua obra.</p>
          </div>
          
          <div class="advantage-card">
            <div class="advantage-icon">🎯</div>
            <h3>Precisão</h3>
            <p>Medidas exatas e acabamento perfeito em todos os produtos.</p>
          </div>
          
          <div class="advantage-card">
            <div class="advantage-icon">💰</div>
            <h3>Preço Justo</h3>
            <p>Preços competitivos por eliminarmos intermediários na cadeia.</p>
          </div>
          
          <div class="advantage-card">
            <div class="advantage-icon">🛡️</div>
            <h3>Garantia</h3>
            <p>Produtos com garantia de qualidade e durabilidade.</p>
          </div>
          
          <div class="advantage-card">
            <div class="advantage-icon">👨‍🔧</div>
            <h3>Expertise</h3>
            <p>Anos de experiência em fabricação.</p>
          </div>
          
          <div class="advantage-card">
            <div class="advantage-icon">📞</div>
            <h3>Suporte</h3>
            <p>Atendimento personalizado do projeto à pós-venda.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Precisa de Calhas ou Rufos?</h2>
          <p>Entre em contato conosco para um orçamento personalizado!</p>
          <div class="cta-buttons">
            <a href="tel:+551138621922" class="btn btn-primary">
              <span class="btn-icon">📞</span>
              (11) 3862-1922
            </a>
            <a href="https://wa.me/5511969300805" class="btn btn-secondary" target="_blank">
              <span class="btn-icon">📱</span>
              WhatsApp
            </a>
            <router-link to="/contato" class="btn btn-outline">
              + Mais Contatos
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import ImageModal from '@/components/modals/ImageModal.vue'

export default {
  name: 'Gutters',
  components: {
    ImageModal
  },
  data() {
    return {
      showModal: false,
      currentImageIndex: 0,
      currentCategory: 'calhas',
      currentImages: []
    }
  },
  methods: {
    getCalhasImages() {
      const images = []
      const imageNames = [
        'imgCal1.jpg',
        'imgCal2.jpg', 
        'imgCal3.jpg',
        'imgCal4.jpg',
        'imgCal5.jpg',
        'imgCal6.jpg'
      ]
      
      imageNames.forEach((imageName, index) => {
        try {
          images.push({
            src: require(`@/assets/imgsCalhas/${imageName}`),
            alt: `Produto de Calhas ${index + 1}`
          })
        } catch (error) {
          
          images.push({
            src: null,
            alt: `Produto de Calhas ${index + 1}`,
            isPlaceholder: true
          })
        }
      })
      
      return images
    },
    
    getRufosImages() {
      const images = []
      const imageNames = [
        'imgRufo1.png',
        'imgRufo2.png'
      ]
      
      imageNames.forEach((imageName, index) => {
        try {
          images.push({
            src: require(`@/assets/imgsRufos/${imageName}`),
            alt: `Produto de Rufos ${index + 1}`
          })
        } catch (error) {
          
          images.push({
            src: null,
            alt: `Produto de Rufos ${index + 1}`,
            isPlaceholder: true
          })
        }
      })
      return images
    },
    
    openImageModal(image, index, category) {
      this.currentCategory = category;
      this.currentImageIndex = index;
      if (category === 'calhas') {
        this.currentImages = this.getCalhasImages();
      } else if (category === 'rufos') {
        this.currentImages = this.getRufosImages();
      } else if (category === 'fabrica') {
        
        this.currentImages = [image];
      }
      this.showModal = true;
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

.intro-section {
  padding: 80px 0;
}

.intro-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.intro-text h2 {
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 1.5rem;
}

.placeholder-image {
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
}

.intro-factory-image {
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}
.intro-factory-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}

.products-section {
  padding: 30px 0 80px 0;
  background: #f8fafc;
}

.products-section h2 {
  text-align: center;
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.product-card h3 {
  color: #1e40af;
  margin-bottom: 1rem;
}

.product-card p {
  color: #4b5563;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.product-card ul {
  list-style: none;
  padding: 0;
}

.product-card li {
  color: #4b5563;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.product-card li:before {
  content: "✓";
  color: #1e40af;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.materials-section {
  padding: 30px 0 80px 0;
}

.materials-section h2 {
  text-align: center;
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.material-card {
  background: linear-gradient(135deg, #071b5c, #2563eb);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}

.material-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.material-card h3 {
  margin-bottom: 1rem;
  color: white;
}

.material-card p {
  opacity: 0.9;
  line-height: 1.6;
  color: white;
}

.process-section {
  padding: 30px 0 80px 0;
  background: #f8fafc;
}

.process-section h2 {
  text-align: center;
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.step-number {
  background: #1e40af;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h3 {
  color: #1e40af;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #4b5563;
  line-height: 1.6;
}

.advantages-section {
  padding: 30px 0 80px 0;
}

.advantages-section h2 {
  text-align: center;
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.advantage-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #1e40af;
}

.advantage-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.advantage-card h3 {
  color: #1e40af;
  margin-bottom: 1rem;
}

.advantage-card p {
  color: #4b5563;
  line-height: 1.6;
}

.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #071b5c 0%, #2563eb 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
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
}

.btn-primary {
  background: white;
  color: #1e40af;
}

.btn-primary:hover {
  background: #f8fafc;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #22c55e;
  color: white;
}

.btn-secondary:hover {
  background: #16a34a;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background: white;
  color: #1e40af;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.products-section p {
  text-align: center;
  color: #4b5563;
  font-size: 1.1rem;
  margin-bottom: 3rem;
}

.product-category {
  margin-bottom: 4rem;
}

.product-category h3 {
  color: #071b5c;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  font-weight: 600;
}

.calhas-gallery, .rufos-gallery {
  display: grid;
  gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
}

.calhas-gallery {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.rufos-gallery {
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}

.calhas-image-item, .rufos-image-item {
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.calhas-image-item:hover, .rufos-image-item:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
}

.calhas-image, .rufos-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: pointer;
}

.rufos-image {
  object-position: center top;
}

.calhas-image-item.placeholder-mode, .rufos-image-item.placeholder-mode {
  background: linear-gradient(45deg, #071b5c, #2563eb);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media (max-width: 1200px) {
  .calhas-gallery {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.8rem;
    max-width: 800px;
  }
  
  .rufos-gallery {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    gap: 0.8rem;
    max-width: 800px;
  }
}

@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .page-hero h1 {
    font-size: 2rem;
  }
  
  .calhas-gallery,
  .rufos-gallery {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: 0.6rem;
    max-width: 400px;
  }
  
  .product-category h3 {
    text-align: center;
    font-size: 1.5rem;
    color: #071b5c;
  }
}
</style>
