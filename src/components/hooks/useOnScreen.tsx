// hooks/useOnScreen.ts
import { useEffect, useRef, useState } from 'react'

const useOnScreen = (options: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, options)

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef) 
    }
  }, [ref, options])

  return [ref, isVisible]
}

export default useOnScreen
