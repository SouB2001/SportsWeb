import React, {useState} from 'react';
/* import Form from 'react-bootstrap/Form'; */
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';

function Prelaunch() {

    const [formData, setFormData] = useState({
        email: '',
        city: '',
        gender: '',
        age:'',
        /* checkValue:false */
        opt:''
      });

      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox'){
            setFormData({ ...formData, [name]: !(checked) });
        }
        else{
            setFormData({ ...formData, [name]: value });
        }
        
      };
    
      const handleSubmit = async(e) => {
        alert('Thank You for submitting your details');
        e.preventDefault();
        /* console.log(formData); */
        try {
            await addDoc(collection(db, "Athletes"), {
              data: formData  
            });
            //console.log("Document written with ID: ", docAthlete.id);
        } 
        catch (e) {
            console.error("Error adding document: ", e);
        }
      };

    return (
        <div className='text-center justify-content-center' style={{  }}>
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <h1 style={{ fontSize: '1.5rem', color: 'black' }}>Welcome to our Pre-launch Athlete Signup</h1>
            </div>

            {/* <div>
      <Form style={{ border:'solid black 2px', borderRadius:'2rem' }}>
      <Form.Group className="mb-3 col-md-6 col-xs-12 col-sm-12" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

      </div> */}
            <div className='row g-1 d-flex justify-content-center container-fluid' style={{ padding:'1rem' }}>
                <div className="col-md-6 col-xs-12 col-sm-12 text-center justify-content-center" style={{ background: "none", padding: '1rem 1rem' }}>

                    <form className="row g-1 text-center justify-content-center" style={{ textAlign: "center", border: 'solid black 2px', borderRadius: '1rem', padding: '1rem' }} onSubmit={handleSubmit} >
                        <h1 style={{ fontSize: '1.3rem' }}>Please provide us some details...</h1>
                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                                <label for="inputEmail4" className="form-label"
                                    style={{ color: "black", background: "none" }}></label>
                                <input type="email" className="form-control" placeholder="Email.." style={{ border: 'solid black 1px' }} name='email' id="inputEmail4" value={formData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                                <label className="form-label" style={{ color: "black", background: "none" }}></label>
                                <input type="text" className="form-control" placeholder="City" aria-label="City" style={{ border: 'solid black 1px' }} name='city' id="city" value={formData.city} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                                {/*  <label for="inputEmail4" className="form-label"
                                    style={{ color: "black", background: "none" }}></label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email.." style={{ border: 'solid black 1px' }} /> */}

                                <select className="form-select" id="inputGroupSelect04" aria-label="Select" style={{ marginTop:"1.5rem", border: 'solid black 1px' }}  name='gender' value={formData.gender} onChange={handleInputChange} required >
                                    <option value="" selected>Choose Gender...</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                                <label className="form-label" style={{ color: "black", background: "none", }}></label>
                                <input type="text" className="form-control" placeholder="Age (in years)" style={{ border: 'solid black 1px' }} name='age' id="age" value={formData.age} onChange={handleInputChange} />
                            </div>
                        </div>
                        
                       {/*  <div className="form-check justify-content-center col-12" style={{ display:'flex', alignItems:'center', justifyContent:'center', textAlign:'center' }}>
                            <input className="form-check-input justify-content-center" type="checkbox"  id="flexCheckDefault" style={{ border: 'solid black 1px', margin:'1rem 0.2rem 1rem 1rem'  }}  name="checkValue" checked={formData.checkValue} value={formData.checkValue} onChange={handleInputChange} />
                            <label className="form-check-label" for="flexCheckDefault" style={{ padding:'1rem' }}  >
                                Opt-in for updates from our side
                            </label>
                        </div> */}

                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                                

                                <select className="form-select" id="inputGroupSelect04" aria-label="Select" style={{ margin: "1.5rem 0rem", border: 'solid black 1px' }} name='opt' value={formData.opt} onChange={handleInputChange} required >
                                    <option value="" selected> Opt-in for updates from our side</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    
                                </select>
                            </div>
                            
                        </div>



                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-12" >
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </div>

                        <h1 style={{ fontSize: '1.3rem', padding:'1rem' }}>We will keep you updated, as soon as we launch.</h1>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Prelaunch
