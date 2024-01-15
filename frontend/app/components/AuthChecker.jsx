"use client"

import store from "@/lib/zustand"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function () {
    const {setAuthenticated, setToken, token} = store()
    const path = usePathname()
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
    
  return (
    <></>
  )
}
