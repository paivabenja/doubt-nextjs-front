'use client'

import AddClotheForm from '@/components/AddClotheForm'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page (): JSX.Element {
  const [page, setPage] = useState<'hidden' | 'addClothe' | 'profile'>('hidden')
  const { push } = useRouter()
  useEffect(() => {
    if (page === 'profile') {
      push('/profile')
    }
  })
  return (
    <div className='flex justify-center items-center'>
      {page === 'hidden' &&
        <div>
          <Button onClick={() => setPage('addClothe')}>Add clothe</Button>
          <Button onClick={() => setPage('profile')}>Profile settings</Button>
        </div>}
      {page === 'addClothe' && <AddClotheForm />}
    </div>
  )
}
