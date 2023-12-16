import { getUser } from '@/api/auth'
import { User } from '@/types'
import { create } from 'zustand'

const user: User = { loggedIn: false }

interface UserStore {
  user: User
  showUser: () => void
  setUser: () => Promise<void>
  logUserOut: () => void
}

export const useUserStore = create<UserStore>((set, get) => ({
  user,
  showUser: () => { alert(JSON.stringify(get().user)) },
  setUser: async (): Promise<void> => set({ user: await getUser() }),
  logUserOut: () => set({ user: { loggedIn: false } })
}))
