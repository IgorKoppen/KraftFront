import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from "@/components/Providers";



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KraftHeinz',
  description: 'Site oficial para fazer avaliações da KraftHeinz',
  icons: {
    icon: '/icon.ico',
  }
}

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="bg-white">

      <body className={inter.className}> <Providers>{children}</Providers></body>
    </html>
  )
}
