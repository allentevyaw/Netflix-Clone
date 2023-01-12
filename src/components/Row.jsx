import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Row = (props) => {
const {title, fetchURL, key} = props
const [movies, setMovies] = useState([])

useEffect(() => {
    axios
        .get(fetchURL)
        .then((response) => {
        setMovies(prevMovies => response.data.results)
    })
}, [fetchURL])


  return (
    <>
       <h2 className='text-white font-bold md:text-xl p-4'> {title}</h2> 
       <div className='relative flex items-center'>
        <div id={'slider'}>
            {movies.map((item, id) => (
                <div className='w-[160px] sm:w-[200px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
                    <div className='absolute top-0 left-o w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p>{item?.title}</p>
                    </div>
                </div>
            ))}
        </div>
       </div>
    </>
  )
}

export default Row