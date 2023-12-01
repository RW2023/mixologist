import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col flex-wrap items-center'>
      <h1 className='text-3xl'>Home Page</h1>
      <Image
        src="/images/cocktail.png"
        alt="cocktail"
        width={500}
        height={500}
        className='rounded-md border-2 border-gray-500'
      />
    </div>
  )
}
