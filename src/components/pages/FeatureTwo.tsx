'use client'

import React, { useRef, memo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useOnScreen from '@/components/hooks/useOnScreen' // Importando o hook

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
  const isVisible = useOnScreen({ threshold: 0.5 }) // Usando o hook para verificar visibilidade

  return (
    <div className="bg-white py-10 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl mb-10 px-7 lg:px-8" ref={ref}>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <motion.h2
            className="text-3xl font-bold tracking-tight text-black sm:text-4xl drop-shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Rotinas personalizadas que trabalham por você
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-1 text-black"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1.25, ease: 'easeOut' }}
          >
            Transforme sua rotina com automação personalizada, simplificando tarefas diárias,
            ajustando luzes e temperatura ao seu comando, e vivendo com a tranquilidade de uma casa
            que trabalha por você.
          </motion.p>
        </div>
        <motion.div
          className="flex items-center justify-center mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none drop-shadow-xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 drop-shadow-xl">
              {features.map(feature => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 1.5 }}
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
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Aplicando memo para otimizar a performance
export default memo(FeatureTwo)
