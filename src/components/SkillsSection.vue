<template>
  <section id="skills" class="skills-section">
    <div class="section-container">
      <h2 class="section-title">Skills & Technologies</h2>
      
      <div class="skills-grid">
        <div v-for="category in skillCategories" :key="category.name" class="skill-category">
          <h3 class="category-title">{{ category.name }}</h3>
          <div class="skills-list">
            <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-level">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  level: number
}

interface SkillCategory {
  name: string
  skills: Skill[]
}

defineProps<{
  skillCategories: SkillCategory[]
}>()
</script>

<style scoped>
.skills-section {
  padding: 4rem 0;
  background: var(--bg-secondary);
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.category-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  padding: 0;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
  color: var(--text-primary);
}

.skill-level {
  font-size: 0.875rem;
  color: var(--accent-color);
  font-weight: 600;
}

.skill-bar {
  height: 8px;
  background: var(--bg-secondary);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-color), var(--accent-light));
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

@media (max-width: 768px) {
  .skills-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
