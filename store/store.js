import { configureStore } from "@reduxjs/toolkit"
import { HYDRATE ,createWrapper} from 'next-redux-wrapper'

import userReducer from './userSLice'


export const makeStore = () => configureStore({
    reducer: {
        user: userReducer
    }
})

export const wrapper = createWrapper(makeStore)