'use client'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../public/images/doubtt.png'
import { UserContext } from '@/context/UserContext'
import { useContext, useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from '@nextui-org/react'

export default function Nav (): JSX.Element {
  const { user } = useContext(UserContext)

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <Navbar>
      <NavbarContent justify='start'>
        <NavbarBrand>
          <Link href='/'>
            <Image src={logoImg} alt='logo' width={100} />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <p className='w-full ml-0 left-0 z-0 absolute self-center justify-self-center text-center font-semibold overflow-hidden pointer-events-none'>
          {(user.username !== undefined) ? `Welcome back, ${user.username}` : ''}
        </p>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button as={Link} color='primary' href={user.loggedIn ? (user.isAdmin !== null && user.isAdmin === true) ? '/admin' : '/profile' : '/signup'} variant='flat'>
            {user.loggedIn ? (user.isAdmin !== null && user.isAdmin === true) ? 'Admin' : 'Profile' : 'Sing In'}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
