<template>
  <header class="app-header">
    <nav class="nav-container">
      <div class="nav-brand">
        <h1 class="brand-name">{{ name }}</h1>
        <p class="brand-title">{{ title }}</p>
      </div>
      
      <div class="nav-menu">
        <a href="#about" class="nav-link" @click="handleNavClick">About</a>
        <a href="#skills" class="nav-link" @click="handleNavClick">Skills</a>
        <a href="#projects" class="nav-link" @click="handleNavClick">Projects</a>
        <a href="#contact" class="nav-link" @click="handleNavClick">Contact</a>
        
        <button @click="toggleTheme" class="theme-toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
          <span class="theme-icon">{{ isDark ? '☀️' : '🌙' }}</span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import { useNavigation } from '../composables/useNavigation'

const { isDark, toggleTheme } = useTheme()
const { handleNavClick } = useNavigation()

defineProps<{
  name: string
  title: string
}>()
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--bg-header);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  text-align: left;
}

.brand-name {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.brand-title {
  margin: 0.25rem 0 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--accent-color);
}

.theme-toggle {
  background: none;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  border-color: var(--accent-color);
  transform: scale(1.1);
}

.theme-icon {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-menu {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
