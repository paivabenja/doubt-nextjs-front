'use client'

import AddClotheForm from '@/components/AddClotheForm'
import { useContext, useEffect } from 'react'
import { AdminContext } from '@/context/AdminContext'

export default function Page (): JSX.Element {
  const { admin, setAdmin } = useContext(AdminContext)

  console.log(admin)
  setAdmin(true)
  useEffect(() => { console.log(admin) }, [admin])

  return (
    <div>
      <AddClotheForm />
    </div>
  )
}
