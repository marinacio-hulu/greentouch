'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Fechar menu ao clicar em um link (em mobile)
  const handleLinkClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  // Rolagem suave para âncoras (#)
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');

      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement instanceof HTMLElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth',
        });
        setMenuOpen(false);
      }
    };

    links.forEach((link) =>
      link.addEventListener('click', handleSmoothScroll as EventListener)
    );

    return () =>
      links.forEach((link) =>
        link.removeEventListener('click', handleSmoothScroll as EventListener)
      );
  }, []);




  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-spa text-green-600 text-2xl mr-2"></i>
          <Link href="/">
            <Image src="/logo.png" width={100} height={100} alt="GREENTOUCH" />
          </Link>
        </div>

        {/* Botão mobile */}
        <button
          onClick={toggleMenu}
          id="mobile-menu-button"
          className="md:hidden text-gray-700"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`font-medium ${pathname === '/'
                ? 'text-green-700 hover:text-green-500'
                : 'text-gray-700 hover:text-green-500'
              }`}
          >
            Início
          </Link>
          <Link
            href="/servicos"
            className={`font-medium ${pathname === '/servicos'
                ? 'text-green-700 hover:text-green-500'
                : 'text-gray-700 hover:text-green-500'
              }`}
          >
            Serviços
          </Link>
          <Link
            href="/sobre"
            className={`font-medium ${pathname === '/sobre'
                ? 'text-green-700 hover:text-green-500'
                : 'text-gray-700 hover:text-green-500'
              }`}
          >
            Sobre
          </Link>
          <Link
            href="/contacto"
            className={`font-medium ${pathname === '/contacto'
                ? 'text-green-700 hover:text-green-500'
                : 'text-gray-700 hover:text-green-500'
              }`}
          >
            Contato
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white py-4 px-4 shadow-lg transition-all duration-300 ${menuOpen ? 'block' : 'hidden'
          }`}
      >
        <div className="flex flex-col space-y-4">
          <Link href="/" onClick={handleLinkClick} className="text-gray-700 font-medium">
            Início
          </Link>
          <Link href="/servicos" onClick={handleLinkClick} className="text-gray-700 font-medium">
            Serviços
          </Link>
          <Link href="/sobre" onClick={handleLinkClick} className="text-gray-700 font-medium">
            Sobre
          </Link>
          <Link href="/contacto" onClick={handleLinkClick} className="text-gray-700 font-medium">
            Contato
          </Link>
          <Link
            href="/contacto"
            onClick={handleLinkClick}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-center"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}
