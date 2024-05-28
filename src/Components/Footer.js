import React from 'react';
import { Link } from "react-router-dom"; 
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'
import 'react-social-icons/instagram'


//Link to Investors

function Footer1() {
  return (
    
    <div style={{padding: "1rem", background: "none", textAlign: "center"}}>
      <Link style={{color: "white", fontSize:'1.1rem', textDecoration: 'none'}} to="./Investor.js">Are You An Investor? <span style={{color:'rgb(30, 181, 189)'}}><b><u>Click Here</u></b></span> To Visit Our Investor's Corner </Link>
    </div>
    
  )
}

//Social Icons

function Footer2() {
  return (
    <>
    <div className="foot text-center" style={{ padding:'1rem' }}>

        <div><h2 style={{color: "white", fontSize:'1.1rem', textDecoration: 'none'}} >Follow Us On</h2> </div>

         <div className='footicon' style={{ paddingBottom:'1rem', paddingTop:'0.5rem' }} > <SocialIcon url="https://twitter.com/sportifan?lang=en" bgColor="black" fgColor="white"  target="_blank" style={{ pointerEvents:'none' }} />  <SocialIcon url="https://www.linkedin.com/company/sportifanventures/" bgColor="black" fgColor="white"  target="_blank" style={{ pointerEvents:'none' }} />  <SocialIcon url="https://www.instagram.com/sportifan/" bgColor="black" fgColor="white"  target="_blank" style={{ pointerEvents:'none' }} />
         </div>

        <footer style={{ paddingBottom:'2rem', paddingTop:'1rem' }}>
            Copyright &copy; Sportifan Technologies And Research Labs Pvt Ltd | All Rights Reserved
        </footer>
    </div>
    </>
  )
}


//Export component

export default function Footer(){
  return(
    <div style={{ marginTop:'0px', color: "white", textAlign:'center', backgroundColor:'black', padding:"2rem 0rem"/* , borderTopLeftRadius:'1.5rem', borderTopRightRadius:'1.5rem' */ }}>
      <Footer1 />
      <Footer2 />
    </div>
  )
}
