import React from 'react'
import img1 from './images/boxfootball.jpg';

function About() {
  return (
    <div className="container-fluid" id='about' style={{margin: "0rem 0rem", background:'#f2f7f9', color:'black', padding:'2rem'}}>
      <div className="row row1 ">
        <div className="col-md-12 col-lg-6 justify-content-center" style={{ display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.2rem', textAlign:'justify', padding:'1rem 2rem' }}>
         {/*  <div className="row justify-content-center"> */}
            {/* <div className="col-10 col-lg-7 col-md-7 mb-5 mb-md-0 about1"> */}
              
              
                  {/* <h2 style={{textTransform: "uppercase", font:'white'}}>Who We Are</h2> */}
                  <p>SportiLabs is a sports-fitness tech startup with a vision to create the world’s biggest athlete ecosystem while making the world more active. Our AI based innovation leverages Computer Vision to gamify and gratify an athlete's experience by enabling them to track, create and inspire to become physically active. Think of something like a Strava for team sports.</p>
                 {/*  <br />
                    <br /> */}
        </div>
        <div className="col-md-12 col-lg-6" style={{ display:'flex',alignItems:'center', justifyContent:'center', textAlign:'center' }}>
          <img src={img1} className="img-fluid" alt='imageabout' width='70%' style={{ border:'0.4em solid black' }} />
        </div>
      </div>
    </div>
    )
}

export default About
