import React from 'react'
import AuthChecker from '../components/AuthChecker'
import Navbar from '../components/Navbar'

export default function page() {
  return (
    <>
    <AuthChecker/>
    <Navbar/>
    <div className=' min-h-screen flex flex-col justify-start items-center px-5 md:px-12 lg:px-24'>
        {/* share secret section */}
        <div contentEditable={true} className=' text-xl text-left py-2 px-4 font-medium flex flex-col justify-start items-start bg-indigo-700 w-full rounded-md overflow-clip shadow-md shadow-indigo-900 outline-none'>
           {" "} 
        </div>
    </div>
    </>
  )
}
