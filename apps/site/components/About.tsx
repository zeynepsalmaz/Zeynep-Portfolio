'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export default function About() {
  const t = useTranslations('about')

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Python', 'SQL', 'MongoDB', 'Git', 'REST API'
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">{t('title')}</h2>
          <p className="text-primary max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">{t('getToKnow')}</h3>
            <div className="space-y-4 mb-8">
              <p 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('paragraph1') }}
              />
              <p 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('paragraph2') }}
              />
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">{t('skillsTitle')}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 hover:bg-primary-100 hover:text-primary-700 px-4 py-3 rounded-lg text-center font-medium transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
