'use client'

import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex justify-center items-center relative bg-transparent py-6">
      <a href="#" className="block">
        <Image
          src="/images/Header/logo.png"  // Substitua pelo caminho correto da sua imagem
          alt="Logo"
          width={100}
          height={100}
          quality={100}
          loading="eager"
          priority={true}
        />
      </a>
    </header>
  )
}