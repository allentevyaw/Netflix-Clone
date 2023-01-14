import React, { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase.config'
import {arrayUnion, doc, updateDoc} from '../firebase'


const Movie = ({item}) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const {user} =UserAuth()

    const movieID =doc(db, 'users', `${user?.email}`)


  return (
    <div className='w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
    <div className='absolute top-0 left-o w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='text-xs whitespace-pre-line md:text-sm font-bold flex justify-center items-center h-full text-center p-4'>{item?.title}</p>
        <p>
            {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> 
            : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
        </p>
    </div>
</div>
  )
}

export default Movie