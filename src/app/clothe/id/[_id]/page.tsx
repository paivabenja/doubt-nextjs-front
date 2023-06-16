'use client'
import { useEffect, useState } from 'react'
import { getClotheById } from '@/api/clothes'
import { ClotheEntry } from '@/types'
import ClotheNotFound from '@/components/ClotheNotFound'
import BuyClothe from '@/components/BuyClothe'

interface Props {
  params: {
    _id: number
  }
}

export default function Page (props: Props): JSX.Element {
  const [data, setData] = useState<ClotheEntry>()

  const getData = async (): Promise<void> => {
    if (data !== undefined) return
    const clth = await getClotheById(props.params._id)
    setData(clth.data as ClotheEntry)
  }

  useEffect(() => {
    console.log('( app/clothe/id/[id] ) void get data and data: ')
    console.log(data)
    void getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (data === undefined ? <ClotheNotFound /> : <BuyClothe clth={data} />)
}
