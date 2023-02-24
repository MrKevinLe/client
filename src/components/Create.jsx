import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import './style2.css';


const Create = () => {
  const [location , setLocation] = useState("");
  const [image , setImage] = useState("");
  const [species , setSpecies] = useState("");
  const [bait , setBait] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const newPost = {
        location: location, image: image, species: species, bait: bait
    }
    axios.post("http://localhost:8000/api/new", newPost)
        .then(res => {
            console.log(res.data)
            navigate("/")
        })
        .catch(err => {
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);

        })
}
  return (
    <div className='container'>
        <div className='form'> 
        {errors.map((err, index) => <p style={{ color: "red" }} key={index}>{err}</p>)}
        <div className='form-title'>
        <h1>Share Catch !</h1>
        </div>
        <div className='form-body'>
            <form onSubmit={submitHandler} >
                <div className='inputs'>
                <div><h2 style={{fontSize:'1.7em'}}>Location :<input className='input' type="text" value={location} onChange={e => setLocation(e.target.value)}></input></h2></div>
                <div><h2 style={{fontSize:'1.7em'}}>Image :<input className='input' type="text" value={image} onChange={e => setImage(e.target.value)}></input></h2></div>
                <div><h2 style={{fontSize:'1.7em'}}>Species :<input className='input' type="text" value={species} onChange={e => setSpecies(e.target.value)}></input></h2></div>
                <div><h2 style={{fontSize:'1.7em'}}>Bait :<input className='input' type="text" value={bait} onChange={e => setBait(e.target.value)}></input></h2></div>
                </div>
                <br/>
                <button className='button1' type='submt'> Post</button>
            </form>
            <br/>
            <div className='space'> 
            <img style={{width:'500px',position:'relative',bottom:'80px'}} src={require('./space.png')} />
            </div>

        </div>

        </div>
      
    </div>
  )
}

export default Create