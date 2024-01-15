"use client"
import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Landing() {
  return (
    <div className=' min-h-screen flex flex-col w-full'>
      <Navbar />
      <div className=' flex flex-col justify-center h-full'>
        <motion.div id='home' initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }} className=' flex flex-col justify-center lg:w-2/3 w-full h-2/3 p-10 lg:px-24'>
          <h1 className=' lg:text-6xl md:text-5xl text-4xl font-extrabold py-6 '>Unveil Your Truth, Embrace Anonymity.</h1>
          <p className=' lg:text-xl md:text-lg text-md text-slate-500 w-4/5'>At vShare, we believe in the transformative power of anonymity. Our platform is a sanctuary for the unspoken, a haven where you can unburden your soul without judgment.</p>
          <div className=' py-14 flex lg:flex-row md:flex-row flex-col gap-10'>
            <Link href={'/home'} className=' bg-violet-500 bg-opacity-60 hover:bg-opacity-100 transition-all font-semibold py-5 px-8 rounded-full'>GET STARTED</Link>
            <Link href={'/auth'} className=' bg-opacity-40 hover:bg-opacity-100 transition-all bg-slate-600 font-semibold py-5 px-8 rounded-full'>LOG IN</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
