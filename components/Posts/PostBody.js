import React from 'react'

const PostBody = ({title, description}) => {
  return (
    <div className='' >
        <h1 className='text-3xl font-semibold pt-1 pb-3'>{title}</h1>
        <h4 className='mb-2'>{description}</h4>
    </div>
  )
}

export default PostBody