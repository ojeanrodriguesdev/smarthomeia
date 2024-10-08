import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

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
  return (
    <div className="isolate bg-gradient-to-b from-[#0F5B37] via-[#3BB87F] to-[#369C6D] z-0 overflow-hidden relative">
      {/* SVG que ficará por trás dos cards de preço */}
      <svg
        viewBox="0 0 1208 1024"
        className="absolute left-1/2 transform -translate-x-1/2 lg:top-0 top-[400px] h-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)] z-0"
      >
        <ellipse
          cx={604}
          cy={512}
          rx={1004}
          ry={1012}
          fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
        />
        <defs>
          <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
            <stop stopColor="#75EBB6" />
            <stop offset={1} stopColor="#75EBB6" />
          </radialGradient>
        </defs>
      </svg>

      {/* Conteúdo da seção "Planos" */}
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8 z-20 relative">
        <div className="mx-auto max-w-4xl z-20">
          <h2 className="text-base font-semibold leading-7 text-white z-20">Planos</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl z-20">
            Planos Flexíveis para Sua Casa{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#38c754] to-[#00f451ba] font-extrabold drop-shadow-2xl">
              Inteligente
            </span>
          </p>
        </div>
        <div className="relative mt-6 z-20">
          <p className="mx-auto max-w-2xl font-semibold text-lg leading-8 text-white/60 z-20">
            Transforme Sua Casa com Soluções Flexíveis e Personalizadas: Escolha o Pacote Ideal para
            Suas Necessidades.
          </p>
        </div>
      </div>

      {/* Seção de Preços e Cards */}
      <div className="relative flow-root bg-white pb-24 sm:pb-32 z-30">
        <div className="-mt-80 z-20 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 z-20">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2 z-20">
              {tiers.map(tier => (
                <div
                  key={tier.id}
                  className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 z-30"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-black z-30 drop-shadow-md"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2 z-30">
                      <span className="text-5xl tracking-tight gradient-mask z-30 font-extrabold font-monstserrat drop-shadow-md">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-base leading-7 text-green-buttonhero z-30 font-extrabold drop-shadow-md">
                        /ano
                      </span>
                    </div>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-black z-30 drop-shadow-md"
                    >
                      {tier.features.map(feature => (
                        <li key={feature} className="flex gap-x-3 z-30 drop-shadow-md">
                          <CheckIcon
                            aria-hidden="true"
                            className="h-6 w-5 flex-none text-green-600 z-30 drop-shadow-sm"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href={tier.href}
                      aria-describedby={tier.id}
                      className="block items-center mt-8 rounded-[30px] bg-green-buttonhero w-[170px] py-3 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 z-30 drop-shadow-md transform duration-300"
                    >
                      Comprar agora
                    </a>
                  </div>
                </div>
              ))}
              <div className="bg-white drop-shadow-2xl shadow-green-500 flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center z-30">
                <div className="lg:min-w-0 lg:flex-1 z-30">
                  <h3 className="text-lg font-bold leading-8 tracking-tight text-green-buttonhero z-30 drop-shadow-md">
                    Pagamento Único
                  </h3>
                  <p className="mt-1 text-base leading-7 text-black z-30 drop-shadow-md">
                    O cliente paga uma vez e tem acesso vitalício ao produto, com suporte e
                    atualizações incluídas. Ideal para quem quer uma solução definitiva sem taxas
                    recorrentes.
                  </p>
                </div>
                <div className="flex w-full lg:w-auto items-center justify-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/Pricing/image.svg"
                      alt="Security"
                      width={41}
                      height={51}
                      quality={100}
                      priority={true}
                      loading="eager"
                      className="z-30 lg:mr-[30px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
