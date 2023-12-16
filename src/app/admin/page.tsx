'use client'

import AddClotheForm from '@/components/AddClotheForm'
import ShowSales from '@/components/ShowSales'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page (): JSX.Element {
  type modes = 'hidden' | 'addClothe' | 'profile' | 'showSales'

  // TODO: showsales and back button

  const [page, setPage] = useState<modes>('hidden')
  const { push } = useRouter()
  useEffect(() => {
    if (page === 'profile') {
      push('/profile')
    }
  })

  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      {page === 'hidden' &&
        <div>
          <Button onClick={() => setPage('addClothe')}>Add clothe</Button>
          <Button onClick={() => setPage('profile')}>Profile settings</Button>
          <Button onClick={() => setPage('showSales')}>Show sales</Button>
        </div>}
      {page === 'addClothe' && <AddClotheForm />}
      {page === 'showSales' && <ShowSales />}
      {page !== 'hidden' && <Button onClick={() => setPage('hidden')}>Back</Button>}
    </div>
  )
}
