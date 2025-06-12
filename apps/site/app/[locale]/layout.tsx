import '../../globals.css'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zeynep Salmaz - Software Developer',
  description: 'Portfolio website of Zeynep Salmaz - Software Developer',
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale }
}: RootLayoutProps) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
