import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineUser, AiOutlineHome} from 'react-icons/ai'
import { useDispatch, useSelector,useStore } from 'react-redux'
import axios from 'axios'

import img from '../../public/Logo-4.png'
import imgUser from '../../public/default-user-icon.jpg'
import HeaderCenterIcons from './HeaderCenterIcons'
import Link from 'next/link'
import { logout } from '../../store/userSLice'

const Header = () => {

    let isLogged = false

    const dispatch = useDispatch()
    let {user} = useStore().getState()
    console.log("Header:  " ,user)
    if(user.userToken !== null){
        isLogged =true
    }

    const logoutHandler = async(e) =>{
        console.log("Inside Logout");
        e.preventDefault();
        try{
            const {data} = await axios.post(`http://localhost:8080/api/auth/logout`, {
                username: user.username ,
                refreshToken: "f18bba60-bf90-4e04-93d8-dd6e724f158f",
            })
            dispatch( logout(data) )
            isLogged = false
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16' >
        <div className='flex'>
            <div className='flex rounded overflow-hidden' >
                <Image src={img} height={40} width={40} />
            </div>
            <div className='flex items-center space-x-2 px-8 ml-8 sm:rounded-full sm:px-2 sm:py-2 bg-gray-100 text-gray-600 ' >
                <HiSearch size={32} />
                <input className='hidden lg:inline-flex border-slate-100 bg-transparent ml-4 border-none focus:ring-0 focus:outline-none focus:outline-hidden' 
                    type="text" 
                    placeholder='Search Broadcast'
                />
            </div>
        </div>
        <div className='flex flex-grow justify-center mx-4' >
            <HeaderCenterIcons >
                <Link href='/' >
                    <a>
                        <AiOutlineHome className='mx-auto' size={24} />
                    </a>
                </Link>
            </HeaderCenterIcons>

            <HeaderCenterIcons >
                <Link href='/user' >
                    <a>
                        <AiOutlineUser className='mx-auto' size={24} />
                    </a>
                </Link>
            </HeaderCenterIcons>

            <HeaderCenterIcons >
                <Link href='/' >
                    <a>
                        <IoMdNotificationsOutline className='mx-auto' size={24} />
                    </a>
                </Link>
            </HeaderCenterIcons>

        </div>
        {
            !isLogged?
            <div className='flex items-center justify-end min-w-fit space-x-4'>
                <Image src={imgUser} height={40} width={40} />
                <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-4 max-w-xs' >
                    {console.log(user.username)}
                </p>
                <button 
                    className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-4 max-w-xs' onClick={logoutHandler} >
                        logout  
                </button>
            </div>
            :
            <div>
                <button 
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
                    >
                        <a href='/login' >Login</a>
                </button>
                <button
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
                    >
                        <a href='/signup' >Sign Up</a>
                </button>
            </div>
        }
    </div>

  )
}

export default Header