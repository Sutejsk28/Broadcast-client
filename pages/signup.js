import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import {GrGoogle} from 'react-icons/gr'
import { useRouter } from 'next/router'


const signup = () => {

    const user = useSelector((state)=>state.user.user)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading , setLoading] = useState(false)

    const router = useRouter()

    useEffect( ()=>{
        if(user!==null) router.push("/")
    }, [user] )

    const handleSubmit = async(e) =>{
        console.log("Inside handler")
        e.preventDefault();
        try{
            setLoading(true)
            const {data} = await axios.post(`http://localhost:8080/api/auth/signup`, {
            name,
            email,
            password
            })
            setLoading(false) 
            console.log("registration successful")
            console.log("data: from singup user: " + data) 
        }catch(err){
            setLoading(false)
            console.log(err.response.data)
            
        }
    };


  return (
    <>
        <div className='grid place-items-center'>
            <div className='inline-flex flex-col border py-4 border-slate-300 rounded-lg shadow-md m-16 items-center' >
                <div className=' inline-flex flex-col p-12 items-center ' >
                    <h1 className='text-3xl m-2'>Sign up</h1>
                    <p className='text-center text-xs'>By Signing up you agree to user terms and conditions</p>
                </div>
                <button className='flex border-slate-400 hover:bg-slate-200 border rounded-3xl p-3 ' >
                    <a className='flex  '>
                        <GrGoogle className='mr-4 -ml-1 mt-1 '  />
                        Sign in with google
                    </a>
                </button>
                <p className='m-4' >OR</p>
                <form action="/register" method="POST" onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center m-4' >
                        <input 
                            type='email' 
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' placeholder='email' 
                            name="email" 
                            value={email} 
                            onChange={ (e) =>setEmail(e.target.value)} 
                            required
                            />
                        <input 
                            type='text'
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' 
                            placeholder='Username' 
                            name="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required
                            />
                        <input 
                            type='text'
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' 
                            placeholder='password'
                            name="password" 
                            value={password} 
                            onChange={(e) =>setPassword(e.target.value)} 
                            required />
                    </div>
                    <button 
                        type='submit' 
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm my-4 px-7 py-2.5 text-center mr-2 mb-2 "
                        
                        >
                        {/* <a href='/login'> */}
                            Sign Up
                        {/* </a> */}
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default signup