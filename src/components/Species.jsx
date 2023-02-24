import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams,useNavigate } from "react-router-dom"

import './style2.css';


const Species = () => {
    const [all , setAll] = useState([])
    const [selected , setSelected] = useState("")
    const nav = useNavigate()

    useEffect(()=>{
        axios.get("https://www.fishwatch.gov/api/species")
        .then(res =>{
            console.log(res.data)
            setAll(res.data)
        })
        .catch(err => console.log(err))
    },[])
    const handleSubmit = (e)=>{
        e.preventDefault();
        nav(`/${selected}`)
      }
  return (
    <div className='container3'>
        <br/>
        <br/>
        <div className='picture'>
        <img style={{width:'300px'}} src={require('./black.png')} />
        </div>
        <div className='top-part'>
        <h1 className='species'>Species</h1>
        </div>
        <br></br>
        <form onSubmit={handleSubmit}>
        <div className='search'>
      <div><input className='input' type="text" value={selected} onChange={e =>setSelected(e.target.value)}/></div>
      <div><input className='button1' type="submit" value="Search"/></div>
        </div>
      </form>
        <br></br>
        <div className='listing'>
        {
        all.map((one , i)=>{
            return(
            <ul>
                <div style={{display:'flex'}}>
                <li><Link to={`/${one["Species Name"]}`}>{one['Species Name']}</Link></li>
                </div>
            </ul>
            )})
        }
        </div>
    </div>
  )
}

export default Species