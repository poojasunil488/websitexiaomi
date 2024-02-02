import React from 'react';
import './Support.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import p10 from '../Images/p10.png'
import p11 from '../Images/p11.png'
import p12 from '../Images/p12.png'
import p13 from '../Images/p13.png'


function Support() {
  return (
    <div className='supportpage'>
         <div className="carousal ">
            <Carousel>
             <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/892_operator_in/25/07/2023/ef3d817e3cb449619e2787722708836a.jpg?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      <Carousel.Item>
             <img
             className="p1 d-block w-100"
             src='https://i03.appmifile.com/715_operator_in/27/07/2023/fa1c8610ec41707ad8390f03b4522c91.jpg?f=webp'
             alt="First slide"
             interval = {1000}
           />
      </Carousel.Item>
      </Carousel>
      </div>
      {/* --------------------------------------------------------------------------------------- */}

      <div className='support-text'>
<div className="support p-5">
         <h2>Xiaomi Support</h2> 
         </div>      
 </div>
 
 {/* ---------------------------------------------------------------------------------- */}
 <div className='block2 d-flex gap-2'>
    <Card  style={{ width: '35rem',height:'15rem'}}>
          <Card.Body className='sizetext'>
         <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'25px'}} href="">Chat Now(Hindi/English) </a><img  src="https://i03.appmifile.com/789_operator_in/19/09/2023/dc4ff90368ef3046c01214cbee6e7fc6!320x320.png" alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        <Card  style={{ width: '35rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'25px',fontWeight:'bold'}} href="">Online Help</a><img  src="https://i03.appmifile.com/877_operator_in/19/09/2023/9b41991a11ae0f9aa991fea8b9ceccff!320x320.png" alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        
 </div>
 <div className='block2 d-flex gap-2 p-1'>
    <Card  style={{ width: '35rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'25px',fontWeight:'bold'}} href="">Email Us</a><img  src="https://i03.appmifile.com/966_operator_in/19/09/2023/abb318c0cfc036f5ea58a544a9c624a1!320x320.png" alt="" width={'75px'} height={'75px'} />

          </Card.Body>
        </Card>
        <Card  style={{ width: '35rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'25px',fontWeight:'bold'}} href="">Pick Mi</a><img  src="https://i03.appmifile.com/987_operator_in/19/09/2023/452af2df42fb236b208f67674507a514!320x320.png" alt="" width={'75px'} height={'75px'} />

          </Card.Body>
        </Card>
        
 </div>
 {/* -------------------------------------------------------------------------------------------------------- */}

<div className='div-8'>
<div className='text-8'>
  <span>Trending Topics</span>
  
</div></div>
{/* ----------------------------------------------------------------------------------------------------- */}
<div className='block2 d-flex gap-2'>
    <Card  style={{ width: '20rem',height:'15rem'}}>
          <Card.Body className='sizetext'>
         <a className='size' style={{textDecoration:'none',marginLeft:'10px',color:'black',fontSize:'25px',marginTop:'-100px'}} href="">How To Update The Phone</a><img  src="https://i03.appmifile.com/789_operator_in/19/09/2023/dc4ff90368ef3046c01214cbee6e7fc6!320x320.png" alt="" width={'15px'} height={'15px'} />
          </Card.Body>
        </Card>
        <Card  style={{ width: '20rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'10px',color:'black',fontSize:'25px',marginTop:'-100px'}} href="">How To Create Mi Account</a><img  src="https://i03.appmifile.com/877_operator_in/19/09/2023/9b41991a11ae0f9aa991fea8b9ceccff!320x320.png" alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        <Card  style={{ width: '20rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'10px',color:'black',fontSize:'25px',marginTop:'-100px'}} href="">How To Update/Reset TV</a><img  src="https://i03.appmifile.com/877_operator_in/19/09/2023/9b41991a11ae0f9aa991fea8b9ceccff!320x320.png" alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        <Card  style={{ width: '20rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'10px',color:'black',fontSize:'25px',marginTop:'-100px'}} href="">How To Track Order</a><img  src="https://i03.appmifile.com/877_operator_in/19/09/2023/9b41991a11ae0f9aa991fea8b9ceccff!320x320.png" alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        
 </div>

 <div className='block2 d-flex gap-2'>
    <Card  style={{ width: '20rem',height:'15rem'}}>
          <Card.Body className='sizetext'>
         <a className='size' style={{textDecoration:'none',marginLeft:'10px',color:'black',fontSize:'25px',marginTop:'-100px'}} href="">How To Connect 5G Network</a><img  src="https://i03.appmifile.com/789_operator_in/19/09/2023/dc4ff90368ef3046c01214cbee6e7fc6!320x320.png" alt="" width={'15px'} height={'15px'} />
          </Card.Body>
        </Card>
        <Card  style={{ width: '20rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'10px',color:'black',fontSize:'25px',marginTop:'-100px'}} href="">No Sound On TV Speaker</a><img  src="https://i03.appmifile.com/877_operator_in/19/09/2023/9b41991a11ae0f9aa991fea8b9ceccff!320x320.png" alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        <Card  style={{ width: '20rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'10px',color:'black',fontSize:'25px',marginTop:'-100px'}} href="">Lines On TV Display</a><img  src="https://i03.appmifile.com/877_operator_in/19/09/2023/9b41991a11ae0f9aa991fea8b9ceccff!320x320.png" alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        <Card  style={{ width: '20rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'10px',color:'black',fontSize:'25px',marginTop:'-100px'}} href="">MIUI Links</a><img  src="https://i03.appmifile.com/877_operator_in/19/09/2023/9b41991a11ae0f9aa991fea8b9ceccff!320x320.png" alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        
 </div>
 {/* ----------------------------------------------------------------------------------------- */}
<div style={{height:'80px'}} className='emptydiv'>

</div>
{/* ------------------------------------------------------------------------------------------ */}

<div className='block2 d-flex gap-2'>
<Card  style={{ width: '80rem',height:'9rem'}}>
          <Card.Body className='sizetext'>
         <a className='size' style={{textDecoration:'none',marginLeft:'100px',color:'black',fontSize:'25px',marginTop:'-50px'}} href="">Grievance-Three Level Escalation Matrix</a><img style={{marginLeft:'650px',marginTop:'-85px'}}  src="https://i03.appmifile.com/183_operator_in/10/07/2023/d407821a2b9ddbd63d73722e81e89f5c!320x320.jpg" alt="" width={'140px'} height={'140px'} />
          </Card.Body>
        </Card>
</div>
{/* ------------------------------------------------------------------------------------------------ */}
<div className='block2 d-flex gap-2'>
    <Card  style={{ width: '35rem',height:'15rem'}}>
          <Card.Body className='sizetext'>
         <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'25px'}} href="">Video Assistance</a><img  src={p10} alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        <Card  style={{ width: '35rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'25px',fontWeight:'bold'}} href="">Service Center</a><img  src={p11} alt="" width={'75px'} height={'75px'} />
          </Card.Body>
        </Card>
        
 </div>
 <div className='block2 d-flex gap-2 p-1'>
    <Card  style={{ width: '35rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'25px',fontWeight:'bold'}} href="">Contact Us</a><img  src={p12} alt="" width={'75px'} height={'75px'} />

          </Card.Body>
        </Card>
        <Card  style={{ width: '35rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'25px',fontWeight:'bold'}} href="">Terms & Policy</a><img  src={p13} alt="" width={'75px'} height={'75px'} />

          </Card.Body>
        </Card>
        
 </div>







    </div>
  )
}

export default Support