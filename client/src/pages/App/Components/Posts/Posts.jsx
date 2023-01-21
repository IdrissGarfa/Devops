import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='w-full my-8 flex flex-col items-center justify-center gap-6 px-3 md:px-3'>
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Posts