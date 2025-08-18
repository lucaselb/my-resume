export function useNavigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // Fixed header height
      const elementPosition = element.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleNavClick = (event: Event) => {
    event.preventDefault()
    const target = event.target as HTMLAnchorElement
    const href = target.getAttribute('href')
    
    if (href && href.startsWith('#')) {
      const sectionId = href.substring(1)
      scrollToSection(sectionId)
    }
  }

  return {
    scrollToSection,
    handleNavClick
  }
}
