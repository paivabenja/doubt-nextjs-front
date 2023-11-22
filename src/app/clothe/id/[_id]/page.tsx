'use client'
import { useEffect, useState } from 'react'
import { getClotheById } from '@/api/clothes'
import ClotheNotFound from '@/components/ClotheNotFound'
import BuyClothe from '@/components/BuyClothe'
import { RealClothe } from '@/types'

interface Props {
  params: {
    _id: number
  }
}

export default function Page (props: Props): JSX.Element {
  const [data, setData] = useState<RealClothe>()

  const getData = async (): Promise<void> => {
    if (data !== undefined) return
    const clth = await getClotheById(props.params._id)
    setData(clth.data as RealClothe)
  }

  useEffect(() => {
    void getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (data === undefined ? <ClotheNotFound /> : <BuyClothe clth={data} />)
}
