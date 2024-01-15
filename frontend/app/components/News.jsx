"use client"
import React from 'react'
import { motion } from "framer-motion"

export default function News() {
  return (
    <div className=' lg:min-h-screen sm:min-h-screen flex flex-col justify-betwe items-center gap-2 lg:px-28 md:px-16 px-10 py-5'>
      <div className=' lg:justify-between justify-center items-center flex w-full lg:flex-row flex-col lg:py-4 py-8'>
        <h1 className=' lg:text-4xl md:text-3xl text-2xl font-bold'>Browse our latest news</h1>
        <p className=' lg:w-2/5 md:w-1/2 text-center md:text-right text-lg text-slate-400'>{"We value your privacy. Share your secrets without fear, knowing that your identity will remain a secret."}</p>
      </div>
      <motion.div id='news' initial="hidden" whileInView="visible" transition={{ duration: 0.5, ease: 'linear' }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 }
        }} className=' h-4/5 w-full flex lg:flex-row flex-col justify-center py-4 gap-10 items-center'>
        <div className=' lg:w-1/3 md:w-1/2 w-full flex hover:scale-105 transition-all cursor-pointer justify-center items-center flex-col rounded-3xl'>
          <img src='/assets/post1.jpg' className=' h-1/3 rounded-t-3xl' />
          <div className=' bg-violet-950 rounded-b-3xl relative gap-3 flex flex-col justify-center items-center p-5'>
            <div className=' absolute bg-violet-600 rounded-full py-2 px-3 -top-5 z-10 left-5 text-sm'>CNN</div>
            <h1 className=' text-xl mt-4 font-bold'>
              {"67% of internet users in the US are not aware of their country's privacy and data protection rules."}
            </h1>
            <p className=' text-md text-slate-400 mb-3'>
              {"According to a poll conducted in June 2019, of all the surveyed US internet users, a net total of 33% reported they were conversant with the privacy and data protection rules in their country. This was a combined total of 7% who were very aware and 26% who were somewhat aware."}
            </p>
            <div className=' w-full border border-slate-600 opacity-60 ' />
            <div className=' h-1/6 flex flex-row gap-3 py-1 w-full justify-start items-center'>
              <img src='/assets/profile1.jpg' className='h-14 rounded-full'></img>
              <div className=' flex-col flex'>
                <h1 className=' text-md font-bold'>
                  ALEX TURNER
                </h1>
                <p className=' text-sm text-slate-400 '>
                  SEPTEMBER 1,2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' lg:w-1/3 md:w-1/2 w-full flex hover:scale-105 transition-all cursor-pointer justify-center items-center flex-col rounded-3xl'>
          <img src='/assets/post2.jpg' className=' h-1/3 rounded-t-3xl' />
          <div className=' bg-violet-950 rounded-b-3xl relative gap-3 flex flex-col justify-center items-center p-5'>
            <div className=' absolute bg-violet-600 rounded-full py-2 px-3 -top-5 z-10 left-5 text-sm'>NEWS18</div>
            <h1 className=' text-xl mt-4 font-bold'>
              {"9% of US internet users believe the concept of digital privacy is a myth."}
            </h1>
            <p className=' text-md text-slate-400 mb-3'>
              {"One of the surprising internet privacy facts concerns the term itself. When asked what digital privacy meant to them, 9% of internet users in the US stated they didn't believe in privacy, calling it a myth or saying it didn't exist."}
            </p>
            <div className=' w-full border border-slate-600 opacity-60 ' />
            <div className=' h-1/6 flex flex-row gap-3 py-1 w-full justify-start items-center'>
              <img src='/assets/profile2.jpg' className='h-14 rounded-full'></img>
              <div className=' flex-col flex'>
                <h1 className=' text-md font-bold'>
                  JOHN CARTER
                </h1>
                <p className=' text-sm text-slate-400 '>
                  SEPTEMBER 1,2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=' lg:w-1/3 md:w-1/2 w-full flex hover:scale-105 transition-all cursor-pointer justify-center items-center flex-col rounded-3xl'>
          <img src='/assets/post3.jpg' className=' h-1/3 rounded-t-3xl' />
          <div className=' bg-violet-950 rounded-b-3xl relative gap-3 flex flex-col justify-center items-center p-5'>
            <div className=' absolute bg-violet-600 rounded-full py-2 px-3 -top-5 z-10 left-5 text-sm'>BBC</div>
            <h1 className=' text-xl mt-4 font-bold'>
              {"Only 3% of Americans understand the current online privacy regulations."}
            </h1>
            <p className=' text-md text-slate-400 mb-3'>
              {"According to statistics on privacy and security in the USA, just 3% of internet users in the country understand the current laws and regulations in place to protect their data privacy, with 63% either having no idea of or not understanding the regulations altogether. "}
            </p>
            <div className=' w-full border border-slate-600 opacity-60 ' />
            <div className=' h-1/6 flex flex-row gap-3 py-1 w-full justify-start items-center'>
              <img src='/assets/profile3.jpg' className='h-14 rounded-full'></img>
              <div className=' flex-col flex'>
                <h1 className=' text-md font-bold'>
                  SOPHIE MOORE
                </h1>
                <p className=' text-sm text-slate-400 '>
                  SEPTEMBER 1,2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className=' bg-slate-700 bg-opacity-50 hover:bg-opacity-100 transition-all cursor-pointer text-sm rounded-full lg:my-0 my-8 py-4 px-4'>
        VIEW ALL ARTICLES
      </div>
    </div>
  )
}
