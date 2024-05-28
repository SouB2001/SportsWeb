import React, {useState} from 'react';
import overview from './images/Investor Overview 2.png';
import './Investor.css';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
/* import $ from 'jquery'; */


/* function disable(){
    $('#inputGroupSelect04').on('change', function(){
        if (parseInt(this.value, 10) === 3){
          $('#textP').prop('disabled', false)}
        else{
          $('#textP').prop('disabled', true)}
      })
      
      $('#inputGroupSelect04').change()
} */

function Investor() {

   /*  const defal = 'Do you want our pitch deck?' */

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        select: 'Do you want our pitch deck?',
        comment:''
    });

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        alert('Thank You for submitting your details');
        e.preventDefault();
        /* console.log(e.target.name.value);
        console.log(e.target.select.value); */

        try {
            await addDoc(collection(db, "Investors"), {
              data: formData  
            });
            //console.log("Document written with ID: ", docRef.id);
        } 
        catch (e) {
            console.error("Error adding document: ", e);
        }
    };

  return (
    
    <div style={{ maxWidth:'100%', minHeight:'80vh' }}>
      <div style={{ textAlign:'center', padding:'2rem 0rem' }}>
        <h1 style={{ fontSize:'1.5rem', color:'black', paddingBottom:'2rem' }}>Welcome to the Investor's Corner</h1>

        <h1 style={{ fontSize:'1.5rem', color:'blue' }}>Opportunity Overview!</h1>

        <img className='overview' src={overview} alt='Opportunity Overview' width='70%' style={{ margin:'2rem 1rem' }}  />

        <h1 style={{ fontSize:'1.3rem', color:'blue', padding:'1.5rem' }}>Join us to build the world's biggest network of amateur athletes!</h1>
      </div>

      <div className='row g-1 d-flex justify-content-center container-fluid' style={{ padding:'1.5rem 1rem' }}>
                <div className="col-md-6 col-xs-12 col-sm-12 text-center justify-content-center" style={{ background: "none", padding: '1rem ' }}>

                    <form className="row g-1 text-center justify-content-center" style={{ textAlign: "center", border: 'solid black 2px', borderRadius: '1rem', padding: '1rem' }}  onSubmit={handleSubmit} >
                        <h1 style={{ fontSize: '1.3rem' }}>Please share your details</h1>
                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                            <label className="form-label" style={{color: "black", textAlign: "left", background: "none"}}></label>
                                <input type="text" className="form-control" placeholder="Full Name (mandatory)" aria-label="Full name" style={{ border:'solid black 1px' }} name='name' id='name' value={formData.name} onChange={handleInputChange} required />
                            </div>
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                            <label htmlFor="inputEmail4" className="form-label" style={{ color: "black", background: "none" }}></label>
                            <input type="email" className="form-control"  placeholder="Work/Personal Email (mandatory)" style={{ border: 'solid black 1px' }} name='email' id="inputEmail4" value={formData.email} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                            <label className="form-label" style={{color: "black", background: "none", }}></label>
                                <input type="tel" className="form-control" name='contact' id="inputmobile4" placeholder="Contact No. (optional)" style={{ border:'solid black 1px' }} pattern="[0-9]{10,16}" value={formData.contact} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="row g-1 d-flex justify-content-center" >
                            <div className="col-md-5 col-xs-12 col-sm-12" >
                                <select className="form-select" id="inputGroupSelect04" name='select' aria-label="Select" /* defaultValue={defal} */  style={{ marginTop:"1.5rem", border:'solid black 1px' }} value={formData.select} onChange={handleInputChange} required /* onFocus={(e) => e.target.classList.add('focused')} onBlur={(e) => e.target.classList.remove('focused')} onMouseDown={(e) => e.preventDefault()} */>
                                    <option value="" >Do you want our pitch deck?</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Other">Other (please comment)</option>
                                </select>
                            </div>

                            <div className="col-md-5 col-xs-12 col-sm-12" >
                            <label className="form-label" id='textP' style={{color: "black", textAlign: "left", background: "none"}}></label>
                                <input type="text" className="form-control" placeholder="Comment please" aria-label="Comment if option selected is other" style={{  background:'none', border:'solid black 1px' }} name='comment' id='comment' value={formData.comment} onChange={handleInputChange} />
                            </div>
                        </div>
                        

                        <div className="row g-1 d-flex justify-content-center" style={{ padding:'1rem' }} >
                            <div className="col-12" >
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </div>

                        <h1 style={{ fontSize: '1.2rem', padding:'1rem' }}>We will email you with more information and updates about us regularly.</h1>
                    </form>
                </div>
        </div>
    </div>
    
  )
}

export default Investor;
