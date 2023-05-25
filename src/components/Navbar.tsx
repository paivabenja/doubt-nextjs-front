import Link from 'next/link'

export default function Navbar (): JSX.Element {
  return (
    <div className='w-full border border-solid border-black grid grid-cols-3 py-4'>
      <Link className='text-center' href='/'>
        Buscador
      </Link>
      <Link className='text-center' href='/'>
        Logo
      </Link>
      <button>
        <Link className='text-center' href='/cart'>
          Cart
        </Link>
      </button>
    </div>
  )
}
