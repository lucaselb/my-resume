<template>
  <section id="about" class="about-section">
    <div class="section-container">
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">About Me</h2>
          <p class="about-description">
            {{ description }}
          </p>
          <div class="about-highlights">
            <div v-for="highlight in highlights" :key="highlight.label" class="highlight-item">
              <span class="highlight-value">{{ highlight.value }}</span>
              <span class="highlight-label">{{ highlight.label }}</span>
            </div>
          </div>
        </div>
        <div class="about-image">
          <div class="image-placeholder">
            <span class="image-icon">👨‍💻</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Highlight {
  label: string
  value: string
}

defineProps<{
  description: string
  highlights: Highlight[]
}>()
</script>

<style scoped>
.about-section {
  padding: 8rem 0 4rem;
  background: var(--bg-primary);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.about-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
}

.highlight-item {
  text-align: center;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.highlight-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-color);
}

.highlight-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 200px;
  height: 200px;
  background: var(--bg-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--accent-color);
}

.image-icon {
  font-size: 4rem;
}

@media (max-width: 768px) {
  .about-section {
    padding: 6rem 0 3rem;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .about-highlights {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
