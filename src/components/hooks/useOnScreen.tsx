// hooks/useOnScreen.ts
import { useEffect, useRef, useState } from 'react'

const useOnScreen = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect() // Para parar a observação após a visibilidade
      }
    }, options)

    const currentRef = ref.current // Armazena ref.current em uma variável

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef) // Usa a variável armazenada
    }
  }, [ref, options])

  return [ref, isVisible] // Retornando ref e isVisible
}

export default useOnScreen
