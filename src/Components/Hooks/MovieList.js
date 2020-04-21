import React, { useState } from 'react';

const MovieList = props => {
   const [movies, setMovies] = useState(['Alien', 'The Incredibles', 'Prometheus'])
   const [userInput, setUserInput] = useState('')
   return (
      <div>
         MovieList
         {
            movies.map((movie, index) => (
               <h2 key={index} >{movie}</h2>
            ))}
            < input onChange={(e) => setUserInput(e.target.value)} />
         <button onClick={() => setMovies(...movies, userInput)} >Add Movies</button>
         
      </div>)
}

export default MovieList;