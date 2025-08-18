<template>
  <section id="contact" class="contact-section">
    <div class="section-container">
      <h2 class="section-title">Get In Touch</h2>
      
      <div class="contact-content">
        <div class="contact-info">
          <h3 class="contact-subtitle">Let's Work Together</h3>
          <p class="contact-description">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to discuss potential collaborations.
          </p>
          
          <div class="contact-methods">
            <div v-for="method in contactMethods" :key="method.type" class="contact-method">
              <span class="contact-icon">{{ method.icon }}</span>
              <div class="contact-details">
                <span class="contact-label">{{ method.label }}</span>
                <a :href="method.href" class="contact-value">{{ method.value }}</a>
              </div>
            </div>
          </div>
        </div>
        
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-input"
              :class="{ 'error': errors.name }"
              placeholder="Your full name"
            />
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              :class="{ 'error': errors.email }"
              placeholder="your.email@example.com"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>
          
          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              class="form-input"
              :class="{ 'error': errors.subject }"
              placeholder="What's this about?"
            />
            <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
          </div>
          
          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-textarea"
              :class="{ 'error': errors.message }"
              placeholder="Tell me about your project or idea..."
              rows="6"
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>
          
          <button type="submit" class="submit-button" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else>Sending...</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const contactMethods = [
  {
    type: 'email',
    icon: '📧',
    label: 'Email',
    value: 'lucerolucas0994@gmail.com',
    href: 'mailto:lucerolucas0994@gmail.com'
  },
  {
    type: 'linkedin',
    icon: '🔗',
    label: 'LinkedIn',
    value: 'linkedin.com/in/lucas-lucero',
    href: 'https://linkedin.com/in/lucas-lucero'
  }
]

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
    isValid = false
  }

  return isValid
}

const handleSubmit = () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submitStatus.value = 'idle'

  try {
    // Open mailto link with subject and body
    const subject = encodeURIComponent(form.subject)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage: ${form.message}`)
    const mailto = `mailto:lucerolucas0994@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailto

    submitStatus.value = 'success'

    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-section {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.contact-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-icon {
  font-size: 1.5rem;
  width: 2.5rem;
  text-align: center;
}

.contact-details {
  display: flex;
  flex-direction: column;
}

.contact-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.contact-value {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
}

.contact-value:hover {
  color: var(--accent-color);
}

.contact-form {
  background: var(--bg-primary);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--text-primary);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--bg-secondary);
  color: var(--text-primary);
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-color);
}

.form-input.error,
.form-textarea.error {
  border-color: #ef4444;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  display: block;
  margin-top: 0.5rem;
  color: #ef4444;
  font-size: 0.875rem;
}

.submit-button {
  width: 100%;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background: var(--accent-dark);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status-message {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
}

.status-message.success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.status-message.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

@media (max-width: 768px) {
  .contact-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-form {
    padding: 1.5rem;
  }
}
</style>
