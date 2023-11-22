import React from 'react'
import { RealClothe } from '@/types'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Card, CardHeader, CardBody } from '@nextui-org/react'

interface Props { clth: RealClothe }

export default function ClotheCard (props: Props): JSX.Element {
  const router = useRouter()
  const handlePress = (): void => {
    void router.push(`/clothe/id/${props.clth._id}`)
  }

  return (
    <Card className='py-4' isPressable onPress={handlePress}>
      <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
        <p className='text-large uppercase font-bold'>{props.clth.name}</p>
        <small className='text-default-500'>{props.clth.type}</small>
      </CardHeader>
      <CardBody className='overflow-visible py-2'>
        <Image
          alt='Card background'
          className='object-cover rounded-xl'
          src={'http://localhost:3001/images/' + props.clth.img_front}
          height={300}
          width={270}
        />
      </CardBody>
    </Card>
  )
}
