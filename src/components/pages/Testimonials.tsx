'use client'

// Dados dos depoimentos
const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
  },
}

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
  // Novos depoimentos adicionados
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
]

const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ')

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32 overflow-hidden">
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Título e descrição */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-sm font-bold leading-8 tracking-tight text-green-testimonials font-opensans ">
            TESTIMONIALS
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Descubra Como o <span className="gradient-mask font-extrabold drop-shadow-md">SmartHome AI</span>
            <br /> Melhorou a Vida de Nossos Clientes
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="mx-auto mt-16 grid grid-cols-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-none drop-shadow-xl">
          {/* Depoimento em destaque */}
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 drop-shadow-xl flex flex-col">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8 flex-1">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-col items-center gap-x-4 gap-y-2 border-t border-gray-900/10 px-6 py-4 drop-shadow-xl">
              <div className="flex-auto text-center">
                <div className="font-semibold">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              {/* Adicionando estrelas abaixo do nome */}
              <div className="flex justify-center w-full">
                <StarRating rating={5} />
              </div>
            </figcaption>
          </figure>

          {/* Mapeando depoimentos */}
          {testimonials.map(testimonial => (
            <figure
              key={testimonial.author.handle}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 drop-shadow-xl flex flex-col"
            >
              <blockquote className="flex-1 text-lg font-semibold leading-7 tracking-tight text-gray-900 ">
                <p>{`“${testimonial.body}”`}</p>
              </blockquote>
              <figcaption className="mt-4 flex flex-col items-center gap-x-4 gap-y-2 border-t border-gray-900/10 pt-4">
                <div className="flex-auto text-center">
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                </div>
                {/* Adicionando estrelas abaixo do nome */}
                <div className="flex justify-center w-full">
                  <StarRating rating={4} /> {/* Ajuste o rating conforme necessário */}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

// Componente de Estrelas
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex justify-center">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={classNames(index < rating ? 'text-green-700' : 'text-green-700', 'h-5 w-5')}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15.27L16.18 19l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19z" />
        </svg>
      ))}
    </div>
  )
}
