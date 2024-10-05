'use client'

import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <>
      {/* Header com logo centralizada, agora com posição absoluta */}
      <header className="absolute inset-x-0 top-0 flex justify-center items-center py-6 z-20">
        <a href="#" className="block">
          <Image
            src="/images/Header/logo.png" // Substitua pelo caminho correto da sua imagem
            alt="Logo"
            width={24}
            height={24}
            quality={100}
            loading="eager"
            priority={true}
          />
        </a>
      </header>

      {/* Hero Section */}
      <div className="bg-black relative isolate overflow-hidden">
        {/* Removido o pt-14 para eliminar o padding no topo */}

        {/* Eclipse SVG com gradiente e blur */}
        <svg
          className="absolute left-[50%] top-32 md:top-20 transform -translate-x-1/2 scale-100 sm:scale-110 lg:scale-125 opacity-70"
          width="800"
          height="600"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'blur(220px)' }} // Aplica o blur de 220px
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
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-48 relative z-10">
          {/* Título e Descrição */}
          <div className="text-center m-6">
            <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Transforme Sua Casa com o<br /> SmarthHome AI
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl leading-7 sm:leading-8 lg:leading-9 text-gray-300 font-semibold">
              A solução definitiva para automatizar sua casa e melhorar sua qualidade de vida em
              apenas 5 minutos.
            </p>

            {/* Botões */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-x-6">
              <a
                href="#"
                className="w-auto sm:w-auto rounded-full bg-green-buttonhero px-7 py-4 sm:px-7 sm:py-4 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Compre agora
              </a>
              <a href="#" className="w-full sm:w-auto text-sm font-semibold leading-6 text-white">
                Saiba mais <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
