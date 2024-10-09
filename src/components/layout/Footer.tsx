'use client'

import Image from 'next/image'
import { useRef, memo } from 'react'
import { motion } from 'framer-motion'
import useOnScreen from '@/components/hooks/useOnScreen'
const navigation = {
  main: [
    { name: 'Sobre', href: '#' },
    { name: 'Contato', href: '#' },
    { name: 'Privacidade', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: '/images/Footer/facebook.svg' },
    { name: 'Instagram', href: '#', icon: '/images/Footer/instagram.svg' },
    { name: 'Twitter', href: '#', icon: '/images/Footer/twitter.svg' },
    { name: 'GitHub', href: '#', icon: '/images/Footer/github.svg' },
    { name: 'YouTube', href: '#', icon: '/images/Footer/youtube.svg' },
  ],
}

function Footer() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isVisible = useOnScreen({ threshold: 0.5 })

  return (
    <footer ref={ref} className="bg-white">
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 1.5 }}
          >
            <Image src="/images/Footer/logo.svg" alt="Logo da Empresa" width={48} height={57} />
          </motion.div>
        </div>
        <nav
          aria-label="Footer"
          className="-mb-6 md:columns-2 sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map(item => (
            <motion.div
              key={item.name}
              className="pb-6 flex flex-col items-center justify-center md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }} 
              transition={{ duration: 1.75 }}
            >
              <a
                href={item.href}
                className="text-sm text-black hover:text-gray-600 transform duration-300"
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map(item => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 2 }}
            >
              <span className="sr-only">{item.name}</span>
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={20}
                height={20}
                className=""
              />
            </motion.a>
          ))}
        </div>
        <motion.p
          className="mt-10 text-center text-xs leading-5 text-black font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 2.5 }}
        >
          Developed by DEVCORE &copy;
        </motion.p>
      </motion.div>
    </footer>
  )
}

export default memo(Footer)
