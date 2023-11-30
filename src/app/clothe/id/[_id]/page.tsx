'use client'
import { useEffect, useState } from 'react'
import { getClotheById } from '@/api/clothes'
import ClotheNotFound from '@/components/ClotheNotFound'
import { RealClothe } from '@/types'
import BuyClothe from '@/components/BuyClothe'

// ClotheId   string `bson:"clotheId" json:"clotheId"`
// ClotheName string `bson:"clotheName" json:"clotheName"`
// UserId     string `bson:"userId" json:"userId"`
// Date       string `bson:"date" json:"date"`

interface Props {
  params: {
    _id: string
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
  }, [])

  return (data === undefined
    ? <ClotheNotFound />
    : <BuyClothe clth={data} />
  )
}
