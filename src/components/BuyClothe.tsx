import React from 'react'
import { RealClothe } from '@/types'

interface Props {
  clth: RealClothe
}

export default function BuyClothe ({ clth }: Props): JSX.Element {
  return (
    <div>BuyClothe de id : {clth._id}</div>
  )
}
