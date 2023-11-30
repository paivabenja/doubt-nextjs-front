import React, { useState } from 'react'
import { RealClothe } from '@/types'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardHeader, CardBody } from '@nextui-org/react'

interface Props { clth: RealClothe }

export default function ClotheCard ({ clth }: Props): JSX.Element {
  const [img, setImg] = useState(clth.img_front)
  const router = useRouter()
  const handlePress = (): void => {
    void router.push(`/clothe/id/${clth._id as string}`)
  }

  const handleMouseEnter = (): void => setImg(clth.img_back)
  const handleMouseLeave = (): void => setImg(clth.img_front)

  return (
    <Card className='py-4' isPressable onPress={handlePress}>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-large uppercase font-bold'>{clth.name}</p>
        <small className='text-default-500'>{clth.type}</small>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          alt='Card background'
          className='object-cover rounded-xl aspect-video'
          src={`http://localhost:3001/images/${img}`}
          width={320}
          height={180}
        />
      </CardBody>
    </Card>
  )
}
