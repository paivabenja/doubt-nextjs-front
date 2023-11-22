'use client'
import { toast } from 'react-hot-toast'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { User } from '@/types'
import { useContext } from 'react'
import { UserContext } from '@/context/UserContext'

const baseURL = 'http://localhost:3001/auth/'
const authApi = axios.create({
  baseURL
})

export const loginUser = async (data: User): Promise<AxiosResponse> => {
  const res = await toast.promise(
    authApi.post('/login', data, { withCredentials: true }),
    {
      loading: 'login cagando',
      success: 'se logio',
      error: 'se romppio el login'
    }
  ).catch(err => console.log(err))

  return res as AxiosResponse
}

export const registerUser = async (data: User): Promise<void | AxiosResponse> => {
  return await toast.promise(
    authApi.post('/register', data, { withCredentials: true }),
    {
      loading: 'register cargando',
      success: 'se registro',
      error: 'ndqv ni se registro'
    }
  ).catch(err => console.log(err))
}

export const getUser = async (): Promise<User> => {
  let user: User = { loggedIn: false }

  const res = (await authApi.get('/user', { withCredentials: true, validateStatus: status => status < 500 }))

  if (!res.data) return user
  user = { ...res.data, loggedIn: true }
  return user
}

export const logOut = async (): Promise<AxiosResponse> => {
  return await authApi.get('/logout', { withCredentials: true })
}

export const updateUser = async (user: User, newUser: User): Promise<void> => {
  const res = await authApi.put('/' + user._id, {})
}
