<template>
  <div class="about">
    <section class="page-hero">
      <div class="container">
        <h1>Sobre Nós</h1>
        <p>Conheça nossa história</p>
      </div>
    </section>
    <section class="about-content">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Nossa História</h2>
            <p>
              Desde 2002, a Vila Romanna Materiais para Construção atua no mercado 
              oferecendo produtos de qualidade para construção civil. 
              Localizada estrategicamente na Rua Marco Aurélio, 650, no bairro da 
              Vila Romana, nossa empresa se consolidou como uma referência em 
              materiais de construção na região.
            </p>
            <h3>Nosso Compromisso</h3>
            <p>
              Ao longo de mais de duas décadas, mantemos nosso compromisso com a 
              qualidade, preços justos e atendimento personalizado e de qualidade. 
              Nossa equipe especializada está sempre pronta para orientar nossos 
              clientes na escolha dos melhores materiais para cada projeto.
            </p>
            <h3>Localização Estratégica</h3>
            <p>
              Situada no coração da Vila Romanna, nossa loja oferece fácil acesso 
              para clientes de toda a região metropolitana de São Paulo. Com 
              estacionamento próprio e facilidades para carga e descarga, 
              proporcionamos comodidade em todas as etapas da compra.
            </p>
          </div>
          <div class="stats-content">
            <div class="stat-card" v-for="stat in stats" :key="stat.label">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="our-store">
      <div class="container">
        <div class="store-content">
          <div class="store-image">
            <div class="store-photo-bg"></div>
            <div class="image-overlay">
              <p>Rua Marco Aurélio, 650 - Vila Romana, São Paulo</p>
            </div>
          </div>
          <div class="store-info">
            <h2>Visite Nossa Loja</h2>
            <p>
              Nossa loja está estrategicamente localizada na Vila Romana, 
              oferecendo fácil acesso e todas as facilidades para nossos clientes. 
              Com mais de 20 anos no bairro, somos uma referência na região.
            </p>
        <div class="store-features">
          <div class="feature-item" v-for="feature in storeFeatures" :key="feature.title">
            <span class="feature-icon">{{ feature.icon }}</span>
            <div class="feature-text">
              <h4>{{ feature.title }}</h4>
              <p>{{ feature.text }}</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mission-vision">
      <div class="container">
        <div class="mv-grid">
          <div class="mv-card" v-for="mv in missionVision" :key="mv.title">
            <div class="mv-icon">{{ mv.icon }}</div>
            <h3>{{ mv.title }}</h3>
            <p>{{ mv.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="team-section">
      <div class="container">
        <h2>Nossa Equipe</h2>
        <p class="team-description">
          Contamos com uma equipe experiente e dedicada, sempre pronta 
          para oferecer o melhor atendimento e orientação técnica.
        </p>
        <div class="team-features">
          <div class="feature" v-for="member in teamFeatures" :key="member.title">
            <div class="feature-icon">{{ member.icon }}</div>
            <h4>{{ member.title }}</h4>
            <p>{{ member.text }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="location-section">
      <div class="container">
        <h2>Nossa Localização</h2>
        <div class="location-content">
          <div class="location-info">
            <h3>Vila Romanna - São Paulo</h3>
            <p>
              <strong>Endereço:</strong> Rua Marco Aurélio, 650<br>
              <strong>Bairro:</strong> Vila Romana<br>
              <strong>Cidade:</strong> São Paulo - SP<br>
              <strong>Telefone:</strong> (11) 3862-1922<br>
              <strong>WhatsApp:</strong> (11) 96930-0805
            </p>
          </div>
          <div class="location-map">
            <a href="https://maps.google.com/?q=Rua+Marco+Aurélio+650+Vila+Romanna+São+Paulo" target="_blank" class="map-link">
              <img src="@/assets/imgMapa.png" alt="Mapa da localização Vila Romanna" class="map-image" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      stats: [
        { number: '2002', label: 'Ano de Fundação' },
        { number: '20+', label: 'Anos de Experiência' },
        { number: '10000+', label: 'Clientes Satisfeitos' },
        { number: '7+', label: 'Categorias de Produtos' }
      ],
      storeFeatures: [
        { icon: '🅿️', title: 'Estacionamento Próprio', text: 'Comodidade e segurança para nossos clientes' },
        { icon: '🚛', title: 'Área de Carga/Descarga', text: 'Facilidade para transporte de materiais' },
        { icon: '👥', title: 'Atendimento Especializado', text: 'Equipe experiente para orientar sua compra' }
      ],
      missionVision: [
        { icon: '🎯', title: 'Nossa Missão', text: 'Fornecer materiais de alta qualidade com atendimento especializado, contribuindo para o sucesso de cada projeto dos nossos clientes.' },
        { icon: '👁️', title: 'Nossa Visão', text: 'Ser a loja de materiais de construção mais confiável da região, reconhecida pela qualidade dos produtos e excelência no atendimento.' },
        { icon: '⭐', title: 'Nossos Valores', text: 'Qualidade, honestidade, compromisso com o cliente, inovação e responsabilidade social e ambiental em todas as nossas atividades.' }
      ],
      teamFeatures: [
        { icon: '👨‍💼', title: 'Atendimento Especializado', text: 'Nossos vendedores conhecem profundamente todos os produtos' },
        { icon: '🚚', title: 'Entrega Rápida', text: 'Serviço de entrega ágil para toda a região metropolitana' },
        { icon: '💬', title: 'Consultoria Técnica', text: 'Orientação completa para escolha dos materiais ideais' }
      ]
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
.about-content {
  padding: 30px 0 80px 0;
}
.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}
.text-content h2 {
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.text-content h3 {
  color: #1e40af;
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
}
.text-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #4b5563;
  margin-bottom: 1.5rem;
}
.stats-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.stat-card {
  background: linear-gradient(135deg, #071b5c, #2563eb);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
}
.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.stat-label {
  font-size: 0.9rem;
  opacity: 0.9;
}
.mission-vision {
  padding: 30px 0 80px 0;
  background: #f8fafc;
}
.mv-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.mv-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.mv-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.mv-card h3 {
  color: #1e40af;
  margin-bottom: 1rem;
}
.mv-card p {
  color: #4b5563;
  line-height: 1.6;
}
.team-section {
  padding: 30px 0 80px 0;
}
.team-section h2 {
  text-align: center;
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.team-description {
  text-align: center;
  font-size: 1.2rem;
  color: #4b5563;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.team-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.feature {
  text-align: center;
  padding: 1.5rem;
}
.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.feature h4 {
  color: #1e40af;
  margin-bottom: 1rem;
}
.feature p {
  color: #4b5563;
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
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
.location-info h3 {
  color: #1e40af;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}
.location-info p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 2rem;
}
.location-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.location-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #4b5563;
  line-height: 1;
}
.location-feature .feature-icon {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  min-width: 32px;
  justify-content: center;
}
.location-map {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.map-link {
  display: block;
  position: relative;
  text-decoration: none;
  cursor: pointer;
}
.map-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.map-link:hover .map-image {
  transform: scale(1.02);
}
.map-placeholder {
  background: linear-gradient(45deg, #071b5c, #2563eb);
  color: white;
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.map-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.our-store {
  padding: 30px 0 80px 0;
  background: #f8fafc;
}
.store-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
  .store-image {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    height: 500px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .store-image {
      height: 260px;
    }
    .image-overlay {
      padding: 0.3rem 0.5rem 0.7rem 0.5rem;
      font-size: 0.95rem;
    }
    .image-overlay p {
      margin-bottom: 0;
      font-size: 0.95rem;
    }
  }
.store-photo-bg {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/fotoFrenteLoja.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(7, 18, 54, 0.9));
  color: white;
  padding: 2rem;
  text-align: center;
}
.image-overlay h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: white;
}
.image-overlay p {
  font-size: 1rem;
  opacity: 0.9;
  color: white;
}
.store-info h2 {
  color: #071b5c;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.store-info > p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4b5563;
  margin-bottom: 2.5rem;
}
.store-features {
  display: grid;
  gap: 1.5rem;
}
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}
.feature-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #f8fafc, #e2e8f0);
}
.feature-item:hover .feature-icon {
  transform: scale(1.1);
}
.feature-item:hover .feature-text h4 {
  color: #2563eb;
}
.feature-icon {
  font-size: 1.5rem;
  min-width: 40px;
  text-align: center;
  transition: transform 0.3s ease;
}
.feature-text h4 {
  color: #071b5c;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}
.feature-text p {
  color: #4b5563;
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .stats-content {
    grid-template-columns: 1fr;
  }
  .location-content {
    grid-template-columns: 1fr;
  }
  .store-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .page-hero h1 {
    font-size: 2rem;
  }
}
</style>
