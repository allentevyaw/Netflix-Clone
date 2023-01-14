import React, {useState, useEffect} from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase.config'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'


const SavedShows = () => {

const [movies, setMovies] = useState([])
const {user} = UserAuth()


const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 500
}

const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 500
}

useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setMovies(doc.data()?.savedShows)
    })

}, [user?.email])

  return (
    <>
        <h2 className='text-white font-bold md:text-xl p-4'> My Shows</h2> 
       <div className='relative flex items-center group'>
            <MdChevronLeft 
                onClick={slideLeft} 
                size={40} 
                className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
        <div 
            className='full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' 
            id={'slider'}>
                {movies.map((item, id) => (
                        <div key={id} className='w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                        <div className='absolute top-0 left-o w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                            <p className='text-xs whitespace-pre-line md:text-sm font-bold flex justify-center items-center h-full text-center p-4'>{item?.title}</p>
                        </div>
                    </div>
                ))}
        </div>
            <MdChevronRight onClick={slideRight} 
                size={40} 
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'/>
       </div>
    </>
  )
}

export default SavedShows