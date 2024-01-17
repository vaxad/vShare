"use client"
import { useEffect, useState } from 'react'
import AuthChecker from '../components/AuthChecker'
import Navbar from '../components/Navbar'
import SecretCard from '../components/SecretCard'
import store from '@/lib/zustand'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [title, settitle] = useState("")
  const [content, setcontent] = useState("")
  const { setText, setToast, setError, toast } = store()
  const router = useRouter()
  const handleDiscard=()=>{
    settitle("")
    setcontent("")
  }
  const [secrets, setsecrets] = useState([[],[],[]])
  
  const getSecrets=async()=>{
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;
    const token = localStorage.getItem('token');
    if(!token){
      setWarning(true)
      setText("Please login first")
      setToast(true)
      return
    }
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'auth-token':token },
    };
    const res = await fetch(url+'/secrets/fetchmy', requestOptions)
    const resData = await res.json()
    console.log(resData)
    // setsecrets(resData)
    const temp1 = [], temp2 =[], temp3=[];
    for(let i=0;i<resData.length;i++){
      if(i%3===0){
        temp1.push(resData[i])
      }else if(i%3===1){
        temp2.push(resData[i])
      }else{
        temp3.push(resData[i])
      }
    }
    setsecrets([temp1, temp2, temp3])
  }
  useEffect(() => {
    getSecrets()
  }, [])
  const handleSubmit=async()=>{
    if(title.length!==0&&content.length!==0){
      const url = process.env.NEXT_PUBLIC_BACKEND_URL;
      const token = localStorage.getItem('token');
      if(!token){
        setWarning(true)
        setText("Please login first")
        setToast(true)
        return
      }
      const data = {
        title:title,
        content:content
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'auth-token':token },
        body: JSON.stringify(data)
      };
      const res = await fetch(url+'/secrets/', requestOptions)
      if(res.status===200){
        if(!toast){
        setText("Secret shared successfully")
        setToast(true)
        }
        const resData = await res.json()
        router.push('/home')
        settitle("")
        setcontent("")
      }else{
        setError(true)
        setText("Something went wrong")
        setToast(true)
      }
    }else{
      setError(true)
      setText("Please fill all the fields")
      setToast(true)
    }
    }
  return (
    <>
    <AuthChecker/>
    <Navbar/>
    <div className=' min-h-screen flex flex-col justify-start items-center px-5 md:px-12 lg:px-24'>
        {/* share secret section */}
        <div className=' text-xl text-left py-2 px-4 font-medium flex relative flex-col justify-start items-start bg-indigo-700 w-full rounded-md  transition-all shadow-md hover:shadow-indigo-900 outline-none overflow-visible'>
           <input value={title} onChange={(e)=>settitle(e.target.value)} type="text" name="title" id="title" placeholder='Share a secret...secretly🤫' className=' outline-none bg-transparent w-full' />
        </div>
        
        {(title.length!==0||content.length!==0)&&<div className=' flex flex-col p-3 justify-center w-full bg-indigo-900 rounded-md top-10 left-0'>
            <textarea value={content} onChange={(e)=>setcontent(e.target.value)} name="content" id="content" cols="30" rows="10" placeholder='Write your secret descriptively...' className=' outline-none bg-transparent w-full' ></textarea>
            <div className=' flex w-full justify-between pt-5 '>
              <button onClick={()=>handleDiscard()} className=' px-3 py-2 text-lg font-semibold border border-slate-100 text-slate-100 rounded-md bg-red-800 hover:text-red-800 hover:bg-slate-100 transition-all'>Discard</button>
              <button onClick={()=>handleSubmit()} className=' px-3 py-2 text-lg font-semibold border border-slate-100 text-slate-100 rounded-md bg-violet-600 hover:text-violet-600 hover:bg-slate-100 transition-all'>Share</button>

            </div>
        </div>}
        {secrets[0].length===0?<h1 className=' w-full text-center text-2xl font-semibold py-8'>Post your first secret!</h1>:<></>}
        <div className=' grid md:grid-cols-3 grid-cols-1 lg:grid-cols-3 gap-5 w-full py-8'>
        <div className=' flex flex-col w-full gap-5 '>
          {(secrets[0]).map((secret, index) => (<SecretCard key={index} secret={secret} index={index}/>))}
        </div>
        <div className=' flex flex-col w-full gap-5'>
          {(secrets[1]).map((secret, index) => (<SecretCard key={index} secret={secret} index={index+secrets[0].length}/>))}
        </div>
        <div className=' flex flex-col w-full gap-5'>
          {(secrets[2]).map((secret, index) => (<SecretCard key={index} secret={secret} index={index+secrets[0].length+secrets[1].length}/>))}
        </div>
        </div>
    </div>
    </>
  )
}
