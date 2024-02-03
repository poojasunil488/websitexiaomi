import React from 'react'
import './redmi.css';

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
<div class="item4">
        <div class="card"></div>
        <div class="shadow"></div>
    </div>

























    </div>
  )
}

export default Redmi