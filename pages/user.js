import React from 'react'
import Posts from '../components/Posts/Posts'

const user = ({username}) => {
    username = "sutej"
  return (
    <div>
        <div className='p-8' >
            <p className='text-xl font-bold' >Welcome {username}</p>
            <p className='text-sm' >You have posted 3 posts</p>
            <hr className='my-4' />
            <p className='font-bold' >Your Posts: </p>
        </div>
        <Posts/>
    </div>
  )
}

export default user