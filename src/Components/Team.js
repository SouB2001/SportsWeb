import React from 'react'
/* import ReactDOM from 'react-dom' */
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/twitter'
import 'react-social-icons/linkedin'

/* import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; */
import arup from './images/Arup.png';
import arko from './images/Arko.png';
import ankesh from './images/Ankesh.png';
import './Teams.css';

/* function Cards( {name, desc, x, lin} ) {
  return (
    <div className=''>
      <Card style={{ width: '18rem' }}>
      <Card.Img className='rounded-circle' variant="top" src="holder.js/100px180" rounded />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <div className="container-fluid" stytle={{ display:'flex', alignItems: 'center', justifyContent:'space-around' }}>
          <Container fluid>
          <Button variant="primary" >{x}</Button> &nbsp;
          <Button variant="primary" >{lin}</Button>
          </Container>
        </div>
      </Card.Body>
      </Card>
    </div>
  )
} */

export default function Team() {
  return (
  <>

    {/* <div id='team' className='container-fluid' style={{ display:'flex', alignItems:'center', justifyContent:'space-around', padding:'1rem' }}>
      <Cards name={"Arko Biswas"} desc={"MBA"} x={"A"} lin={"B"} />
      <Cards />
      <Cards />
    </div> */}

    <div className='teams' id='team' style = {{ padding: '2rem' }} >
      <div className="container-fluid" style={{  }}>
        <div className="intro" style={{ padding: '10px' }}>
          <h2 className="text-center"
            style={{ color: 'black' }}>The Team </h2>
          {/* <p className="text-center"
            style={{ fontSize: '1.5rem', color: 'black' }}>
            The A-Team for our Vision</p> */}
        </div>
        <div className="row people d-flex justify-content-evenly" style={{  }}>
          <div className="col-md-12 col-lg-3 col-xs-12 col-sm-12 item" style={{ paddingBottom:'1.5rem' }}>
            <div className="box bdr" style={{ color: 'black', padding:'1rem' }}><img
              className="rounded-circle founder" src={arup} alt='' />
              <br />
                <br /> 
                  <h3 className="name">Arup Soans</h3>
                  <p className="title">Sales & Strategy, The Network</p>
                  <p className="description">Marketing & Strategy, NYU Alum. Ex-Head of Marketing, FIFA U17 Men's World Cup, AFC, FIFA, MLS. 15+ Yrs working experience in sports industry.</p>
                  {/* <br /> */}
                    {/* <div className="social"><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a><a
                      href="https://twitter.com/ArupSoans?t=DZrJeVPB6bGUI0mC_gyQyw&s=09" target="_blank"><i
                        className="fa fa-twitter"></i></a></div> */}

                  <div className='social'>  <SocialIcon url="https://twitter.com/ArupSoans?t=DZrJeVPB6bGUI0mC_gyQyw&s=09" target="_blank" bgColor="white" fgColor="black" /> <SocialIcon url="https://in.linkedin.com/in/arupsoans" bgColor="white" fgColor="black" target="_blank" /> </div>

                  

              </div>
            </div>
                <div className="col-md-12 col-lg-3 col-xs-12 col-sm-12 item" style={{ paddingBottom:'1.5rem' }}>
                  <div className="box bdr" style={{ color: 'black', padding:'1rem' }}><img
                    className="rounded-circle founder" src={arko} alt='' />
                    <br />
                      <br /> 
                        <h3 className="name">Arko Biswas</h3>
                        <p className="title">El Capitano, The GoGetter</p>
                        <p className="description">Chief enthusiam officer, Generalist, IIM Raipur. Uni Startup World Cup Runners Up 2018, 4.5+ yrs combined experience in startup ecosystem. </p>
                        {/* <br/> */}
                       {/* <div className="social"><a href="https://www.linkedin.com/in/arko25/" target="_blank"><i
                            className="fa fa-linkedin"></i></a><a
                              href="https://twitter.com/ARKO25?t=HBWA8Ob3buNpH_tCPH6KQg&s=09" target="_blank"><i
                                className="fa fa-twitter"></i></a></div> */}

                     <div className='social'>  <SocialIcon url="https://twitter.com/ARKO25?t=HBWA8Ob3buNpH_tCPH6KQg&s=09" target="_blank" bgColor="white" fgColor="black" /><SocialIcon url="https://www.linkedin.com/in/arko25/" bgColor="white" fgColor="black" target="_blank" /> </div>

                    </div>
                  </div>
                      <div className="col-md-12 col-lg-3 col-xs-12 col-sm-12 item" style={{ paddingBottom:'1.5rem' }}>
                        <div className="box bdr" style= {{ color: 'black', padding:'1rem' }}><img
                          className="rounded-circle founder" src={ankesh} alt='' />
                          <br />
                            <br /> 
                              <h3 className="name">Ankesh Saha</h3>
                              <p className="title"> Techie, The Problem Solver</p>
                              <p className="description">Serial Entrepreneur, Product and Tech, NIT Jamshedpur, Entrepreneurship and Product Management. 13+ years as a product builder.</p>
                              {/* <div className="social"><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a><a href="#"
                                target="_blank"><i className="fa fa-twitter"></i></a></div> */}

                              <div className='social'> <SocialIcon url="https://in.linkedin.com/in/ankeshsaha" bgColor="white" fgColor="black" target="_blank" /> </div>

                          </div>
                      </div>
          </div>
      </div>
    </div>
  </>
  )
}
