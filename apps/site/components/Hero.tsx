'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const t = useTranslations('hero')

  const socialLinks = [
    { icon: Github, href: 'https://github.com/zeynepsalmaz', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/zeynepsalmaz', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zeynep@example.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-primary mb-6">
              <span className="block text-gray-600 text-xl sm:text-2xl font-normal mb-2">
                {t('greeting')}
              </span>
              <span className="text-gradient">{t('name')}</span>
              <span className="block text-primary-600 text-2xl sm:text-3xl lg:text-4xl mt-2">
                {t('title')}
              </span>
            </h1>
            
            <p className="text-primary max-w-2xl mx-auto mb-8">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#projects" className="btn-primary">
                {t('cta')}
              </a>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-gray-200 rounded-full hover:border-primary-600 hover:text-primary-600 transition-all duration-200 shadow-sm"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 mb-2">{t('scrollDown')}</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={20} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
