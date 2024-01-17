"use client"

import store from "@/lib/zustand"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Toast from "./Toast"

export default function AuthChecker() {
    const {setAuthenticated, setToken, token, user, setUser, error, text, showToast, warning, setToast, setError, setWarning} = store()
    const path = usePathname()
    const url = process.env.NEXT_PUBLIC_BACKEND_URL;

    useEffect(() => {
      if(window){
        const localToken = localStorage.getItem("token")
        if(!localToken){
          setAuthenticated(false)
          if(token!==localToken)
          setToken(null)
          if(window.location.pathname!=="/auth"&&window.location.pathname!=="/")
            window.location.href = "/auth"
        }else{
            setAuthenticated(true)
            if(token!==localToken)
            setToken(localToken)
            if(window.location.pathname==="/auth")
            window.location.href = "/home"
        }
      }
    }, [path, token])
    const getUser=async()=>{
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'auth-token':token },
    };
      const res = await fetch(`${url}/auth/getuser`, requestOptions)
      const resData = await res.json()
      setUser(resData.user)
    }
    useEffect(() => {
      if(token){
        getUser()
      }
    }, [token])
    
    
  return (
    <>
    <Toast error={error} warning={warning} text={text} showToast={showToast} setShowToast={setToast} setError={setError} setWarning={setWarning} />
    </>
  )
}
