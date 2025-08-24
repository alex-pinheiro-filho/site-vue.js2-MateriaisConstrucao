<template>
  <div class="materials">
    
    <section class="page-hero">
      <div class="container">
        <h1>Nossos Materiais</h1>
        <p>Linha completa de materiais para construção com qualidade garantida</p>
      </div>
    </section>

    
    <section class="categories-overview">
      <div class="container">
        <h2>Categorias de Materiais</h2>
        <div class="categories-grid">
          <div class="category-card" @click="scrollToCategory('basicos')">
            <div class="category-icon">🏗️</div>
            <h3>Materiais Básicos</h3>
            <p>Fundação da sua obra</p>
          </div>
          
          <div class="category-card" @click="scrollToCategory('ferragens')">
            <div class="category-icon">🔧</div>
            <h3>Ferragens</h3>
            <p>Estrutura e resistência</p>
          </div>
          
          <div class="category-card" @click="scrollToCategory('hidraulicos')">
            <div class="category-icon">🚿</div>
            <h3>Hidráulicos</h3>
            <p>Sistema de água</p>
          </div>
          
          <div class="category-card" @click="scrollToCategory('eletricos')">
            <div class="category-icon">⚡</div>
            <h3>Elétricos</h3>
            <p>Instalações elétricas</p>
          </div>
          
          <div class="category-card" @click="scrollToCategory('pintura')">
            <div class="category-icon">🎨</div>
            <h3>Pintura</h3>
            <p>Acabamento e proteção</p>
          </div>
          
          <div class="category-card" @click="scrollToCategory('ferramentas')">
            <div class="category-icon">🛠️</div>
            <h3>Ferramentas</h3>
            <p>Equipamentos e utensílios</p>
          </div>
        </div>
      </div>
    </section>

    
    <section id="basicos" class="material-category">
      <div class="container">
        <div class="category-header">
          <div class="category-icon-large">🏗️</div>
          <div class="category-info">
            <h2>Materiais Básicos</h2>
            <p>A base sólida para qualquer construção. Oferecemos materiais de primeira qualidade para alicerces, estruturas e vedações.</p>
          </div>
        </div>
        
        <div class="products-grid">
          <div class="product-item">
            <h4>Areia</h4>
            <ul>
              <li>Areia ensacada (20kg)</li>
              <li>Areia a granel (m³)</li>
              <li>Areia fina e média</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Pedra</h4>
            <ul>
              <li>Pedra ensacada (20kg)</li>
              <li>Pedra a granel (m³)</li>
              <li>Pedrisco ensacado (20kg)</li>
              <li>Pedrisco a granel (m³)</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Cimento</h4>
            <ul>
              <li>Cimento CP II</li>
              <li>Cimento CP III</li>
              <li>Sacos de 50kg</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Tijolos e Blocos</h4>
            <ul>
              <li>Tijolo cerâmico comum</li>
              <li>Tijolo de 6 furos</li>
              <li>Bloco estrutural</li>
              <li>Bloco de vedação</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Argamassas</h4>
            <ul>
              <li>Argamassa interna</li>
              <li>Argamassa externa</li>
              <li>Argamassa piso sobre piso</li>
              <li>Argamassa para porcelanato</li>
              <li>Rejunte</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Massas</h4>
            <ul>
              <li>Massa corrida PVA</li>
              <li>Massa acrílica</li>
              <li>Massa para madeira</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    
    <section id="ferragens" class="material-category alt-bg">
      <div class="container">
        <div class="category-header">
          <div class="category-icon-large">🔧</div>
          <div class="category-info">
            <h2>Ferragens</h2>
            <p>Estruturas em aço para garantir a resistência e durabilidade da sua construção.</p>
          </div>
        </div>
        
        <div class="products-grid">
          <div class="product-item">
            <h4>Barras de Ferro</h4>
            <ul>
              <li>Barras de 6 metros</li>
              <li>Barras de 12 metros</li>
              <li>Bitolas variadas (6mm a 25mm)</li>
              <li>Aço CA-50 e CA-60</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Colunas</h4>
            <ul>
              <li>Colunas estruturais</li>
              <li>Sapatas</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Acessórios</h4>
            <ul>
              <li>Parafusos e porcas</li>
              <li>Arruelas</li>
              <li>Chumbadores</li>
              <li>Buchas e parafusos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    
    <section id="hidraulicos" class="material-category">
      <div class="container">
        <div class="category-header">
          <div class="category-icon-large">🚿</div>
          <div class="category-info">
            <h2>Materiais Hidráulicos</h2>
            <p>Sistema completo para instalações hidráulicas residenciais e comerciais.</p>
          </div>
        </div>
        
        <div class="products-grid">
          <div class="product-item">
            <h4>Tubos</h4>
            <ul>
              <li>Tubos PVC água fria</li>
              <li>Tubos PVC água quente</li>
              <li>Tubos PVC esgoto</li>
              <li>Tubos flexíveis</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Conexões</h4>
            <ul>
              <li>Conexões água</li>
              <li>Conexões esgoto</li>
              <li>Conexões água quente</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Registros</h4>
            <ul>
              <li>Registro de gaveta</li>
              <li>Registro de esfera</li>
              <li>Registro de pressão</li>
              <li>Válvulas de retenção</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Acessórios</h4>
            <ul>
              <li>Cola PVC</li>
              <li>Sifões</li>
              <li>Ralos</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    
    <section id="eletricos" class="material-category alt-bg">
      <div class="container">
        <div class="category-header">
          <div class="category-icon-large">⚡</div>
          <div class="category-info">
            <h2>Materiais Elétricos</h2>
            <p>Componentes seguros e certificados para suas instalações elétricas.</p>
          </div>
        </div>
        
        <div class="products-grid">
          <div class="product-item">
            <h4>Fios e Cabos</h4>
            <ul>
              <li>Fio flexível 1,5mm a 10mm</li>
              <li>Fio paralelo</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Instalação</h4>
            <ul>
              <li>Disjuntores</li>
              <li>Eletrodutos</li>
              <li>Caixas de luz</li>
              <li>Conduítes</li>
              <li>Abraçadeiras</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Acessórios</h4>
            <ul>
              <li>Interruptores</li>
              <li>Tomadas</li>
              <li>Espelhos</li>
              <li>Fitas isolante</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    
    <section id="pintura" class="material-category">
      <div class="container">
        <div class="category-header">
          <div class="category-icon-large">🎨</div>
          <div class="category-info">
            <h2>Materiais de Pintura</h2>
            <p>Tintas e acessórios para dar vida e proteger suas superfícies.</p>
          </div>
        </div>
        
        <div class="products-grid">
          <div class="product-item">
            <h4>Tintas</h4>
            <ul>
              <li>Tinta látex PVA</li>
              <li>Tinta acrílica</li>
              <li>Tinta esmalte</li>
              <li>Tinta epóxi</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Primers</h4>
            <ul>
              <li>Fundo preparador</li>
              <li>Primer antiferruginoso</li>
              <li>Selador acrílico</li>
              <li>Zarcão</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Ferramentas</h4>
            <ul>
              <li>Pincéis variados</li>
              <li>Rolos de lã</li>
              <li>Rolos de espuma</li>
              <li>Bandejas</li>
              <li>Extensores</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Acessórios</h4>
            <ul>
              <li>Fita crepe</li>
              <li>Lonas plásticas</li>
              <li>Solventes</li>
              <li>Removedores</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    
    <section id="ferramentas" class="material-category alt-bg">
      <div class="container">
        <div class="category-header">
          <div class="category-icon-large">🛠️</div>
          <div class="category-info">
            <h2>Ferramentas</h2>
            <p>Equipamentos profissionais para facilitar e agilizar seu trabalho.</p>
          </div>
        </div>
        
        <div class="products-grid">
          <div class="product-item">
            <h4>Manuais</h4>
            <ul>
              <li>Martelos</li>
              <li>Alicates</li>
              <li>Chaves de fenda</li>
              <li>Chaves Phillips</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Corte</h4>
            <ul>
              <li>Serras</li>
              <li>Esmerilhadeiras</li>
              <li>Discos de corte</li>
              <li>Lâminas</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Medição</h4>
            <ul>
              <li>Trenas</li>
              <li>Níveis</li>
              <li>Esquadros</li>
              <li>Réguas</li>
            </ul>
          </div>
          
          <div class="product-item">
            <h4>Proteção</h4>
            <ul>
              <li>Capacetes</li>
              <li>Luvas</li>
              <li>Óculos de proteção</li>
              <li>Máscaras</li>
              <li>Protetores auriculares</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Não encontrou o que procura?</h2>
          <p>Entre em contato conosco! Temos muito mais produtos disponíveis.</p>
          <div class="cta-buttons">
            <a href="tel:+551138621922" class="btn btn-primary">
              <span class="btn-icon">📞</span>
              (11) 3862-1922
            </a>
            <router-link to="/contato" class="btn btn-secondary">
              <span class="btn-icon">📧</span>
              Fale Conosco
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Materials',
  methods: {
    scrollToCategory(categoryId) {
      const element = document.getElementById(categoryId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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

.categories-overview {
  padding: 80px 0;
}

.categories-overview h2 {
  text-align: center;
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.category-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: #1e40af;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.category-card h3 {
  color: #1e40af;
  margin-bottom: 0.5rem;
}

.category-card p {
  color: #6b7280;
  font-size: 0.9rem;
}

.material-category {
  padding: 80px 0;
}

.alt-bg {
  background: #f8fafc;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.category-icon-large {
  font-size: 4rem;
  background: linear-gradient(135deg, #071b5c, #2563eb);
  color: white;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.category-info h2 {
  color: #1e40af;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.category-info p {
  color: #4b5563;
  font-size: 1.1rem;
  line-height: 1.6;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.product-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #1e40af;
}

.alt-bg .product-item {
  background: #f8fafc;
  border: 1px solid #e5e7eb;
}

.product-item h4 {
  color: #1e40af;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.product-item ul {
  list-style: none;
  padding: 0;
}

.product-item li {
  color: #4b5563;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;
}

.product-item li:before {
  content: "•";
  color: #1e40af;
  font-weight: bold;
  position: absolute;
  left: 0;
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
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #1e40af;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (max-width: 768px) {
  .category-header {
    flex-direction: column;
    text-align: center;
  }
  
  .page-hero h1 {
    font-size: 2rem;
  }
  
  .category-info h2 {
    font-size: 2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
