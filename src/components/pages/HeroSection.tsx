'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { memo, useRef, useEffect, useState } from 'react'
import useOnScreen from '@/components/hooks/useOnScreen'

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible] = useOnScreen({ threshold: 0.5 })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="min-h-screen gradient-bg flex flex-col justify-center relative overflow-hidden z-10"
    >
      <header className="absolute inset-x-0 top-0 flex justify-center items-center py-6 pt-24 z-20">
        <a href="#" className="block">
          <Image
            src="/images/Footer/logo.svg"
            alt="Logo"
            width={35}
            height={26}
            quality={100}
            priority
            className="drop-shadow-lg"
            loading="eager"
          />
        </a>
      </header>

      {/* Conteúdo da Hero */}
      <div className="relative z-20 flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        {isMounted && (
          <motion.div
            className="max-w-2xl w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          >
            <div className="text-center">
              <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
                Transforme Sua Casa com o<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39ff61] to-[#6aff9c] font-extrabold drop-shadow-2xl">
                  SmarthHome AI
                </span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl lg:text-xl leading-relaxed text-gray-300 font-semibold max-w-xl mx-auto drop-shadow-lg">
                A solução definitiva para automatizar sua casa e melhorar sua qualidade de vida em
                apenas 5 minutos.
              </p>

              {/* Botões */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <motion.a
                  href="#"
                  className="w-auto sm:w-auto rounded-[10px] bg-green-buttonhero px-8 py-4 text-lg font-semibold text-white hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Compre agora
                </motion.a>
                <a href="#" className="text-lg font-semibold leading-6 text-white drop-shadow-lg">
                  Saiba mais <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default memo(HeroSection)
