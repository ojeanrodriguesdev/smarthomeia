'use client'

import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center relative overflow-hidden z-10"> {/* Alterado para z-10 */}
      {/* Header com logo centralizada */}
      <header className="absolute inset-x-0 top-0 flex justify-center items-center py-6 z-20">
        <a href="#" className="block">
          <Image 
            src="/images/Header/logo.png" 
            alt="Logo" 
            width={24}
            height={24}
            quality={100}
            priority={true}
            className='drop-shadow-lg'
            loading="eager" 
          />
        </a>
      </header>

      {/* Eclipse SVG com gradiente e blur */}
      <svg
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100 sm:scale-110 lg:scale-125 opacity-70 z-0"
        width="800"
        height="600"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'blur(220px)' }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%">
            <stop offset="30%" style={{ stopColor: '#84EEF5', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <circle cx="400" cy="300" r="250" fill="url(#grad1)" />
      </svg>

      {/* Conteúdo da Hero */}
      <div className="relative z-20 flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full mx-auto">
          <div className="text-center">
            <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
              Transforme Sua Casa com o<br /> <span className="gradient-mask">SmarthHome AI</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl lg:text-xl leading-relaxed text-gray-300 font-semibold max-w-xl mx-auto drop-shadow-lg">
              A solução definitiva para automatizar sua casa e melhorar sua qualidade de vida em
              apenas 5 minutos.
            </p>

            {/* Botões */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#"
                className="w-auto sm:w-auto rounded-full bg-green-buttonhero px-8 py-4 text-lg font-semibold text-white hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 shadow-xl transform duration-300"
              >
                Compre agora
              </a>
              <a href="#" className="text-lg font-semibold leading-6 text-white drop-shadow-lg">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}