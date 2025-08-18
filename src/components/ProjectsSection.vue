<template>
  <section id="projects" class="projects-section">
    <div class="section-container">
      <h2 class="section-title">Featured Projects</h2>
      
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.id" class="project-card">
          <div class="project-image">
            <div class="image-placeholder">
              <span class="project-icon">{{ project.icon }}</span>
            </div>
            <div class="project-overlay">
              <div class="project-links">
                <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="project-link">
                  <span>🔗</span> Live Demo
                </a>
                <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="project-link">
                  <span>📂</span> Source Code
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  icon: string
  liveUrl?: string
  githubUrl?: string
}

defineProps<{
  projects: Project[]
}>()
</script>

<style scoped>
.projects-section {
  padding: 4rem 0;
  background: var(--bg-primary);
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  text-align: center;
  margin-bottom: 3rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--bg-secondary);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.project-image {
  position: relative;
  height: 200px;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--accent-color), var(--accent-light));
}

.project-icon {
  font-size: 3rem;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: var(--accent-color);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: background 0.3s ease;
}

.project-link:hover {
  background: var(--accent-dark);
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--bg-primary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.875rem;
  border: 1px solid var(--border-color);
}

@media (max-width: 768px) {
  .projects-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-links {
    flex-direction: column;
  }
}
</style>
