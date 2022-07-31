import axios from 'axios'
import { useSelector, useDispatch, useStore } from 'react-redux'
import {GrGoogle} from 'react-icons/gr'
import { useCallback, useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { Context } from '../context'
import { loginReducer } from '../store/userSLice'
import { wrapper } from '../store/store'

const login = () => {
    
    const user = useSelector((state)=>state.user.user)
    const dispatch = useDispatch()
    const store = useStore()
    console.log("store:  ", store.getState())
    console.log( "store user:  " , store.getState().user )
    console.log("store user token:  ", store.getState().user.userToken)

    // const {state, dispatch} = useContext(Context)

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [loading , setLoading] = useState(false)

    // const router = useRouter()

    
    // useEffect( ()=>{
    //     if(store.getState().user.userToken !== null){router.push("/")}
    // }, [] )


    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            setLoading(true)
            const {data} = await axios.post(`http://localhost:8080/api/auth/login`, {
                username,
                password
            })
        console.log("Logging: " + data )
        setLoading(false) 
        console.log("login response", data)
        // useEffect(() => {
            dispatch( loginReducer(data) )
        
        // }, [dispatch])
        
        
        window.localStorage.setItem('user', JSON.stringify(data))   

        // router.push("/")
        }catch(err){
            setLoading(false)
            console.log(err)
            
        }
    }

  return (
    <>
        <div className='grid place-items-center'>
            <div className='inline-flex flex-col border py-4 border-slate-300 rounded-lg shadow-md m-16 items-center' >
                <div className=' inline-flex flex-col p-12 items-center ' >
                    <h1 className='text-3xl m-2'>Log in</h1>
                    <p className='text-center text-xs'>By Logging in you agree to user terms and conditions</p>
                </div>
                <button className='flex border-slate-400 hover:bg-slate-200 border rounded-3xl p-3 ' >
                    <a className='flex  '>
                        <GrGoogle className='mr-4 -ml-1 mt-1 '  />
                        Continue with google
                    </a>
                </button>
                <p className='m-4' >OR</p>
                <form action="/login" method="POST" onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center m-4' >
                        <input 
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' 
                            placeholder='Username' 
                            name="username" 
                            value={username} 
                            onChange={ (e) =>{
                                setUsername(e.target.value)
                                console.log(username)
                                }} 
                            required
                        />
                        <input 
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' 
                            placeholder='password'
                            name="password" 
                            value={password} 
                            onChange={(e) =>setPassword(e.target.value)} 
                            required
                        />
                        <button 
                            type="submit" 
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm my-4 px-7 py-2.5 text-center mr-2 mb-2 "
                            // disabled={!password || !email || loading}
                        >
                            {/* {loading?<p>Loading...</p>: */}
                            <a href='/'>
                                Login
                            </a>
                            {/* } */}
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </>
  )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//     (store)= async() =>{
//         const {data} = await axios.post(`http://localhost:8080/api/auth/login`, {
//                 username,
//                 password
//             })
//             store.dispatch( loginReducer(data) )
// } )

export default login