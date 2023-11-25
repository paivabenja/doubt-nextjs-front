'use client'
import { SignInForm } from '@/components/SignInForm'
import { SignUpForm } from '@/components/SignUpForm'
import { UserContext } from '@/context/UserContext'
import { Button } from '@nextui-org/react'
import { useContext, useState } from 'react'

const Page = (): JSX.Element => {
  const { user } = useContext(UserContext)
  const [formType, setFormType] = useState<FormType>('hidden')
  type FormType = 'hidden' | 'signup' | 'signin'
  if (user.loggedIn) return (<p>you are already logged in mdf</p>)
  return (
    <div className='flex flex-col justify-center items-center h-full'>
      {formType === 'signin' && <h1 className='font-semibold text-xl'>Sign In</h1>}
      {formType === 'signup' && <h1 className='font-semibold text-xl'>Sign Up</h1>}

      {formType === 'hidden' &&
        <div>
          <Button onClick={() => setFormType('signin')}>Sign In</Button>
          <Button onClick={() => setFormType('signup')}>Sign Up</Button>
        </div>}
      {formType === 'signup' && <SignUpForm />}
      {formType === 'signin' && <SignInForm />}

      {formType === 'signin' && <Button className='mt-10' onClick={() => { setFormType('signup') }}>Sign Up</Button>}
      {formType === 'signup' && <Button className='mt-10' onClick={() => { setFormType('signin') }}>Sign In</Button>}
    </div>
  )
}

export default Page
