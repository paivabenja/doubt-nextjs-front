'use client'

import { NextUIProvider } from '@nextui-org/react'
import { UserContextProvider } from '@/context/UserContext'
import Navbar from '@/components/Navbar'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export const Providers = ({ children }: { children: React.ReactNode }): JSX.Element => {
  // const { user, setUser } = useContext(UserContext)
  //
  // const getAuthStatus = async (): Promise<void> => {
  //   if (user.loggedIn) return
  //   const newObj = await getUser()
  //   setUser(newObj)
  // }
  //
  // useEffect(() => {
  //   void getAuthStatus()
  //
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

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
