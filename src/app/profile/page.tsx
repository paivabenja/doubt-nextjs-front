'use client'

import { UserContext } from '@/context/UserContext'
import React, { useContext, useEffect } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { logOut } from '@/api/auth'
import { Button } from '@nextui-org/react'

const Page = (): JSX.Element => {
  const { push } = useRouter()
  const { user, setUser } = useContext(UserContext)

  const handleClick = async (): Promise<void> => {
    const res = await logOut()
    if (res.data.message !== 'success') alert('There\'s been an error logging you out')
    setUser({ loggedIn: false })
    push('/')
  }

  useEffect(() => {
    if (!user.loggedIn) {
      console.log('pillo chupapija q haces aca')
      redirect('/signup')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='my-10 mx-32 p-10 bg-gray-800 rounded-xl'>
      <h1 className='font-semibold text-xl'>{user.name} {user.lastname}</h1>
      <h2>{user.email}</h2>
      <Button className='mt-8' color='danger' onClick={handleClick}>Log Out</Button>
    </div>
  )
}

export default Page
