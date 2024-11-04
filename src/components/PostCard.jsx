import React from 'react'
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'
const PostCard = ({$id,title,featuredImage}) => {
  return (
    <Link to={`/post/${$id}`}>
    <div className='w-full rounded-[5px] relative '>
        <div className='w-full justify-center'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
            className='rounded-[5px] w-full h-[300px]' />
        </div>
        <h2
        className='flex items-center justify-center text-xl font-bold absolute min-h-[80px] bottom-0 left-0 w-[100%] rounded-[inherit] text-white opacity-[0.5] bg-black'
        >{title}</h2>
    </div>
</Link>
  )
}

export default PostCard