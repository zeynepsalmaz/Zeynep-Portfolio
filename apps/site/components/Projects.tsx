'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

export default function Projects() {
  const t = useTranslations('projects')

  const projects = [
    {
      id: 1,
      image: '/images/project-reportzy.jpg', // Add an image if available
      technologies: ['Python', 'FastAPI', 'Pandas', 'React'],
      githubUrl: 'https://github.com/zeynepsalmaz/Reportzy',
      liveUrl: '', // Add live URL if available
      description: 'Reportzy is a data reporting and visualization tool. Built with FastAPI for the backend, Pandas for data processing, and React for a modern, interactive frontend. Enables users to upload, analyze, and visualize datasets easily.',
    },
    {
      id: 2,
      image: '/images/project-bibliotech.jpg', // Add an image if available
      technologies: ['Python', 'Django', 'PostgreSQL', 'FastAPI', 'React'],
      githubUrl: 'https://github.com/zeynepsalmaz/Bibliotech',
      liveUrl: '', // Add live URL if available
      description: 'Full-stack book management app from Global AI Hub Python 202 Bootcamp. Built with OOP, enriched via Open Library API, exposed as a REST API using FastAPI, and completed with a React frontend for a user-friendly interface.',
    },
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-primary-600 text-lg font-semibold">
                    {t(`project${project.id}.title`)}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  {t(`project${project.id}.title`)}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description ? project.description : t(`project${project.id}.description`)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 btn-primary text-sm px-4 py-2"
                  >
                    <span>{t('caseStudy')}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
