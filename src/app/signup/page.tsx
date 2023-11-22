'use client'
import { SignInForm } from '@/components/SignInForm'
import { SignUpForm } from '@/components/SignUpForm'
import { UserContext } from '@/context/UserContext'
import { useContext, useState } from 'react'

const Page = (): JSX.Element => {
  const { user } = useContext(UserContext)
  const [formType, setFormType] = useState<FormType>('hidden')
  type FormType = 'hidden' | 'signup' | 'signin'
  if (user.loggedIn) return (<p>you are already logged in mdf</p>)
  return (
    <div className='flex justify-center items-center h-full'>

      {formType === 'hidden' &&
        <div>
          <button onClick={() => setFormType('signin')}>Sign In</button>
          <button onClick={() => setFormType('signup')}>Sign Up</button>
        </div>}
      {formType === 'signup' && <SignUpForm />}
      {formType === 'signin' && <SignInForm />}
    </div>
  )
}

export default Page
