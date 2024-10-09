'use client'

import React, { useRef, memo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useOnScreen from '@/components/hooks/useOnScreen'


const features = [
  {
    name: 'Automação de Rotinas:',
    description:
      'Crie rotinas personalizadas que ligam ou desligam luzes, aparelhos e outros dispositivos automaticamente com base em horários ou detecção de presença.',
    src: '/images/Feature/icone1.svg',
    size: 24,
  },
  {
    name: 'Controle Remoto Via Aplicativo:',
    description:
      'Gerencie todos os dispositivos da sua casa remotamente, ajustando iluminação, temperatura e segurança com um toque no aplicativo, de qualquer lugar.',
    src: '/images/Feature/icone2.svg',
    size: 16,
  },
  {
    name: 'Comandos de Voz Integrados:',
    description:
      'Controle seus dispositivos usando comandos de voz com assistentes virtuais como Google Assistente e Alexa, tornando o gerenciamento da casa mais fácil e rápido.',
    src: '/images/Feature/icone3.svg',
    size: 24,
  },
]

function Feature() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isVisible = useOnScreen({ threshold: 0.5 })

  return (
    <div className="bg-green-feature rounded-t-[15px] relative z-30 overflow-hidden">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <div className="relative isolate overflow-hidden px-6 pt-20 sm:px-10 sm:py-24 md:pt-20 md:pb-0 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:items-center overflow-hidden">
            {/* Conteúdo principal */}
            <div>
              <motion.h2
                className="text-[22px] md:text-[39px] lg:text-[32px] xl:text-[34px] font-bold font-opensans tracking-tight text-white drop-shadow-lg text-center lg:text-start xl:px-0 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} 
                transition={{ duration: 0.75 }}
              >
                Gerenciar Sua Casa Está Se
                <br /> Tornando um{' '}
                <span className="gradient-mask font-bold drop-shadow-2xl" data-text="Desafio">
                  Desafio
                </span>
                ?
              </motion.h2>
              <motion.p
                className="mt-6 text-lg font-semibold font-opensans leading-1 text-white drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} 
                transition={{ duration: 1 }}
              >
                Você está enfrentando problemas para gerenciar seus dispositivos domésticos? Cansado
                de controlar luzes, câmeras e aparelhos de forma manual? Você não está sozinho.
                Milhares de pessoas como você ainda lidam com a dificuldade de gerenciar seus
                dispositivos de maneira integrada e eficiente. É por isso que criamos o SmartHome
                AI.
              </motion.p>

              <dl className="mt-10 space-y-5 text-base leading-1 text-white font-opensans font-medium drop-shadow-lg">
                {features.map(feature => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 1.5 }}
                  >
                    <div className="relative">
                      <dt className="flex items-center font-opensans font-bold text-white drop-shadow-lg">
                        <Image
                          src={feature.src}
                          alt={feature.name}
                          width={feature.size}
                          height={feature.size}
                          className="mr-4"
                          quality={100}
                          loading="eager"
                          priority={true}
                        />
                        {feature.name}
                      </dt>
                      <dd className="mt-2">{feature.description}</dd>
                    </div>
                  </motion.div>
                ))}
              </dl>
            </div>

            {/* Imagem do lado direito - sem animação */}
            <motion.div
              className="relative flex items-center lg:items-end h-full w-full z-30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1.75 }}
            >
              <Image
                src="/images/Feature/image.png"
                alt="Smart Home AI"
                width={627}
                height={634}
                quality={100}
                loading="eager"
                priority={true}
                className="w-full h-auto mb-16 lg:mb-0 lg:ml-0 lg:w-[627px] lg:h-[634px] object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        {/* SVG do fundo */}
        <motion.svg
          className="absolute left-[50%] top-32 md:top-20 transform -translate-x-1/2 scale-100 sm:scale-110 lg:scale-125 opacity-70 drop-shadow-lg z-[-1] overflow-hidden"
          width="800"
          height="600"
          viewBox="0 0 500 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'blur(120px)' }}
          animate={{ scale: [1, 2, 1] }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF6B93', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FF9A44', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M120 0C130.5 80 145 160 200 220C250 270 300 270 360 240C420 210 480 150 520 170C560 190 540 250 540 290C540 330 520 400 460 440C400 480 350 460 320 460C290 460 280 510 200 540C120 570 60 560 0 540C-60 520 -80 480 -90 460C-100 440 -90 420 -90 380C-90 340 -80 300 -70 270C-60 240 -50 230 -50 220C-50 210 -40 200 -30 180C-20 160 -10 130 0 100C10 70 20 30 120 0Z"
            fill="url(#grad1)"
          />
        </motion.svg>
      </div>
    </div>
  )
}

export default memo(Feature)
