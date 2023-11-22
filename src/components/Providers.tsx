'use client'

import { NextUIProvider } from '@nextui-org/react'
import { UserContextProvider } from '@/context/UserContext'
import React from 'react'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { getUser } from '@/api/auth'
import { UserContext } from '@/context/UserContext'
import { useContext, useEffect } from 'react'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const { setUser, user } = useContext(UserContext)

  const getAuthStatus = async (): Promise<void> => {
    setUser(await getUser())
  }

  useEffect(() => {
    void getAuthStatus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class'>
        <UserContextProvider>
          <Toaster />
          <Navbar />
          <div className='min-h-screen'>
            {children}
          </div>
        </UserContextProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
