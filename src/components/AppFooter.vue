<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <img src="@/assets/LogoSemfundoVR.png" alt="Vila Romanna" class="footer-logo">
          <p>Desde 2002 construindo com você!</p>
        </div>
        
        <div class="footer-section">
          <h4>Contato</h4>
          <p>📞 (11) 3862-1922</p>
          <p>📱 (11) 96930-0805</p>
          <p>📍 Rua Marco Aurélio, 650<br>Vila Romana - São Paulo SP</p>
        </div>
        
        <div class="footer-section">
          <h4>Produtos</h4>
          <p>• Materiais Básicos</p>
          <p>• Ferragens</p>
          <p>• Hidráulicos e Elétricos</p>
          <p>• Calhas e Rufos</p>
        </div>
        
        <div class="footer-section">
          <h4>Horário</h4>
          <p>Segunda a Sexta: 7h às 18h</p>
          <p>Sábado: 8h às 13h</p>
          <p>Domingo: Fechado</p>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 Vila Romanna Materiais para Construção. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.site-footer {
  background: #071236;
  color: white;
  padding: 3rem 0 1rem 0;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-logo {
  max-height: 120px;
  width: auto;
  margin-bottom: 1rem;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: white;
}

.footer-section h4 {
  margin-bottom: 1rem;
  color: white;
}

.footer-section p {
  margin-bottom: 0.5rem;
  opacity: 0.9;
  line-height: 1.6;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
  text-align: center;
  opacity: 0.8;
}
</style>
