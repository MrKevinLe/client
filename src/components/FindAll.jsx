import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css';

const FindAll = () => {
    const [findAll , setFindAll] = useState([])
    const [weather, setWeather] = useState(" ")
    const [weather1, setWeather1] = useState(" ")
    const [weather2, setWeather2] = useState(" ")
    const [weather3, setWeather3] = useState(" ")
    const [weather4, setWeather4] = useState(" ")
    const [weathercon, setWeathercon] = useState(" ")
    const [weathercon1, setWeathercon1] = useState(" ")
    const [weathercon2, setWeathercon2] = useState(" ")
    const [weathercon3, setWeathercon3] = useState(" ")
    const [weathercon4, setWeathercon4] = useState(" ")
    const [date, setDate] = useState(" ")
    const [date1, setDate1] = useState(" ")
    const [date2, setDate2] = useState(" ")
    const [date3, setDate3] = useState(" ")
    const [date4, setDate4] = useState(" ")
    useEffect(() => {
        axios.get("http://api.weatherapi.com/v1/forecast.json?key=a7191bf3e25349f8abd193936232302&q=95123&days=5&aqi=no&alerts=no")
            .then(res => {
                console.log(res.data.forecast.forecastday[0])
                setDate(res.data.forecast.forecastday[0])
                setWeather(res.data.forecast.forecastday[0]['day'])
                setWeathercon(res.data.forecast.forecastday[0]['day']['condition'])

                setDate1(res.data.forecast.forecastday[1])
                setWeather1(res.data.forecast.forecastday[1]['day'])
                setWeathercon1(res.data.forecast.forecastday[1]['day']['condition'])

                setDate2(res.data.forecast.forecastday[2])
                setWeather2(res.data.forecast.forecastday[2]['day'])
                setWeathercon2(res.data.forecast.forecastday[2]['day']['condition'])

                setDate3(res.data.forecast.forecastday[3])
                setWeather3(res.data.forecast.forecastday[3]['day'])
                setWeathercon3(res.data.forecast.forecastday[3]['day']['condition'])

                setDate4(res.data.forecast.forecastday[4])
                setWeather4(res.data.forecast.forecastday[4]['day'])
                setWeathercon4(res.data.forecast.forecastday[4]['day']['condition'])

            })
            .catch(err => console.log(err))

        axios.get("http://localhost:8000/api/fish")
            .then(res => {
                console.log(res.data)
                setFindAll(res.data)
            })
            .catch(err => console.log(err))
    }, [])
  return (
    <div className='containter'>
        <br/>
        <br/>
            <div className='weather-title'> 
            <div className='pics'>
            <div><img style={{width:'150px'}} src={require('./rain.png')} /></div>
            <h1 className='title'>Weather</h1>
            <div><img style={{width:'150px'}} src={require('./sunny.png')} /></div>
            </div>
            </div>
            {/* WeatherApi.com expires 3/9/2023 */}
        <div className='weather'>
            {/* -------------weather day 0------------------------ */}
            <div className='weather0'>
            <div className='w-top'>
            <img style={{height:"80px"}} src={weathercon.icon}></img>
            </div>
            <div className='w-mid'>
            <h1>{weather.avgtemp_f} 
            <img style={{width:'40px'}} src={require('./logo.png')} /></h1>
            </div>
            <div className='w-bot'> 
            <h3>{weathercon.text}</h3>
            <h4 style={{color:'black'}}>{date.date}</h4>
            </div>
            </div>
            {/* ---------------weather day 1---------------- */}
            <div className='weather0'>
            <div className='w-top'>
            <img style={{height:"80px"}} src={weathercon1.icon}></img>
            </div>
            <div className='w-mid'>
            <h1>{weather1.avgtemp_f}
            <img style={{width:'40px'}} src={require('./logo.png')} /></h1>
            </div>
            <div className='w-bot'> 
            <h3>{weathercon1.text}</h3>
            <h4 style={{color:'black'}}>{date1.date}</h4>
            </div>
            </div>

            {/* ------------weather day 2------------------- */}

            <div className='weather0'>
            <div className='w-top'>
            <img style={{height:"80px"}} src={weathercon2.icon}></img>
            </div>
            <div className='w-mid'>
            <h1>{weather2.avgtemp_f}
            <img style={{width:'40px'}} src={require('./logo.png')} /></h1>
            </div>
            <div className='w-bot'> 
            <h3>{weathercon2.text}</h3>
            <h4 style={{color:'black'}}>{date2.date}</h4>
            </div>
            </div>
            {/* ---------------weather day 3---------------- */}
            <div className='weather0'>
            <div className='w-top'>
            <img style={{height:"80px"}} src={weathercon3.icon}></img>
            </div>
            <div className='w-mid'>
            <h1>{weather3.avgtemp_f}
            <img style={{width:'40px'}} src={require('./logo.png')} /></h1>
            </div>
            <div className='w-bot'> 
            <h3>{weathercon3.text}</h3>
            <h4 style={{color:'black'}}>{date3.date}</h4>
            </div>
            </div>
            {/* ---------------weather day 4---------------- */}
            <div className='weather0'>
            <div className='w-top'>
            <img style={{height:"80px"}} src={weathercon4.icon}></img>
            </div>
            <div className='w-mid'>
            <h1>{weather4.avgtemp_f}
            <img style={{width:'40px'}} src={require('./logo.png')} /></h1>
            </div>
            <div className='w-bot'> 
            <h3>{weathercon4.text}</h3>
            <h4 style={{color:'black'}}>{date4.date}</h4>
            </div>
            </div>
    </div>
    {/*  end of weather */}
    <br></br>
    <br></br>
    <div className='post-container'>
    {
        findAll.map((one , i) =>{
            return<>
            
    <div className='container2'>
    <div className='post-top'>
        <h3>Location: {one.location}</h3>
    </div>
    <div className='post-mid'>
    <img style={{width:'100%'}} src={one.image}></img>
    </div>
    <div className='post-bot'>
        <div><h3> Species: <Link to={`/${one.species}`}>{one.species}</Link></h3></div>
        <div><h3>Bait: {one.bait}</h3></div>
    </div>
    </div>
            </>
        })
    }

    {/* -- end of post--------------- */}
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    </div>
  )
}

export default FindAll