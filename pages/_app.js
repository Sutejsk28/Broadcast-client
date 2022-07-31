import '../styles/globals.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loginReducer } from '../store/userSLice'

import { wrapper } from '../store/store'
import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }) {

  const dispatch = useDispatch()
  useEffect( ()=>{
    dispatch( loginReducer(JSON.parse(window.localStorage.getItem('user'))) )
}, [dispatch])


  return <>
      <Header />
     <Component {...pageProps} />
  </>
}

export default wrapper.withRedux(MyApp)
