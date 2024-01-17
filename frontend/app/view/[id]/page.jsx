"use client"

import Loading from "@/app/components/Loading"
import Navbar from "@/app/components/Navbar"
import SecretCard from "@/app/components/SecretCard"
import store from "@/lib/zustand"
import { useEffect, useRef, useState } from "react"


export default function Page({params}) {
    const [secret, setsecret] = useState(null)
    const [comments,setcomments] = useState([])
    const inputRef = useRef(null)
    const [secrets, setsecrets] = useState([[],[],[]])

    const {token, setToast, setText, setWarning} = store()
    const url = process.env.NEXT_PUBLIC_BACKEND_URL
    const getComments = async() => {
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'auth-token':token },
        };
        const res = await fetch(`${url}/secrets/comment/${params.id}`,requestOptions)
        const resData = await res.json()
        console.log(resData)
        setcomments(resData)

    }
    const getSecrets=async()=>{
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
        const res = await fetch(url+'/secrets/', requestOptions)
        let resData = await res.json()
        resData = resData.filter((secret)=>secret._id!==params.id)
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
    const getSecret = async() => {
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'auth-token':token },
        };
        const res = await fetch(`${url}/secrets/fetch/${params.id}`,requestOptions)
        const resData = await res.json()
        setsecret(resData)
        getComments()
        getSecrets()
    }
    useEffect(() => {
    if(token)
        getSecret()
    }, [token])
    
    const handleComment = async() => {
        const content = inputRef.current.value
        if(content.replace(/\s\g/,"").length===0){
            setWarning(true)
            setText("Please enter some text")
            setToast(true)
            return
        }
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'auth-token':token },
          body:JSON.stringify({content:content})
        };
        const res = await fetch(`${url}/secrets/comment/${params.id}`,requestOptions)
        const resData = await res.json()
        inputRef.current.value=""
        setWarning(false)
        setText("Comment posted successfully")
        setToast(true)
        setcomments([...comments,resData])
        
    }
  return (
    <>
    <Navbar/>
    <div className=" flex flex-col justify-start items-center w-full min-h-screen px-6 md:px-12 lg:px-24">
        <div className=" flex flex-col md:flex-row justify-center items-start w-full gap-5">
            <div className="w-full flex">
                {secret?<SecretCard secret={secret} view={true} index={Math.floor(Math.random()*100)}/>:<Loading/>}
            </div>

                {secret?<div className=" flex min-h-full w-full flex-col justify-center items-center gap-5 p-4 bg-indigo-600 rounded-lg">
                    {comments.length===0?
                    <h1 className=" py-12 w-full text-center rounded-md bg-slate-100 text-slate-500">Wow! Thats really empty!</h1>:
                    <div id="style-4" className=" flex flex-col gap-2 w-full max-h-[45vh] overflow-y-scroll">
                    {comments.map((comment)=>{
                        return(
                            <div key={comment._id} className=" flex w-full justify-start items-center flex-col bg-slate-100 px-3 py-2 rounded-md">
                                <h3 className=" text-md font-normal text-slate-950 w-full text-left">{comment.content}</h3>
                                <div className=" flex justify-end items-end w-full flex-row">
                                    <p className=" text-sm opacity-70 text-slate-700">{(new Date(comment.createdAt)).toLocaleDateString()}</p>     
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    }
                    <div className=" flex w-full flex-row bg-slate-100 justify-between items-center rounded-md py-2 px-3">
                        <input placeholder="Comment on this secret...secretly" ref={inputRef} type="text" className=" text-slate-950 outline-none bg-transparent w-full" />
                        <img onClick={()=>{handleComment()}} className=" h-5 w-5 cursor-pointer" src="https://img.icons8.com/material-rounded/128/000000/sent.png" alt="sent"/>
                    </div>
                    </div>:<Loading></Loading>}
        </div>
        {/* other posts */}
        
        {secret?secrets[0].length===0?<Loading/>:<></>:<></>}
        {secrets[0].length!==0?<h2 className=" pt-12 w-full text-center text-slate-100 text-xl font-medium">View other secrets</h2>:<></>}
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
