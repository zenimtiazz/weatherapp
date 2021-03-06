// api.openweathermap.org/data/2.5/weather?q=antwerp&appid=5b4da8dc948e3009f9de2efdec3ef3f6
import React, { useState,useEffect } from 'react'
import './style.css';
import Weathercard from './weathercard';


const Temp = () => {
  const[searchValue,setSearchValue]=useState('antwerp');
  const[tempInfo,setTempInfo]=useState({});
  const getWeatherInfo= async()=>{
    try {
      let url= 
      `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6b0bb36a65a2ea53bbe36d3ca6f40e8c `;    
       const res = await fetch(url);
      const data= await res.json();
      const{temp,humidity,pressure} = data.main;
      const{main:weathermood}=data.weather[0];
      const{name}=data;
      const{speed}=data.wind;
      const{country,sunset}=data.sys;
const myNewWeatherInfo ={
  temp,
  humidity,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset
}
setTempInfo(myNewWeatherInfo);

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfo();
  });
  

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
    <Weathercard tempInfo={tempInfo} />
    </>
  )
}

export default Temp