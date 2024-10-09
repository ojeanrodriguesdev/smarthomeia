'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import React, { useRef, memo } from 'react'
import useOnScreen from '@/components/hooks/useOnScreen'

const faqs = [
  {
    question: 'Como funciona a instalação do SmartHome AI?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Posso adicionar mais dispositivos ao sistema depois de instalar?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'O SmartHome AI é compatível com outros dispositivos inteligentes?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Como é o suporte técnico?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'Preciso pagar mensalidade para usar o SmartHome AI?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: 'O que acontece se eu tiver problemas com o sistema?',
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
]

function Faq() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isVisible = useOnScreen({ threshold: 0.5 })
  return (
    <div
      ref={ref}
      className={`relative mt-[-15px] bg-gradient-to-b from-[#0F5B38] via-[#3BB87F] to-[#369C6D] overflow-hidden rounded-t-[15px] ${
        isVisible ? 'opacity-100' : 'opacity-50'
      }`}
    >
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <svg
          className="w-[1400px] h-[1000px] opacity-70"
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ filter: 'blur(270px)' }}
        >
          <circle cx="400" cy="300" r="250" fill="#007943" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2
            className="text-2xl font-bold leading-10 tracking-tight text-white drop-shadow-md"
          >
            Perguntas Frequentes
          </h2>
          <dl
            className="mt-10 space-y-6 divide-y divide-white/10"
          >
            {faqs.map(faq => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
                        <span
                          className="text-base font-semibold leading-7"
                        >
                          {faq.question}
                        </span>
                        <span
                          className="ml-6 flex h-7 items-center"
                        >
                          <PlusSmallIcon
                            aria-hidden="true"
                            className={`h-6 w-6 transition-opacity duration-200 ${
                              open ? 'hidden' : 'block'
                            }`}
                          />
                          <MinusSmallIcon
                            aria-hidden="true"
                            className={`h-6 w-6 transition-opacity duration-200 ${
                              open ? 'block' : 'hidden'
                            }`}
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel className="mt-2 pr-12">
                      <p
                        className="text-base leading-7 text-gray-300"
                      >
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}


export default memo(Faq)
