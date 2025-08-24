<template>
  <header class="site-header">
    <div class="container">
      <div class="header-content">
        <nav class="main-nav" :class="{ 'nav-open': mobileMenuOpen }">
          <router-link to="/" @click="closeMobileMenu" exact>Home</router-link>
          <router-link to="/sobre" @click="closeMobileMenu">Sobre Nós</router-link>
          <router-link to="/calhas" @click="closeMobileMenu">Fábrica de Calhas e Rufos</router-link>
          <router-link to="/materiais" @click="closeMobileMenu">Materiais</router-link>
          <router-link to="/contato" @click="closeMobileMenu">Contato</router-link>
        </nav>
        
        <div class="header-contact">
          <a href="tel:+551138621922" class="contact-link">
            <span class="contact-icon">📞</span>
            (11) 3862-1922
          </a>
          <a href="https://wa.me/5511969300805" class="contact-link whatsapp" target="_blank">
            <span class="contact-icon">📱</span>
            WhatsApp
          </a>
        </div>
        
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
    }
  },
  watch: {
    $route() {
      this.mobileMenuOpen = false;
    }
  }
}
</script>

<style scoped>
.site-header {
  background: linear-gradient(135deg,#071236 0%, #092275 100%);
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  gap: 2rem;
}

.main-nav {
  display: flex;
  gap: 2rem;
  margin-right: auto;
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: opacity 0.3s ease;
  outline: none;
}

.main-nav a:hover {
  opacity: 0.8;
}

.main-nav a:focus {
  outline: none;
  opacity: 0.8;
}

.main-nav a.router-link-active {
  opacity: 1;
}

.main-nav a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: white;
}

.header-contact {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;
  outline: none;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.contact-link:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.2);
}

.contact-link.whatsapp {
  background: #22c55e;
}

.contact-link.whatsapp:hover {
  background: #16a34a;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: white;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .header-content {
    flex-wrap: wrap;
    padding: 0.3rem 0 0.2rem 0;
    gap: 0.3rem;
    position: relative;
  }
  
  .header-contact {
    order: 2;
    flex-basis: auto;
    margin-top: 0;
    flex-direction: row;
    gap: 0.3rem;
    display: flex;
  }
  
  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #1e3a8a;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-right: 0;
  }
  
  .main-nav.nav-open {
    display: flex;
  }
  
  .main-nav a {
    padding: 0.7rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .mobile-menu-btn {
    display: flex;
    margin-left: auto;
    order: 3;
    align-items: center;
    height: 40px;
  }
  
  .header-contact {
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 0.3rem;
  }
  
  .contact-link {
    font-size: 0.7rem;
    padding: 0.18rem 0.5rem;
    min-width: unset;
    border-radius: 14px;
  }
}

@media (max-width: 480px) {
}
</style>
