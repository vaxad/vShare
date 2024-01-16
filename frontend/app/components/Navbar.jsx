"use client"
import store from '@/lib/zustand'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [show, setshow] = useState(false)
    const { authenticated, setToken } = store()
    const handleSignOut = () => {
        localStorage.removeItem("token")
        setToken(null)
    }
    return (
        <div className=' w-full p-10 flex flex-row justify-between items-center lg:px-24 md:px-16 px-5'>
            <div className=' flex flex-row justify-center items-center'>
                <img className=' lg:w-16 md:w-14 w-12' src=' /logo.png'></img>
                <Link href={"/"} className=' cursor-pointer lg:text-3xl md:text-2xl text-xl font-bold'>vShare</Link>
                <div className='mx-14 lg:block relative hidden border h-16 border-slate-600'></div>
                <ul className={` ${!show ? " -translate-y-full lg:translate-y-0" : ' translate-y-0'} transition-all delay-150 duration-500 flex w-full lg:w-fit h-full lg:h-full  lg:flex-row flex-col justify-center items-center lg:static absolute right-0 z-40 top-0 rounded-none lg:rounded-2xl lg:p-0 p-5 lg:bg-transparent bg-indigo-900 gap-8 text-base`}>

                    <Link href={'/home'} className=' hover:text-violet-300 transition-all cursor-pointer hover:scale-105'>
                        HOME
                    </Link>
                    <Link href={'/me'} className=' hover:text-violet-300 transition-all cursor-pointer hover:scale-105'>
                        YOUR SECRETS
                    </Link>
                    <a target='_blank' href='https://vaxad.vercel.app' className=' hover:text-violet-300 transition-all cursor-pointer hover:scale-105'>
                        ABOUT
                    </a>
                    <a target='_blank' href='https://github.com/vaxad/vShare' className=' hover:text-violet-300 transition-all cursor-pointer hover:scale-105'>
                        REPO
                    </a>
                </ul>
            </div>
            <div className=' flex flex-row gap-4 justify-center items-center'>
                {!authenticated?
                <Link href="/auth" className=' bg-violet-500 transition-all lg:py-2 hover:bg-white hover:text-violet-500 lg:px-4 md:px-4 md:py-3 px-3 py-1 rounded-full lg:text-base font-bold md:text-md text-xs'>SIGN UP</Link>
                :
                <button onClick={()=>handleSignOut()} className=' bg-violet-500 transition-all lg:py-2 hover:bg-white hover:text-violet-500 lg:px-4 md:px-3 md:py-2 px-2 py-1 rounded-full font-bold lg:text-base md:text-md text-xs'>LOG OUT</button>
                }
                <div onClick={() => { setshow(!show) }} className={`lg:hidden  block right-0 h-fit w-fit rounded-lg border p-2 z-50 transition-all duration-500 border-white ${show ? ' rotate-90' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill='#ffffff' x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>
            </div>

        </div>
    )
}
