"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import { useRouter } from "next/navigation"
import store from "@/lib/zustand"

export default function Page() {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [signup, setsignup] = useState(true)
    const router = useRouter()
    const { setToken } = store()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(typeof(url))
        if (signup) {
            const res = await fetch(`${url}/auth/signup/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            })
            const data = await res.json()
            if (data.authToken) {
                const token = data.authToken
                localStorage.setItem("token", token)
                setToken(token)
                router.push("/home")
            } else if (data.error) {
                alert(JSON.stringify(data.error))
            } else {
                alert("Some error occured")
            }
        } else {
            const res = await fetch(`${url}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            })
            const data = await res.json()
            if (data.authToken) {
                const token = data.authToken
                localStorage.setItem("token", token)
                setToken(token)
                router.push("/home")
            } else if (data.error) {
                alert(JSON.stringify(data.error))
            } else {
                alert("Some error occured")
            }
        }
    }
    return (
        <>
            <Navbar />
            <div className=' min-h-[75vh] flex flex-col justify-center items-center px-5 md:mx-12 lg:px-24'>
                <h1 className=" text-3xl font-bold py-12">Join a community of individuals who understand the need for anonymity</h1>
                <div className=" flex flex-col justify-center items-center bg-indigo-950  w-full rounded-md overflow-clip">
                    <div className=" flex flex-row justify-center w-full items-center bg-indigo-700 py-2">
                        <h1 onClick={() => { setsignup(true) }} className={` cursor-pointer w-full text-center text-xl font-semibold border-r whitespace-nowrap h-full border-slate-950 ${signup ? "text-slate-100" : "text-slate-400"}`}>SIGN UP</h1>
                        <h1 onClick={() => { setsignup(false) }} className={` cursor-pointer w-full text-center text-xl font-semibold border-l whitespace-nowrap h-full border-slate-950 ${!signup ? "text-slate-100" : "text-slate-400"}`}>LOG IN</h1>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className=" flex w-full flex-col gap-5 justify-start items-center p-6">
                        {signup && <div className=" flex flex-col gap-2 w-full">
                            <h5>Username</h5>
                            <input maxLength={15} minLength={4} type="text" placeholder="shushsecrets" required value={name} onChange={(e) => setname(e.target.value)} className={` outline-none w-full py-1 px-2 rounded-md bg-gray-700`} />
                        </div>}
                        <div className=" flex flex-col gap-2 w-full">
                            <h5>Email</h5>
                            <input maxLength={100} type="email" placeholder="abcd@gmail.com" required value={email} onChange={(e) => setemail(e.target.value)} className={` outline-none w-full py-1 px-2 rounded-md bg-gray-700`} />
                        </div>
                        <div className=" flex flex-col gap-2 w-full">
                            <h5>Password</h5>
                            <input maxLength={20} minLength={8} type="password" placeholder="abCD123@" required value={password} onChange={(e) => setpassword(e.target.value)} className={` outline-none w-full py-1 px-2 rounded-md bg-gray-700`} />
                        </div>
                        <button type="submit" className=" w-full py-2 text-lg font-medium text-center border border-slate-100 hover:bg-slate-100 hover:text-indigo-950 text-slate-100 transition-all delay-75 duration-500 rounded-md">{signup ? "Sign up" : "Log in"}</button>
                    </form>
                </div>
            </div>
        </>
    )
}
