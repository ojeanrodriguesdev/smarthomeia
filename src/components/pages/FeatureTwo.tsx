'use client'

import React, { useEffect, useRef, useState, memo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Definição do array de recursos
const features = [
  {
    name: 'Economia de Tempo',
    description:
      'Agende tarefas diárias como apagar luzes ou ajustar a temperatura automaticamente.',
    src: '/images/FeatureTwo/icon1.svg',
    size: 24,
  },
  {
    name: 'Praticidade Sem Toque',
    description:
      'Lista completa de dispositivos inteligentes, permitindo ligar, desligar ou ajustar configurações rapidamente.',
    src: '/images/FeatureTwo/icon2.svg',
    size: 24,
  },
  {
    name: 'Integração Total',
    description: 'Funciona com Google Assistente, Amazon Alexa e outros sistemas.',
    src: '/images/FeatureTwo/icon3.svg',
    size: 24,
  },
]

function FeatureTwo() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [scrollY, setScrollY] = useState(0)

  // Função para lidar com o scroll
  const handleScroll = () => {
    if (ref.current) {
      const { top, bottom } = ref.current.getBoundingClientRect()
      const viewHeight = window.innerHeight

      if (top < viewHeight && bottom > 0) {
        const scrollPosition = Math.min(viewHeight, top + viewHeight) / viewHeight
        setScrollY(scrollPosition)
      } else {
        setScrollY(0)
      }
    }
  }

  // Hook useEffect para adicionar e remover o listener de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-white py-10 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl mb-10 px-7 lg:px-8" ref={ref}>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-black sm:text-4xl drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: scrollY > 0.1 ? 1 : 0, y: scrollY > 0.1 ? 0 : 50 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Rotinas personalizadas que trabalham por você
          </motion.h2>
          <p className="mt-6 text-lg leading-1 text-black">
            Transforme sua rotina com automação personalizada, simplificando tarefas diárias,
            ajustando luzes e temperatura ao seu comando, e vivendo com a tranquilidade de uma casa
            que trabalha por você.
          </p>
        </div>
        <div className="flex items-center justify-center mt-10">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none drop-shadow-xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 drop-shadow-xl">
              {features.map(feature => (
                <div
                  key={feature.name}
                  className="flex flex-col bg-gradient-to-t from-white to-white py-6 px-7 rounded-[20px] drop-shadow-2xl"
                >
                  <dt className="text-base leading-7 text-black font-bold font-opensans">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center">
                      <Image
                        width={48}
                        height={48}
                        src={feature.src}
                        alt={feature.name}
                        className="drop-shadow-2xl"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-black">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-green-testimonials"
                      >
                        Saiba mais <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

// Aplicando memo para otimizar a performance
export default memo(FeatureTwo)
