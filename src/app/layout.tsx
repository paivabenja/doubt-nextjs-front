import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Doubt',
  description: 'Thik less, do more'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
