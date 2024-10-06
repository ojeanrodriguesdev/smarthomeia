import Image from 'next/image'

// Supondo que suas imagens estão nomeadas como 'economia.png', 'praticidade.png', 'integracao.png'
const features = [
  {
    name: 'Economia de Tempo',
    description:
      'Agende tarefas diárias como apagar luzes ou ajustar a temperatura automaticamente.',
    href: '#',
    icon: '/images/FeatureTwo/icone1.png', // Caminho da imagem
  },
  {
    name: 'Praticidade Sem Toque',
    description:
      'Lista completa de dispositivos inteligentes, permitindo ligar, desligar ou ajustar configurações rapidamente.',
    href: '#',
    icon: '/images/FeatureTwo/icone2.png', // Caminho da imagem
  },
  {
    name: 'Integração Total',
    description: 'Funciona com Google Assistente, Amazon Alexa e outros sistemas.',
    href: '#',
    icon: '/images/FeatureTwo/icone3.png', // Caminho da imagem
  },
]

export default function FeatureTwo() {
  return (
    <div className="bg-white py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl drop-shadow-md">
            Rotinas personalizadas que trabalham por você
          </h2>
          <p className="mt-6 text-lg leading-1 text-black">
            Transforme sua rotina com automação personalizada, simplificando tarefas diárias,
            ajustando luzes e temperatura ao seu comando, e vivendo com a tranquilidade de uma casa
            que trabalha por você.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none drop-shadow-xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 drop-shadow-xl">
            {features.map(feature => (
              <div
                key={feature.name}
                className="flex flex-col bg-gradient-to-t from-white to-white py-6 px-7 rounded-[20px] drop-shadow-2xl"
              >
                <dt className="text-base leading-7 text-black font-bold font-opensans">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center">
                    <Image
                      width={48}
                      height={48}
                      src={feature.icon}
                      alt={feature.name}
                      className="drop-shadow-2xl"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-black drop-shadow-2xl">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-green-testimonials"
                    >
                      Saiba mais <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
