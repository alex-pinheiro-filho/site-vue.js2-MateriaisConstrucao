<template>
  <div class="home">
    
    <section class="hero">
      <div class="hero-content">
        <img src="@/assets/LogoSemfundoVR.png" alt="Vila Romanna Materiais para Construção" class="hero-logo">
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h2>Nossos Serviços</h2>
        <div class="services-grid">
          <ServiceCard
            v-for="service in services"
            :key="service.title"
            :icon="service.icon"
            :title="service.title"
            :description="service.description"
            :link="service.link"
          />
        </div>
      </div>
    </section>

    <section class="about-preview">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2>A confiaça que você precisa!</h2>
            <p>
              Há mais de 20 anos no mercado, a Vila Romanna Materiais para Construção 
              é sinônimo de qualidade e confiança. Localizada no bairro da Vila Romanna, São Paulo, 
              oferecemos uma ampla variedade de materiais para construção.
            </p>
            <router-link to="/sobre" class="btn btn-primary">Saiba Mais</router-link>
          </div>
          <div class="about-image">
            <img src="@/assets/imgConfianca.png" alt="Vila Romanna - SP" class="about-main-image" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue'

export default {
  name: 'Home',
  components: {
    ServiceCard
  },
  data() {
    return {
      services: [
        {
          icon: '🏗️',
          title: 'Materiais Básicos',
          description: 'Areia, pedra, cimento, tijolos e argamassas',
          link: '/materiais#basicos'
        },
        {
          icon: '🔧',
          title: 'Ferragens',
          description: 'Barras de ferro, colunas e ferramentas',
          link: '/materiais#ferragens'
        },
        {
          icon: '🚿',
          title: 'Materiais Hidráulicos',
          description: 'Tubos, conexões e acessórios',
          link: '/materiais#hidraulicos'
        },
        {
          icon: '⚡',
          title: 'Materiais Elétricos',
          description: 'Fios, cabos e componentes elétricos',
          link: '/materiais#eletricos'
        },
        {
          icon: '🎨',
          title: 'Materiais de Pintura',
          description: 'Tintas, pincéis e acessórios',
          link: '/materiais#pintura'
        },
        {
          icon: '🏠',
          title: 'Calhas e Rufos',
          description: 'Fabricação própria com qualidade garantida',
          link: '/calhas'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #071236 0%, #133786 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

.hero-logo {
  max-height: 200px;
  width: auto;
  margin-bottom: 0.5rem;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.btn {
  padding: 5px 14px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #1e3a8a;
  color: white;
}

.btn-primary:hover {
  background: #071b5c;
  transform: translateY(-2px);
}

.services {
  padding: 30px 0 80px 0;
  background: #f8fafc;
}

.services h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1e40af;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.about-preview {
  padding: 10px 0 50px 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  color: #1e40af;
  margin-bottom: 1.5rem;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #4b5563;
}

.about-main-image {
  width: 80%;
  height: auto;
  border-radius: 12px;
  margin-left: 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
