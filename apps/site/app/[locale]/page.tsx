import { useTranslations } from 'next-intl'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import About from '../../components/About'
import Projects from '../../components/Projects'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return {
    title: params.locale === 'tr' 
      ? 'Zeynep Salmaz - Yazılım Geliştirici' 
      : 'Zeynep Salmaz - Software Developer',
    description: params.locale === 'tr'
      ? 'Zeynep Salmaz - Yazılım Geliştirici Portfolio Websitesi'
      : 'Zeynep Salmaz - Software Developer Portfolio Website',
  }
}
