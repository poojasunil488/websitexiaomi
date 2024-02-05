import React from 'react'
import './redmi.css';
import Card from 'react-bootstrap/Card';


function Redmi() {


  return (
    <div className='subredmi'> 
    <div className='head-1 d-flex'>
<div className='red-text'>
    <span>Redmi Note 13 Pro 5G</span>
    
</div>
<div className='red-link d-flex gap-3'>
    <a href=''>
            <li>Overview</li>
        
    </a>  
    <a href=''>
          <li>Specs</li>
        
    </a>   
    <a href=''>
         <li>Review</li>
        
    </a> 
    <a href=''>
           <li>FAQ</li>
        
    </a>  
    <div className='red-btn'>
<button style={{backgroundColor:'black',marginTop:'15px'}}><span style={{color:'white'}}>Buy Now</span></button>
</div>
</div>  
    </div>
    {/* ------------------------------------------------------------------------------------------ */}
<div className='red-text-img'>
<img src='https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-13-pro-5g/pc/170929613190520ff74a2aa6514bf213.png?f=webp' alt='img' width={'100%'}/>
<div className='redmi-text'>
<img  src='https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-13-pro-5g/pc/915d4386819e14bebd4f82ed82f2ef23.png?f=webp' alt='img' width={'350px'}/>
<p style={{fontSize:'25px'}}>Super Power.SuperNote.</p>
<h6 style={{marginTop:'-20px'}}>From $29000</h6>

</div>
</div>
 
 {/* ------------------------------------------------------------------------------- */}

 <div className='item5 d-flex'>
   <div className='item4'>
     <Card className='cards' style={{ width: '28rem',height:'26rem',marginLeft:'500px',marginTop:'45px',marginBottom:'30px'}}>
          <Card.Img variant="top" src="https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-13-pro-5g/pc/4481966c4f0482fa41b5057b81fc064d.png?f=webp" />
            <Card.Body className='titile'>
              <h5  style={{marginTop:'-52px',fontSize:'30px',color:'#07938d',marginLeft:'-252px'}}>Ultra Hi Res</h5>
              <h5 style={{marginTop:'-8px',fontSize:'30px',color:'#43c5b3',marginLeft:'-195px'}}>200 MP Camera</h5>
              <p style={{marginTop:'4px',fontSize:'20px',marginLeft:'-240px'}}>In-Sensor 4X Zoom</p>
              <p style={{marginTop:'-15px',fontSize:'25px',marginLeft:'-322px'}}>OIS+EIS</p>
            </Card.Body>
        </Card>
   </div>
   <div className='item4'>
    
   </div> 
 </div>
 {/* -------------------------------------------------------------------------------- */}
<div className='item6 p-5'>
<iframe style={{marginLeft:'300px'}}  width="914" height="514" src="https://www.youtube.com/embed/pLqd8O5Pws8" a title="Introducing Xiaomi 12T Pro | Xiaomi 12T Series"  frameborder="0" allow="accelerometer; autoplay=5; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
</div>



















    </div>
  )
  
}


export default Redmi