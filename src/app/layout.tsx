import './globals.css'
import { Providers } from '@/components/Providers'

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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
