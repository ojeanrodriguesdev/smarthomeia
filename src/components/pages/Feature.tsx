'use client'

import React from 'react'
import Image from 'next/image'

const features = [
  {
    name: 'Automação de Rotinas:',
    description:
      'Crie rotinas personalizadas que ligam ou desligam luzes, aparelhos e outros dispositivos automaticamente com base em horários ou detecção de presença.',
    src: '/images/feature/icon1.png',
    size: 24,
  },
  {
    name: 'Controle Remoto Via Aplicativo:',
    description:
      'Gerencie todos os dispositivos da sua casa remotamente, ajustando iluminação, temperatura e segurança com um toque no aplicativo, de qualquer lugar.',
    src: '/images/feature/icon2.png',
    size: 16,
  },
  {
    name: 'Comandos de Voz Integrados:',
    description:
      'Controle seus dispositivos usando comandos de voz com assistentes virtuais como Google Assistente e Alexa, tornando o gerenciamento da casa mais fácil e rápido.',
    src: '/images/feature/icon3.png',
    size: 24,
  },
]

export default function Feature() {
  return (
    <div className="bg-green-feature rounded-t-[30px] mt-[-50px] relative z-30 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden px-6 pt-20 sm:px-10 sm:py-24 md:pt-20 md:pb-0 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:items-center overflow-hidden">
            {/* Conteúdo principal */}
            <div>
              <h2 className="text-[22px] md:text-[39px] lg:text-[32px] xl:text-[34px] font-bold font-opensans tracking-tight text-white drop-shadow-lg text-center lg:text-start xl:px-0 overflow-hidden">
                Gerenciar Sua Casa Está Se
                <br /> Tornando um{' '}
                <span className="gradient-mask font-bold" data-text="Desafio">
                  Desafio
                </span>
                ?
              </h2>
              <p className="mt-6 text-lg font-semibold font-opensans leading-1 text-white drop-shadow-lg">
                Você está enfrentando problemas para gerenciar seus dispositivos domésticos? Cansado
                de controlar luzes, câmeras e aparelhos de forma manual? Você não está sozinho.
                Milhares de pessoas como você ainda lidam com a dificuldade de gerenciar seus
                dispositivos de maneira integrada e eficiente. É por isso que criamos o SmartHome
                AI.
              </p>

              <dl className="mt-10 space-y-1 text-base leading-1 text-white font-opensans font-medium drop-shadow-lg">
                {features.map(feature => (
                  <div key={feature.name} className="relative">
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
                ))}
              </dl>
            </div>

            {/* Imagem do lado direito */}
            <div className="relative flex items-end h-full w-full z-30 pt-10">
              <Image
                src="/images/Feature/image.png"
                alt="Smart Home AI"
                width={627}
                height={634}
                quality={100}
                loading="eager"
                priority={true}
                className="w-full h-auto ml-[22px] hidden sm:hidden md:hidden lg:block lg:ml-0 lg:w-[627px] lg:h-[634px] object-contain drop-shadow-2xl rounded-[100px]"
              />
            </div>
          </div>
        </div>
        {/* Movendo o SVG para fora da div de conteúdo */}
        <svg
          className="absolute left-[50%] top-32 md:top-20 transform -translate-x-1/2 scale-100 sm:scale-110 lg:scale-125 opacity-70 drop-shadow-lg z-[-1] overflow-hidden" // z-index negativo para estar embaixo de tudo
          width="800"
          height="600"
          viewBox="0 0 800 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'blur(120px)' }}
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%">
              <stop offset="30%" style={{ stopColor: '#84E3F54D', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#007943', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <circle cx="700" cy="300" r="250" fill="url(#grad1)" />
        </svg>
      </div>
    </div>
  )
}
