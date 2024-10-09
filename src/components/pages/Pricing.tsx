'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import useOnScreen from '@/components/hooks/useOnScreen'

const tiers = [
  {
    name: 'Pacote Empresarial',
    id: 'tier-1',
    href: '#',
    priceMonthly: 'R$599',
    features: [
      '1 Hub central',
      '2 Lâmpadas inteligentes',
      '1 Sensor de movimento',
      'Suporte técnico básico',
    ],
  },
  {
    name: 'Pacote Premium',
    id: 'tier-2',
    href: '#',
    priceMonthly: 'R$1.399',
    features: [
      '1 Hub central',
      '4 Lâmpadas inteligentes',
      '2 Sensores de movimento',
      '1 Termostato inteligente',
      '1 Câmera de segurança',
      'Acesso ao aplicativo',
      'Suporte técnico 24/7',
    ],
  },
]

export default function Pricing() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isVisible = useOnScreen({ threshold: 0.5 })
  const [, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    return () => {
      setIsMounted(false)
    }
  }, [])

  return (
    <div className="isolate bg-gradient-to-b from-[#0d3d1e] via-[#157e3a] to-[#0d3d1e] z-0 overflow-hidden relative">
      {/* Conteúdo da seção "Planos" */}
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8 z-20 relative">
        <div className="mx-auto max-w-4xl z-20">
          <motion.h2
            className="text-base font-semibold leading-7 text-white z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Planos
          </motion.h2>
          <motion.p
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1.25, ease: 'easeOut' }}
          >
            Planos Flexíveis para Sua Casa{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39ff61] to-[#6aff9c] font-extrabold drop-shadow-2xl">
              Inteligente
            </span>
          </motion.p>
        </div>
        <div className="relative mt-6 z-20">
          <motion.p
            className="mx-auto max-w-2xl font-semibold text-lg leading-8 text-white/60 z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            Transforme Sua Casa com Soluções Flexíveis e Personalizadas: Escolha o Pacote Ideal para
            Suas Necessidades.
          </motion.p>
        </div>
      </div>

      {/* Seção de Preços e Cards */}
      <div className="relative flow-root bg-white pb-24 sm:pb-32 z-30">
        <div className="-mt-80 z-20 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 z-20">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 z-20">
              {/* Mapeando os pacotes de preços para exibição */}
              {tiers.map(tier => (
                <motion.div
                  key={tier.id}
                  ref={ref}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 z-30"
                >
                  <div>
                    <motion.h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-black z-30 drop-shadow-md"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                      transition={{ duration: 1.5 }}
                    >
                      {tier.name}
                    </motion.h3>
                    <div className="mt-4 flex items-baseline gap-x-2 z-30">
                      <motion.span
                        className="text-5xl tracking-tight gradient-mask z-30 font-extrabold font-monstserrat drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 2.5 }}
                      >
                        {tier.priceMonthly}
                      </motion.span>
                      <motion.span
                        className="text-base leading-7 text-green-buttonhero z-30 font-extrabold drop-shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                        transition={{ duration: 2 }}
                      >
                        /ano
                      </motion.span>
                    </div>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-black z-30 drop-shadow-md"
                    >
                      {/* Listando as características do pacote */}
                      {tier.features.map(feature => (
                        <motion.li
                          key={feature}
                          className="flex gap-x-3 z-30 drop-shadow-md"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                          transition={{ duration: 1.75 }}
                        >
                          <CheckIcon
                            aria-hidden="true"
                            className="h-6 w-5 flex-none text-green-600 z-30 drop-shadow-sm"
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 1.5 }}
                  >
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className="block items-center mt-8 rounded-[10px] bg-green-buttonhero w-[170px] py-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 z-30 drop-shadow-md transform duration-300"
                    >
                      Comprar agora
                    </a>
                  </motion.div>
                </motion.div>
              ))}
              {/* Exibição de informações sobre pagamento único */}
              <motion.div
                className="bg-white drop-shadow-2xl shadow-green-500 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center z-30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 1.5 }}
              >
                <div>
                  <p className="text-lg font-semibold leading-6 text-black">Pagamento Único</p>
                  <p className="mt-1 text-base leading-6 text-black/60">
                    O cliente paga uma vez e tem acesso vitalício ao produto, com suporte e
                    atualizações incluídas. Ideal para quem quer uma solução definitiva sem taxas
                    recorrentes.{' '}
                  </p>
                </div>

                {/* Nova seção com a imagem */}
                <div className="flex w-full lg:w-auto items-center justify-center">
                  <motion.div
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 1 }}
                  >
                    <Image
                      src="/images/Pricing/image.svg"
                      alt="Security"
                      width={41}
                      height={51}
                      quality={100}
                      priority={true}
                      loading="eager"
                      className="lg: mr-5 z-20"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
