'use client'
import { ReactNode, createContext, useState } from 'react'
import { User } from '@/types'

interface Props {
  children: ReactNode
}

interface UserContextTtype {
  user: User
  setUser: (u: User) => void
}

const exampleUser: User = { loggedIn: false }
const exampleSetter = (u: User): void => { }

export const UserContext = createContext<UserContextTtype>({ user: {}, setUser: exampleSetter })

export const UserContextProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<User>(exampleUser)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
