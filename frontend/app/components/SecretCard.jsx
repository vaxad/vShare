import store from "@/lib/zustand";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SecretCard({secret, index, view}){
  const colors = ["bg-[#a7fe99]","bg-[#ffdaa5]","bg-[#caa7f0]","bg-[#bee3ff]","bg-[#d3ff4c]"]
    secret.content = view?secret.content:secret.content.length>100?secret.content.substring(0,100)+"...":secret.content;
    const contentpara = useRef(null)
    const cardRef = useRef(null)
    const {user, token, setError, setText, setToast, setWarning} = store()
    const content = secret.content.replace(/\n/g, '<br>');
    const [like, setlike] = useState(false)
    const url = process.env.NEXT_PUBLIC_BACKEND_URL
    const [comments,setcomments] = useState([])
    const getComments = async() => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'auth-token':token },
      };
      const res = await fetch(`${url}/secrets/comment/${secret._id}`,requestOptions)
      const resData = await res.json()
      console.log(resData)
      setcomments(resData)
  }
  useEffect(() => {
    contentpara.current.innerHTML = content
    getComments()
  }, [])
  
    useEffect(() => {
      if(user){
        if(secret.likes.includes(user._id)){
          setlike(true)
        }
      }
      
    }, [user])
    
    const handleLike=async()=>{
      if(like){
        secret.likes.pop()
      }else{
        secret.likes.push(user._id)
      }
      setlike(!like)
      const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'auth-token':token },
      };
      const res = await fetch(`${url}/secrets/like/${secret._id}`,requestOptions)
    }
    const handleShare=async(e)=>{
      const frontend = process.env.NEXT_PUBLIC_FRONTEND_URL
      navigator.clipboard.writeText(`${frontend}/view/${secret._id}`)
      setText("Shareable link has been copied to the clipboard")
      setToast(true)
    }
    return(
      <div ref={cardRef} className={` ${view?" cursor-default":""} flex flex-col justify-start items-center h-fit w-full rounded-2xl border border-slate-900 p-3 text-slate-950 ${colors[index%colors.length]}`}>
        <Link href={`/view/${secret._id}`} className=" w-full h-full flex flex-col" >
        <div className=" flex flex-row justify-between items-center gap-2 w-full">
          <h1 className=' text-xl font-semibold text-left break-words w-full'>{secret.title}</h1>
          <p className=" text-sm font-normal text-slate-600">{(new Date(secret.createdAt)).toLocaleDateString()}</p>
        </div>
        <p ref={contentpara} className=' text-sm font-normal text-left break-words w-full py-1'></p>
        </Link>
        <div className=' flex pt-4 w-full flex-row justify-between items-center'>

        <div className=' flex flex-row w-fit h-fit gap-2 justify-center items-center'>

          <div title="Like this secret"  className=' flex flex-row w-fit h-fit gap-1 justify-center items-center'>
            <img onClick={()=>{handleLike()}} className=' cursor-pointer w-8 h-8 ' src={like?"/assets/liked.png":"/assets/unliked.png"} alt={like?"unlike":"like"} />
            <h4 className=' text-md '>{secret.likes.length}</h4>
          </div>
          <div title={`${comments.length} comments on this secret`} className=' flex flex-row w-fit h-fit gap-1 justify-center items-center'>
            <img className=' cursor-pointer w-8 h-8 ' src={"https://img.icons8.com/ios/50/000000/chat-message--v1.png"} alt={"comment"} />
            <h4 className=' text-md '>{comments.length}</h4>
          </div>
          </div>
          <img title="Share this secret" onClick={(e)=>{handleShare(e)}} className=' cursor-pointer w-8 h-8 ' src="https://img.icons8.com/pulsar-line/48/000000/share-3.png" alt="share" />
        </div>
      </div>
    )
  }