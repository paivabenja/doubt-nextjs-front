import './globals.css'
import { AdminContextProvider } from '@/context/AdminContext'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'

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
        <Toaster />
        <Navbar />
        <AdminContextProvider>
          {children}
        </AdminContextProvider>
      </body>
    </html>
  )
}
