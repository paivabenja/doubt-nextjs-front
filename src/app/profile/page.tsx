'use client'

import { UserContext } from '@/context/UserContext'
import React, { useContext, useEffect } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { logOut } from '@/api/auth'
import { Input, Button } from '@nextui-org/react'
import { useForm } from 'react-hook-form'

const Page = () => {
  const { push } = useRouter()
  const { user } = useContext(UserContext)
  const { register, handleSubmit } = useForm()

  const handleClick = async (): Promise<void> => {
    const res = await logOut()
    if (res.data.message === 'success') push('/')
  }

  const onSubmit = handleSubmit(formData => {
    console.log(formData)
  })

  useEffect(() => {
    if (!user.loggedIn) {
      console.log('pillo chupapija q haces aca')
      redirect('/signup')
    }
  }, [])

  return (
    <div>
      <div>
        <label className='self-start'>Update profile</label>
        <form onSubmit={onSubmit}>
          <div className='flex items-center flex-col h-full w-1/3 border border-gray-700 rounded-lg m-10 p-5'>
            <Input className='my-2 w-2/3' label='Username' type='text' {...register('username')} />
            <Input className='my-2 w-2/3' label='Email' type='email' {...register('email')} />
            <Input className='my-2 w-2/3' label='password' type='password' {...register('password')} />
          </div>
          <Button color='primary' type='submit'>
            Submit
          </Button>
        </form>
      </div>
      <Button color='danger' onClick={handleClick}>Log Out</Button>
    </div>
  )
}

export default Page
