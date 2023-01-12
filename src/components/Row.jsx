import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'


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
        <div className='full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' id={'slider'}>
            {movies.map((item, id) => (
                <Movie key={id} item={item}/>
            ))}
        </div>
       </div>
    </>
  )
}

export default Row