// import { createContext, useReducer,useEffect } from "react";
// import axios from "axios";
// import { useRoute } from "@react-navigation/native";

// const intialState={
//     user: null,
// };

// const Context = createContext()

// const router = useRoute()

// const rootReducer = (state, action) => {
//     switch(action.type){
//         case "LOGIN": 
//             return {...state, user: action.payload}
//         case "LOGOUT":
//             return {...state, user:null}
//         default: 
//             return state
//     }
// }

// const Provider = ({children}) => {
//     const [state, dispatch] = useReducer(rootReducer, intialState)

//     useEffect( ()=>{
//         dispatch({
//             type: "LOGIN",
//             payload: JSON.parse(window.localStorage.getItem('user'))
//         })
//     }, [])

//     // axios.interceptors.response.use(
//     //     function(response){
//     //         return response
//     //     },
//     //     function(error){
//     //         let res = error.response
//     //         if(res.status === 401 && res.config && !res.config.__isRetryRequest){
//     //             return new Promise( (response, request)=>{
//     //                 axios.get('/api/logout')
//     //                 .then((data)=>{
//     //                     console.log('401 error')
//     //                     dispatch({type: 'LOGOUT'})
//     //                     window.localStorage.removeItem('user')
//     //                     router.push('/')
//     //                 } )
//     //                 .catch(err => {
//     //                     console.log('AXIOS INTERCEPTER ERR ')
//     //                     reject(err)
//     //                 })
//     //             } )
//     //         }
//     //         return Promise.reject(error)
//     //     }
//     // )

//     // useEffect(()=>{
//     //     const getcsrfToken = async ()=>{
//     //         const {data} = axios.get('/api/csrf-token')
//     //         console.log('CSRF: ', data)
//     //         axios.defaults.headers('X-CSRF-Token') = data.getCsrfToken
//     //     }
//     // },[])

//     return (
//         <Context.Provider value={{state ,dispatch}}>
//             {children}
//         </Context.Provider>
//     )
// }

// export {Context, Provider}