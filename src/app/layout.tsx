import './globals.css'
import { Providers } from '@/components/Providers'

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
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
