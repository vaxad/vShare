"use client"
import React from 'react'
import { motion } from 'framer-motion'
export default function Features() {
  return (
    <div className=' min-h-screen w-full flex flex-row justify-between items-center'>
      <div className='w-full flex flex-col justify-center items-center gap-5 p-16 lg:px-24 md:px-16 px-10'>
        <h1 className=' text-5xl font-semibold'>Join Us in Building a Safe Haven for Secrets</h1>
        <p className='w-5/6 self-start text-lg text-slate-400'>{"Let's build something extraordinary together. vShare is not just a place for secrets; it's a safe haven. Join our community and contribute to the creation of a supportive space where secrets can be shared without fear."}</p>
        <div className=' flex flex-col gap-5 w-full justify-start items-start'>
          <motion.div id='feature1' initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 }
            }} className=' flex flex-row gap-5 justify-center items-center'>
            <div className=' flex justify-center items-center w-12 bg-violet-500 rounded-xl p-2'>
              <svg width="28" height="33" viewBox="0 0 28 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.352 32.4428C14.1511 32.4428 13.9502 32.3967 13.769 32.3029L7.92748 29.279C6.26991 28.4201 4.97326 27.4561 3.96075 26.3331C1.74468 23.8772 0.511709 20.7245 0.492113 17.4541L0.423524 6.69014C0.415358 5.44784 1.2172 4.33279 2.41587 3.91285L13.1419 0.173226C13.7788 -0.0542381 14.4892 -0.0574194 15.1375 0.162091L25.9043 3.77447C27.1095 4.1769 27.9244 5.284 27.9309 6.52471L27.9995 17.2966C28.0208 20.5622 26.8303 23.7276 24.6485 26.2107C23.6474 27.3496 22.3622 28.3278 20.7209 29.2027L14.9317 32.2949C14.7521 32.3919 14.5528 32.4412 14.352 32.4428" fill="white" />
                <path d="M13.1071 19.9863C12.7935 19.9879 12.48 19.8749 12.2383 19.6427L9.12892 16.6523C8.6488 16.1878 8.6439 15.4338 9.11912 14.9662C9.59435 14.4969 10.3701 14.4922 10.8518 14.955L13.0891 17.1056L18.5517 11.7196C19.0286 11.2504 19.8043 11.2456 20.2844 11.7085C20.7662 12.173 20.7711 12.9285 20.2959 13.3946L13.971 19.6316C13.7325 19.867 13.4206 19.9847 13.1071 19.9863" fill="#A388EF" />
              </svg>
            </div>
            <h2 className=' text-xl text-slate-300'>100% Private data</h2>
          </motion.div>
          <motion.div id='feature2' initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 }
            }} className=' flex flex-row gap-5 justify-center items-center'>
            <div className=' flex justify-center items-center w-12 bg-violet-500 rounded-xl p-2'>
            <svg width="48" height="48" viewBox="0 0 59 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.4507 9.70539C41.911 6.62916 38.4838 4.41163 34.637 3.35548C30.7903 2.29934 26.7113 2.45604 22.9568 3.80421C19.2024 5.15238 15.9555 7.62632 13.6593 10.8883C11.3631 14.1504 10.1296 18.0415 10.127 22.0306V27.323" stroke="white" stroke-opacity="0.4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.2878 38.5601C18.9511 41.3822 22.4003 43.3398 26.1887 44.1794C29.9772 45.019 33.9305 44.702 37.5367 43.2694C41.1429 41.8367 44.236 39.3545 46.4155 36.1441C48.595 32.9336 49.7606 29.1428 49.7612 25.2624V21.7389" stroke="white" stroke-opacity="0.4" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9008 18.655C18.8897 18.8672 18.8196 19.0733 18.6947 19.2522L10.4844 30.8834C10.2579 31.2029 9.88509 31.3855 9.49404 31.365C9.10299 31.3445 8.75131 31.1239 8.55946 30.7825L1.60989 18.3568C1.40847 17.9952 1.41802 17.5519 1.63859 17.2002C1.85773 16.8469 2.24992 16.6425 2.6637 16.6642L17.8236 17.4587C18.2374 17.4804 18.6061 17.7246 18.7871 18.0989C18.8736 18.2752 18.9107 18.4671 18.9008 18.655" fill="white"/>
<path d="M40.5387 29.2449C40.546 29.0353 40.6116 28.8308 40.7317 28.6522L48.6318 17.0353C48.8498 16.7162 49.2145 16.5296 49.6006 16.5431C49.9868 16.5566 50.3376 16.7681 50.5327 17.1016L57.6032 29.2413C57.8082 29.5947 57.8064 30.0322 57.5948 30.383C57.3847 30.7353 57.0013 30.9437 56.5927 30.9294L41.6221 30.4066C41.2135 30.3924 40.8455 30.1577 40.6605 29.7916C40.5721 29.6192 40.5322 29.4305 40.5387 29.2449" fill="white"/>
</svg>
            </div>
            <h2 className=' text-xl text-slate-300'>Create Your Secret</h2>
          </motion.div>
          <motion.div id='feature3' initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -100 }
            }} className=' flex flex-row gap-5 justify-center items-center'>
            <div className=' flex justify-center items-center w-12 bg-violet-500 rounded-xl p-2'>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.2423 0.88916C7.32075 0.88916 0.856079 8.16767 0.856079 16.2447C0.856079 18.8244 1.6085 21.4809 2.92907 23.9071C3.17476 24.3063 3.20547 24.813 3.03656 25.2891L2.00774 28.7287C1.77741 29.5579 2.48376 30.1721 3.26689 29.9264L6.3687 29.0051C7.21326 28.7287 7.87354 29.0819 8.65821 29.5579C10.9001 30.8785 13.6933 31.5541 16.2116 31.5541C23.8279 31.5541 31.5671 25.6729 31.5671 16.1986C31.5671 8.02947 24.9642 0.88916 16.2423 0.88916" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.1021 18.2255C8.02722 18.2255 7.1366 17.3349 7.1366 16.26C7.1366 15.1698 8.01186 14.2945 9.1021 14.2945C10.1923 14.2945 11.0676 15.1698 11.0676 16.26C11.0676 17.3349 10.1923 18.2101 9.1021 18.2255ZM16.1815 18.2257C15.0913 18.2104 14.216 17.3351 14.216 16.2449C14.216 15.17 15.1066 14.2794 16.1815 14.2947C17.2718 14.2947 18.147 15.17 18.147 16.2602C18.147 17.3351 17.2718 18.2257 16.1815 18.2257ZM21.2947 16.2604C21.2947 17.3353 22.1699 18.2259 23.2602 18.2259C24.3504 18.2259 25.2257 17.3353 25.2257 16.2604C25.2257 15.1702 24.3504 14.2949 23.2602 14.2949C22.1699 14.2949 21.2947 15.1702 21.2947 16.2604Z" fill="#A388EF" />
              </svg>
            </div>
            <h2 className=' text-xl text-slate-300'>Connect with Others</h2>
          </motion.div>
        </div>
      </div>
      <motion.div id='image' initial="hidden" whileInView="visible" transition={{ duration: 0.5, ease: 'linear' }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 }
        }} className=' lg:flex md:flex hidden h-4/5 w-full align-middle justify-center '>
        <img src='/assets/pc.png' className=' object-cover object-left-bottom w-full h-full'></img>
      </motion.div>
    </div>
  )
}
