import { useEffect } from 'react'

export default function useSmoothScroll() {
  useEffect(() => {
    const smoothScroll = (targetY: number, duration: number) => {
      const startY = window.scrollY
      const distance = targetY - startY
      let startTime: number | null = null

      function animation(currentTime: number) {
        if (!startTime) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1) // Para garantir que não passe de 1
        const run = easeInOutCubic(progress, startY, distance)
        window.scrollTo(0, run)
        if (progress < 1) requestAnimationFrame(animation)
      }

      // Função de easing mais suave
      function easeInOutCubic(t: number, b: number, c: number) {
        return t < 0.5
          ? 4 * t * t * t * c + b // Acelera no início
          : 1 - (Math.pow(-2 * t + 2, 3) / 2) * c + b // Desacelera no final
      }

      requestAnimationFrame(animation)
    }

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault()
        const targetId = target.getAttribute('href')
        const targetElement = document.querySelector(targetId!)
        if (targetElement) {
          const targetY = targetElement.getBoundingClientRect().top + window.scrollY
          smoothScroll(targetY, 1200) // Aumentando a duração para 1200ms para mais suavidade
        }
      }
    }

    document.addEventListener('click', handleLinkClick)

    return () => {
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])
}
