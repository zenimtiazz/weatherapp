// api.openweathermap.org/data/2.5/weather?q=antwerp&appid=5b4da8dc948e3009f9de2efdec3ef3f6
import React, { useState,useEffect } from 'react'
import './style.css';


const Temp = () => {
  const[searchValue,setSearchValue]=useState('antwerp');
  const getWeatherInfo= async()=>{
    try {
      let url= 
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=5b4da8dc948e3009f9de2efdec3ef3f6 `;    
       const res = await fetch(url);
      const data= await res.json();
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, [])
  

  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search"
            placeholder='search...'
            autoFocus
            id='search' 
            className='searchTerm' value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}/>
            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>

        </div>

    </div>
    <article className='widget'>
      <div className='weatherIcon'>
        <i className={'wi wi-day-sunny'}></i>
      </div>
      <div className='weatherInfo'>
        <div className='temperature'>
          <span>25.5&deg;</span>
        </div>
        <div className='descrption'>
          <div className='weatherCondition'>
            Sunny
          </div>
          <div className='place'>Antwerp, Belgium</div>
          </div>
      </div>
      <div className='date'>{ new Date().toLocaleString()}</div>
      {/* our four column section  */}
      <div className='extra-temp'>
        <div className='temp-info-minmax'>
          <div className='two-sided-section'>
            <p><i className={'wi wi-sunset'}></i></p>
            <p className='extra-info-leftside'>19:19 <br /> sunset</p>
          </div>
          <div className='two-sided-section'>
            <p><i className={'wi wi-humidity'}></i></p>
            <p className='extra-info-leftside'>19:19 <br /> Humidity</p>
          </div>
        </div>
        <div className='weather-extra-info'>
        <div className='two-sided-section'>
            <p><i className={'wi wi-rain'}></i></p>
            <p className='extra-info-leftside'>19:19 <br /> Pressure</p>
          </div>
          <div className='two-sided-section'>
            <p><i className={'wi wi-strong-wind'}></i></p>
            <p className='extra-info-leftside'>19:19 <br /> Speed</p>
          </div>
        </div>
      </div>
    </article>
    </>
  )
}

export default Temp