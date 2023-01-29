import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Intro from '../components/intro'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      {/* Greeting with typeWriter */}
      <Intro />

      {/* info */}
      <div><h>Main Page</h></div>


      {/* footer */}
      


    </div>
  )
}
