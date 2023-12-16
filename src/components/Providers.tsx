'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { UserContextProvider } from '@/context/UserContext'
import { useUserStore } from '@/zustand/userStore'
import { useEffect } from 'react'

export const Providers = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const setUser = useUserStore((state) => state.setUser)
  const showUser = useUserStore((state) => state.showUser)

  useEffect(() => {
    const userShit = async (): Promise<void> => {
      await setUser()
      // showUser()
    }

    void userShit()
  }, [setUser, showUser])

  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class'>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
