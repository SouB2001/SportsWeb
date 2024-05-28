import React from 'react'
import Container from 'react-bootstrap/Container';

function PromoVideo() {
  return (
    <div className='py-3' style={{textAlign:'center', justifyContent:'center'}}>
        <Container>
        <div class="ratio ratio-16x9">
          <iframe src="https://www.youtube.com/embed/oyJx01mYIjI?rel=0" title="YouTube video" allowFullScreen></iframe>
        </div>
        </Container>
    </div>
  )
}

export default function Body(){
  return(
    <>
      <PromoVideo />
    </>
  )
}
