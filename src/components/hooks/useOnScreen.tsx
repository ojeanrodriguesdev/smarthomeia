import { useEffect, useRef, useState, RefObject } from 'react'

const useOnScreen = (options: IntersectionObserverInit): [RefObject<HTMLElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    const currentRef = ref.current

    if (currentRef) {
      observer.current.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.current?.unobserve(currentRef)
      }
    }
  }, [options])

  return [ref, isVisible]
}

export default useOnScreen
