import React, {useState} from 'react';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';

/* import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'; */

/* function Cbanner() {
    return (
        <h1 style={{ fontSize: '1.5rem' }}>Contact Us</h1>

    )
}

function Cform() {
    return (
        <Form>
            <Form.Group classNameName="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text classNameName="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group classNameName="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                />
            </FloatingLabel>
            <Form.Group classNameName="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Receive Updates?" />
            </Form.Group>
            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
    );
} */



function Ccc() {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname:'',
        email: '',
        contact: '',
        comment:''
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async(e) => {
        alert('Thank You for contacting us');
        e.preventDefault();

        try {
            await addDoc(collection(db, "Contact_Form"), {
              data: formData  
            });
            
        } 
        catch (e) {
            console.error("Error adding document: ", e);
        }
        
      };


    return (
        <div className="contactus" style={{padding: "2rem"}}>
            <div className="row g-1 d-flex justify-content-center" style={{background: "none"}}>
                <div className="col-md-6 col-xs-6 col-sm-6" style={{background: "none", alignItems:'center'}}>
                    <div className="contact" id="contact" style={{padding: "1rem", fontSize: "2rem", alignItems:'center', textAlign:'center'}}>Contact Us</div>
                    <div style={{padding: '1rem', fontSize: "1rem", background: "none", textAlign: "center"}}><a
                        style={{color: "black"}} href="mailto:arko.biswas@sportifan.com">arko.biswas@sportifan.com</a>
                    </div>
                </div>
                <div className="col-md-6 col-xs-6 col-sm-6" style={{background: "none", border:'solid black 2px', padding:'1rem 1rem'}}>
                    <form className="row g-1" style={{textAlign: "center", border:'black'}} onSubmit={handleSubmit} >
                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-md-5 col-xs-12 col-sm-6" >
                                <label className="form-label" style={{color: "black", textAlign: "left", background: "none"}}></label>
                                <input type="text" className="form-control" placeholder="First Name" aria-label="First name" style={{ border:'solid black 1px' }} name='firstname' id='firstname' value={formData.firstname} onChange={handleInputChange} required />
                            </div>
                            <div className="col-md-5 col-xs-12 col-sm-6" >
                                <label className="form-label" style={{color: "black", background: "none"}}></label>
                                <input type="text" className="form-control" placeholder="Last Name" aria-label="Last name" style={{ border:'solid black 1px' }} name='lastname' id='lastname' value={formData.lastname} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                                <label for="inputEmail4" className="form-label"
                                    style={{color: "black" , background: "none"}}></label>
                                <input type="email" className="form-control" placeholder="Email.." style={{ border:'solid black 1px' }} name='email' id="inputEmail4" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                                <label className="form-label" style={{color: "black", background: "none", }}></label>
                                <input type="tel" className="form-control"  placeholder="Phone/Mobile" style={{ border:'solid black 1px' }}  name='contact' id="inputmobile4" pattern="[0-9]{10,16}"  value={formData.contact} onChange={handleInputChange} />
                            </div>
                        </div>
                        {/* <!--<div className="row g-1 d-flex justify-content-center" style="background: none;">

                        </div>--> */}

                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-md-10 col-xs-12 col-sm-12" >
                                <label for="floatingTextarea2" style={{color: "black", background: "none"}}></label>
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                    style={{height: "100px", border:'solid black 1px'}} name='comment' value={formData.comment} onChange={handleInputChange} required ></textarea>
                            </div>
                        </div>

                        {/* !--< className="row g-3 d-flex justify-content-center">
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck">
                                        <label className="form-check-label" for="gridCheck" style="color: white;">
                                            Agree to our Terms and Conditions
                                        </label>
                                </div>
                            </div> */}
                            <div className="row g-1 d-flex justify-content-center" >
                                <div className="col-12" >
                                    <button type="submit" className="btn btn-dark">Submit</button>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default function Contact() {
    return (
        <div classNameName='row' style={{ backgroundColor:'#f2f7f9', marginBottom: "0px" }} >
            {/* <Cbanner />
            <Cform /> */}
            <Ccc />
        </div>
    )
}
