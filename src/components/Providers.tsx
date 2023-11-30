'use client'

import { NextUIProvider } from '@nextui-org/react'
import { UserContextProvider } from '@/context/UserContext'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const Providers = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <UserContextProvider>
      <NextUIProvider>
        <NextThemesProvider attribute='class'>
          <Toaster />
          <Navbar />
          <div className='min-h-screen'>
            {children}
          </div>
        </NextThemesProvider>
      </NextUIProvider>
    </UserContextProvider>
  )
}
