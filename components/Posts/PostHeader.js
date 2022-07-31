import Link from 'next/link'
import React from 'react'

const PostHeader = ({subcastName, username, duration}) => {
  return (
    <div className='flex'>
        <div className='p-2 font-semibold'>
            <Link href={"/" + subcastName}><a><h1>c/{subcastName}</h1></a></Link>
        </div>
        <div className='text-gray-600 text-sm pt-3 px-4'>
            <Link href={"/" + username}><a><h6>Posted by u/{username}</h6></a></Link>
        </div>
        <div className='text-gray-600 text-sm pt-3 px-4'>
            <h4>{duration}</h4>
        </div>
    </div>
  )
}

export default PostHeader