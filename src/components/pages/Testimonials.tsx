'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import useOnScreen from '@/components/hooks/useOnScreen'

const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
    },
  },
  {
    body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
    author: {
      name: 'Lindsay Walton',
      handle: 'lindsaywalton',
    },
  },
  {
    body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
    author: {
      name: 'Tom Cook',
      handle: 'tomcook',
    },
  },
  {
    body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
    author: {
      name: 'Leonard Krasner',
      handle: 'leonardkrasner',
    },
  },
  {
    body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
    author: {
      name: 'Cliente 1',
      handle: 'cliente1',
    },
  },
  {
    body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
    author: {
      name: 'Cliente 2',
      handle: 'cliente2',
    },
  },
  {
    body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
    author: {
      name: 'Cliente 2',
      handle: 'cliente2',
    },
  },
  {
    body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
    author: {
      name: 'Cliente 2',
      handle: 'cliente2',
    },
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isVisible = useOnScreen({ threshold: 0.5 })

  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32 overflow-hidden">
      {/* Eclipse SVG com gradiente e blur */}
      <svg
        className="absolute left-1/2 top-[70%] transform -translate-x-1/2 -translate-y-1/2 scale-100 sm:scale-110 lg:scale-125 opacity-70 z-0"
        width="800"
        height="700"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'blur(230px)' }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%">
            <stop offset="30%" style={{ stopColor: '#84EEF5', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#84EEF5', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <motion.ellipse
          cx="400"
          cy="300"
          rx="250"
          ry="200"
          fill="url(#grad1)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Título e descrição */}
        <div className="mx-auto max-w-xl text-center">
          <motion.h2
            className="text-sm font-bold leading-8 tracking-tight text-green-testimonials font-opensans"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            TESTIMONIALS
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1.25, ease: 'easeOut' }}
          >
            Descubra Como o{' '}
            <span className="gradient-mask font-extrabold drop-shadow-md">SmartHome AI</span>
            <br /> Melhorou a Vida de Nossos Clientes
          </motion.p>
        </div>

        {/* Grid de depoimentos */}
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-none drop-shadow-xl">
          {/* Mapeando os depoimentos */}
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={index}
              ref={ref}
              className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 1.5 }}
            >
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 flex-1">
                <p>{`“${testimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-col items-center gap-x-4 gap-y-2 border-t border-gray-900/10 px-6 py-4">
                <div className="flex-auto text-center">
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-gray-600">@{testimonial.author.handle}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  )
}
