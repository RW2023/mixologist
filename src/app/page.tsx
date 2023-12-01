import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col flex-wrap items-center h-screen justify-center align-middle'>
      <h1 className='text-3xl m-2'>Home Page</h1>
      <Image
        src="/images/cocktail.png"
        alt="cocktail"
        width={500}
        height={500}
        className='rounded-md border-2 border-base-500 bg-base-500 p-2'
      />
      <div>
        <p className='text-2xl text-center'>
         Welcome to the Mixologist App
        </p>
      </div>
    </div>
  )
}
