import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../public/images/doubtt.png'

export default function Nav (): JSX.Element {
  return (
    <div className='h-16 flex justify-between items-center p-6'>
      <Link href='/' className='h-6'>
        <Image src={logoImg} alt='logo' className='h-full w-auto' />
      </Link>
      <Link href='/admin'>Admin</Link>
    </div>
  )
}
