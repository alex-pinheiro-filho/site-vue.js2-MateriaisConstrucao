<template>
  <div class="service-card">
    <div class="service-icon">
      <span>{{ icon }}</span>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <router-link v-if="link" :to="link" class="service-link">
      {{ linkText || 'Saiba mais' }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    },
    linkText: {
      type: String,
      default: 'Saiba mais'
    }
  }
}
</script>

<style scoped>
.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e7eb;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(30, 64, 175, 0.15);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  color: #1e40af;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.service-card p {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-link {
  display: inline-block;
  background: #1e40af;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
}

.service-link:hover {
  background: #1d4ed8;
}
</style>
