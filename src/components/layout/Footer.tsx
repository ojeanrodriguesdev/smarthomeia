'use client'

import Image from 'next/image'

const navigation = {
  main: [
    { name: 'Sobre', href: '#' },
    { name: 'Contato', href: '#' },
    { name: 'Privacidade', href: '#' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: '/images/Footer/facebook.png' }, // Caminho para os ícones PNG
    { name: 'Instagram', href: '#', icon: '/images/Footer/instagram.png' },
    { name: 'Twitter', href: '#', icon: '/images/Footer/twitter.png' },
    { name: 'GitHub', href: '#', icon: '/images/Footer/github.png' },
    { name: 'YouTube', href: '#', icon: '/images/Footer/youtube.png' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <div className="flex justify-center mb-20">
        <Image src="/images/Footer/logo.png" alt="Logo da Empresa" width={48} height={57} />
      </div>
        <nav
          aria-label="Footer"
          className="-mb-6 md:columns-2 sm:flex sm:justify-center sm:space-x-12"
        >
          {navigation.main.map(item => (
            <div key={item.name} className="pb-6 flex flex-col items-center justify-center  md:block">
              <a
                href={item.href}
                className="text-sm  text-black hover:text-gray-600 transform duration-300"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map(item => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <Image
                src={item.icon}
                alt={`${item.name} icon`}
                width={20} // Defina a largura
                height={20} // Defina a altura
                className=""
              />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-black font-bold">
          &copy; Developed by DEVCORE ®
        </p>
      </div>
    </footer>
  )
}
