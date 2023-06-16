'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

interface Props {
  children: ReactNode
}

interface Context {
  admin: boolean
  setAdmin: Dispatch<SetStateAction<boolean>>
}

export const AdminContext = createContext<Context>()

export const AdminContextProvider = ({ children }: Props): JSX.Element => {
  const [admin, setAdmin] = useState(false)
  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  )
}
