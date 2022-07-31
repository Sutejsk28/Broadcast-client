import Link from 'next/link'
import React from 'react'

const PostFooter = ({count}) => {
  return (
    <div className='m-2'>
        <Link href="/"><a>
          <p>Comments({count})</p>
        </a></Link>
    </div>
  )
}

export default PostFooter