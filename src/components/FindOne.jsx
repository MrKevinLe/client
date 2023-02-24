import React from 'react'
import { useEffect, useState } from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import './style3.css';

const FindOne = () => {
    const navigate = useNavigate()

    const [findone, setFindone] = useState("")
    const [ill, setIll] = useState("")
    const [morepics, setMorepics] = useState([])
    const {speciesID}=useParams();
    useEffect(()=>{

        axios.get(`https://www.fishwatch.gov/api/species/${speciesID}`)
            .then(res => {
                console.log(res.data)
                setFindone(res.data[0]);
                setIll(res.data[0]["Species Illustration Photo"])
                setMorepics(res.data[0]["Image Gallery"])
            })
            .catch(err => {
                console.log(err)
                navigate("/error")
            })
    },[speciesID])
  return (
    <div className='container4'>
        <div className='title3'>
        <h1 className='title-fish'>{findone["Species Name"]}</h1>
        </div>
        <br/>
        <div className='fishpic'>
        <img style={{width:'600px'}} src={ill["src"]}></img>
        </div>
        <div className='contents'>
        <h3>Scientific Name: {findone["Scientific Name"]}</h3>
        <h4>Info: {findone["Quote"]}</h4>
        <h4>Fishing Rate: {findone['Fishing Rate']}</h4>
        </div>
        <div className='morepictures'>
            {
                morepics.map((one , i) =>{
                    return<>
                    <br/>
                        <div key={i}>
                        <img style={{width:'400px', borderRadius:'10px'}} src={one.src}></img>
                        </div>
                    <br/>
                    </>
                })

            }
        </div>

    </div>
  )
}

export default FindOne