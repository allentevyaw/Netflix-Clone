import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Row = (props) => {
const {title, fetchURL} = props
const [movies, setMovies] = useState([])

useEffect(() => {

    axios
        .get(fetchURL)
        .then((response) => {
        setMovies(prevMovies => response.data.results)
    })

}, [fetchURL])

console.log(title, movies)

  return (
    <>
       <h2 className='text-white font-bold md:text-xl p-4'> {title}</h2> 
       <div className='relative flex items-center'>
        <div id={'slider'}>

        </div>
       </div>
    </>
  )
}

export default Row