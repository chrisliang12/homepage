import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/intro'
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      {/* Greeting */}
      <Intro />

      {/* Heading */}
      <div className='my-10 grid grid-cols-1 md:grid-cols-6'>
        <div className='md:col-start-1 md:col-end-5'>
          <h2 className='pb-1 text-3xl md:text-5xl antialiased hover:subpixel-antialiased headings tracking-widest'>Yong Liang</h2>
          <p className='headings text-normal md:text-lg tracking-wider'>M.S. Student <Link className='hover:text-purple-300' href="https://ucsd.edu/">@UCSD</Link> / Coffee & Guitar Ethusiast</p>
        </div>
        <div className='mt-5 mx-auto md:col-start-7 md:mt-0'>
          <Image src='/../public/avatar.jpg' width={100} height={100} alt="Avatar" className='rounded-full border-zinc-500 border-4 w-24 md:w-36' />
        </div>
      </div>

      {/* info */}
      <div><h>Main Page</h></div>


      {/* footer */}
      


    </div>
  )
}
