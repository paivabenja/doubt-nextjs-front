'use client'

import React from 'react'
import { RealClothe } from '@/types'
import { useRouter } from 'next/navigation'

interface Props { clth: RealClothe }

export default function ClotheCard (props: Props): JSX.Element {
  const router = useRouter()
  const handleClick = (): void => {
    void router.push(`/clothe/id/${props.clth._id}`)
  }
  return (
    <div className='text-doubt-green bg-slate-100 rounded-lg p-4 w-64 h-32 flex flex-col justify-between' onClick={handleClick}>
      <div>
        <h1 className='font-semibold text-xl capitalize'>{props.clth.name}</h1>
        <h2 className='text-xs text-slate-600 capitalize'>{props.clth.type}</h2>
      </div>
      <h3>${props.clth.price}</h3>
    </div>
  )
}
