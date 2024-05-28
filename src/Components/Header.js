import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo1.png';
//import Form from 'react-bootstrap/Form';
//import NavDropdown from 'react-bootstrap/NavDropdown';

let headStyle = {
    display:"flex",
    alignItems:"center",
    justifyContent:'center'
}

const linkStyle = {
    margin: "0.5rem",
    textDecoration: "none",
    color: 'black'
  };

export default function Header() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Link to="/"> <img src={logo} alt='logo' width='300em' /> </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className='nav-Icons' style={headStyle}>
                            <Link to="/" style={linkStyle}>Home</Link>
                            <Nav.Link href="#about" style={linkStyle}>About</Nav.Link>
                            <Link to="./Blogs.js" style={linkStyle}>Blogs</Link>
                            <Nav.Link href="#team" style={linkStyle}>Teams</Nav.Link>
                            
                            </div>
                            
                        </Nav>
                        {/* <Form className="d-flex" >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-dark" style={{ borderRadius:'2rem' }}>Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                    <Link to="./Investor.js"><Button variant="outline-dark" style={{borderRadius : '2rem', fontSize:'1.2rem', margin:'1rem 0rem'/* , display:'flex', alignItems:'center',justifyContent:'center', textDecoration:'none' */}}>Investor Signup</Button></Link>
                </Container>
            </Navbar>
        </div>
    );
}
