import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Branding() {
  return (
    <div style={{ textAlign : 'center', height:'80vh', display:'flex', alignItems:'center', justifyContent:"center", flexDirection:'column' }}>
        <h1 style={{ fontSize : '3rem' , padding : '1em', paddingBottom:'0em' }}>Transforming Team Sports with AI:</h1>
        <p style={{ fontSize : '2rem', padding:'1em' }}>Track, Create and Inspire</p>
        <Link to="./Prelaunch.js"><Button variant="dark" style={{borderRadius : '4rem' , fontSize:'1.7rem', padding:'1rem 1rem', margin:'1rem', cursor:'pointer'}}>Pre-launch Athlete Signup</Button></Link>
    </div>
  )
}

export default Branding
