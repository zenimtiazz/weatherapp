// api.openweathermap.org/data/2.5/weather?q=antwerp&appid=5b4da8dc948e3009f9de2efdec3ef3f6
import React from 'react'
import './style.css';


const Temp = () => {
  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search"
            placeholder='search...'
            autoFocus
            id='search' 
            className='searchTerm'/>
            <button className='searchButton' type='button'>Search</button>

        </div>

    </div>
    <article className='widget'></article>
    </>
  )
}

export default Temp