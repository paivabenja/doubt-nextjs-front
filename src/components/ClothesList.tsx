'use client'
import { getAllClothes } from '@/api/clothes'
import { useEffect, useState } from 'react'
import ClotheCard from './ClotheCard'

export default function ClothesList(): JSX.Element {
  const [clothes, setClothes] = useState([])
  const getData = async (): Promise<void> => {
    const clths = await getAllClothes()
    setClothes(clths.data)
  }

  useEffect(() => {
    void getData()
  }, [])

  return (
    <div className='clth-lists w-full h-full px-5 flex flex-wrap justify-center items-center gap-5'>
      {clothes.map((clth, i) => (
        <ClotheCard clth={clth} key={i} />
      ))}
    </div>
  )
}
