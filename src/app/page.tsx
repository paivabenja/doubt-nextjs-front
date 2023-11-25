'use client'

import { getUser } from '@/api/auth'
import ClothesList from '@/components/ClothesList'
import { UserContext } from '@/context/UserContext'
import { useContext, useEffect } from 'react'

const Home = (): JSX.Element => {
  const { user, setUser } = useContext(UserContext)

  const getAuthStatus = async (): Promise<void> => {
    if (user.loggedIn) return
    const newObj = await getUser()
    setUser(newObj)
  }

  useEffect(() => {
    void getAuthStatus()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ClothesList />
  )
}

export default Home
