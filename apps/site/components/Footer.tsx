'use client'

import { useTranslations } from 'next-intl'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('footer')

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zeynepsalmaz', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/zeynepsalmaz', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zeynep@example.com', label: 'Email' },
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ZS</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Zeynep Salmaz</h3>
                <p className="text-gray-400">Software Developer</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              {t('description')}
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold mb-4">{t('social')}</h4>
            <div className="flex md:justify-end space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-primary-600 rounded-full transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zeynep Salmaz. All rights reserved.
            </p>
            
            <p className="flex items-center text-gray-400 text-sm">
              Made with 
              <Heart size={16} className="mx-1 text-red-500 fill-current" />
              using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
