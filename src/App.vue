<template>
  <div class="app">
    <AppHeader :name="personalInfo.name" :title="personalInfo.title" />

    <main class="main-content">
      <AboutSection
        :description="personalInfo.description"
        :highlights="personalInfo.highlights"
      />

      <SkillsSection :skill-categories="skillCategories" />

      <ProjectsSection :projects="projects" />

      <ContactSection :contact-methods="contactMethods" />
    </main>

    <footer class="app-footer">
      <div class="footer-container">
        <p class="footer-text">
          © {{ currentYear }} {{ personalInfo.name }}. Built with Vue 3 & Vite.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useTheme } from "./composables/useTheme";
import AppHeader from "./components/AppHeader.vue";
import AboutSection from "./components/AboutSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";

const { initTheme } = useTheme();

onMounted(() => {
  initTheme();
});

const currentYear = computed(() => new Date().getFullYear());

const personalInfo = {
  name: "Lucero Benito, Lucas",
  title: "Full Stack Developer",
  description: `I'm a Fullstack Developer with experience building and maintaining web applications using Angular, Vue.js, .NET Core, and Node.js.
                My work spans both frontend and backend development, including the implementation of REST APIs, UI components with modern frameworks, and integration with cloud services like AWS (Lambda, S3, CloudFront, CloudWatch). I’m also experienced in writing unit tests (Jasmine, Mocha, Microsoft Unit Testing with Moq) and automating testing workflows with Selenium and C#.
                I’ve been actively involved in performance testing and production troubleshooting, ensuring that our changes are stable and reliable across environments. Additionally, I’ve taken on leadership responsibilities as a Scrum Lead, helping to drive team delivery and prioritize work.`,
  highlights: [
    { label: "Years Experience", value: new Date().getFullYear() - 2017 },
    { label: "Technologies", value: "10+" },
  ],
};

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "Vue.js", level: 90 },
      { name: "HTML", level: 85 },
      { name: "Javascript", level: 88 },
      { name: "CSS/SCSS", level: 92 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: ".NET", level: 80 },
      { name: "MySQL", level: 82 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 95 },
      { name: "AWS", level: 75 },
      { name: "Selenium", level: 70 },
    ],
  },
];

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Vue 3, featuring real-time inventory management, payment processing, and admin dashboard.",
    technologies: ["Vue 3", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    icon: "🛒",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and project tracking capabilities.",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    icon: "📋",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/taskmanager",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts using real-time data APIs.",
    technologies: ["Vue 3", "Chart.js", "Weather API", "Leaflet"],
    icon: "🌤️",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/weather",
  },
];

const contactMethods = [
  {
    type: "email",
    icon: "✉️",
    label: "Email",
    value: "lucerolucas0994@gmail.com",
    href: "mailto:lucerolucas0994@gmail.com",
  },
  {
    type: "linkedin",
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/lucas-lucero-benito",
    href: "https://www.linkedin.com/in/lucas-lucero-benito/",
  },
  {
    type: "github",
    icon: "🐙",
    label: "GitHub",
    value: "github.com/lucaselb",
    href: "https://github.com/lucaselb",
  },
];
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 80px; /* Account for fixed header */
}

.app-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 2rem 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.footer-text {
  color: var(--text-secondary);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .main-content {
    margin-top: 140px; /* Account for larger mobile header */
  }

  .app-footer {
    padding: 1.5rem 0;
  }

  .footer-container {
    padding: 0 1rem;
  }
}
</style>
