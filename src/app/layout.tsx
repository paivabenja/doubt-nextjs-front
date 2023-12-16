import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Providers } from '@/components/Providers'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Doubt',
  description: 'Thik less, do more'
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout ({ children }: Props): React.ReactNode {
  return (
    <html lang='en'>
      <body className='min-h-screen'>
        <Providers>
          <Toaster />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
