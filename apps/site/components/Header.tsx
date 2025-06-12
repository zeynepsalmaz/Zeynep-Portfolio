'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('navigation')

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">ZS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zeynep Salmaz</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {t(item.key)}
              </a>
            ))}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </a>
              ))}
              <div className="px-4 py-2">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
