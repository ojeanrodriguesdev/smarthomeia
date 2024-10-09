import { useEffect, useRef, useState } from 'react'

const useOnScreen = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting) // Define visibilidade com base no estado de interseção
    }, options)

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [ref, options])

  return [ref, isVisible] as const
}

export default useOnScreen