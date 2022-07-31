import React from 'react'
import axios from 'axios'

import Post from './Post'

const Posts = ({posts}) => {

  return (
    <>
         
            <div className='flex  flex-grow flex-col' >
            {posts.map( post =>{
              return( <Post post={post[1]} />)
              }) 
            }
        </div>)
     
    </>
  )
}
 

export default Posts