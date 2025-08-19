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
    {
      label: "Years Experience",
      value: String(new Date().getFullYear() - 2017),
    },
    { label: "Technologies", value: "10+" },
  ],
};

const skillCategories = [
  {
    name: "Frontend Development",
    skills: [
      { name: "Vue.js", level: 75 },
      { name: "HTML", level: 75 },
      { name: "Javascript", level: 75 },
      { name: "CSS/SCSS", level: 60 },
    ],
  },
  {
    name: "Backend Development",
    skills: [
      { name: ".NET", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "Node.js", level: 50 },
    ],
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 80 },
      { name: "AWS", level: 60 },
      { name: "Selenium", level: 50 },
    ],
  },
];

const projects = [
  {
    id: "1",
    title: "Resume Suite Builder",
    description:
      "Resume Suite Builder is a web application that allows users to easily create professional resumes using a selection of five unique layouts.",
    technologies: ["Vue 3", "TypeScript", "HTML", "CSS"],
    icon: "📋",
    liveUrl: "https://lucaselb.github.io/resume-suite-builder/",
    githubUrl: "https://github.com/lucaselb/resume-suite-builder",
  },
  {
    id: "2",
    title: "Memory Match Game",
    description:
      "This is a web app where you play a memory match game with a Pokemon theme. Flip cards to find matching pairs before time runs out!",
    technologies: ["Vue 3", "TypeScript", "HTML", "CSS"],
    icon: "🎮",
    liveUrl: "https://lucaselb.github.io/memory-match-game/",
    githubUrl: "https://github.com/lucaselb/memory-match-game",
  },
  {
    id: "3",
    title: "Web Builder",
    description:
      "An interactive web design builder built with Vue 3, TypeScript, and Vite. Drag and drop UI components, design layouts visually, and export clean HTML/CSS code.",
    technologies: ["Vue 3", "TypeScript", "HTML", "CSS"],
    icon: "🌐",
    liveUrl: "https://lucaselb.github.io/web-builder/",
    githubUrl: "https://github.com/lucaselb/web-builder",
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
