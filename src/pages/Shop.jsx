import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"
import './shopstyle.css';
import Card from 'react-bootstrap/Card';
import p1 from '../components/Images/p1.webp'
import p2 from '../components/Images/p2.webp'
import p3 from '../components/Images/p3jpg.jpg'


function Shop(){
  return (
    <>
  
  {/* Image Slider */}
  <div className='shop'>
  <Carousel className='carousel'>
      <Carousel.Item className='item'>
        
             <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/778_operator_in/22/01/2024/26edffb39ac6959159a75b4c4633c084.jpg?f=webp"
             alt="First slide"
             interval = {1000}
           />

<div className='slide-texted'>
<span>Redmi Note 13 Pro 5G</span>
<p>Special Launch Price $16,999</p>
<a href='/redmiproduct'>
  <button>Learn More</button>
  
</a>  </div>
      </Carousel.Item>
      <Carousel.Item className='item'>
      <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/710_operator_in/31/01/2024/00de5cf01449691ae2bf82285fc061c0.jpg?f=webp"
             alt="First slide"
             interval = {1000}

           />
            <div className='slide-texted'>
<span>Redmi Note 13 Pro 5G</span>
<p>Special Launch Price $16,999</p>
<a href='/redmiproduct'>
  <button>Learn More</button>
  
</a>  </div>
      </Carousel.Item>
      <Carousel.Item className='item'>
      <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/105_operator_in/01/02/2024/f57da6947dcc800abc199576667a68c1.jpg?f=webp"
             alt="First slide"
             interval = {1000}

           />
           <div className='slide-texted'>
<span>Redmi Note 13 Pro 5G</span>
<p>Special Launch Price $16,999</p>
<a href='/redmiproduct'>
  <button>Learn More</button>
  
</a>  </div>
      </Carousel.Item>
      
      <Carousel.Item className='item'>
      <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/763_operator_in/22/01/2024/36e78d01f45e0735e330c423745a8321.jpg?f=webp"
             alt="First slide"
             interval = {1000}

           />
            <div className='slide-texted'>
<span>Redmi Note 13 Pro 5G</span>
<p>Special Launch Price $16,999</p>

<a href='/redmiproduct'>
  <button>Learn More</button> 
</a>  
</div>
      </Carousel.Item>
    </Carousel>
  

    {/* Image Division */}

<div className='container-fluid d-flex gap-3'>
  <div className='divs mt-3'>
<div className='divs-image-1 p-3'>
<a href='/offer'>
    <img src={p1} alt="" width={'500px'} height={'500px'}/></a></div>  
  <div className='divs-text-1'>
    <span>Offers On Smart TV's</span>
    <p>Up To 60% Off</p>
  </div>
  <div className='divs-link-1'>
   <a href="/cart">Shop Now<img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/forward--v1.png" alt="forward--v1"/></a>
  </div>
  </div>
  <div className='divs mt-3'>
<div className='divs-image-2 p-3'>
    <img src={p2} alt="" height={'500px'} width={'400px'} />
</div> 
<div className='divs-text-2'>
  <span>Laptops And Tablets</span>
  
</div> 
 <div className='divs-link-2'>
<a href="">Buy Now<img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/forward--v1.png" alt="forward--v1"/></a>
 </div>
 </div>
  <div className='divs mt-3'>
  <div className='divs-image-2'>
    <img src={p3} alt="" height={'500px'} width={'400px'} />
</div> 
<div className='divs-text-3'>
  <span>Xiaomi Beard Trimmer 2C</span>
  
</div> 
 <div className='divs-link-3'>
<a href="">Buy Now<img width="20" height="20" src="https://img.icons8.com/ios/50/FFFFFF/forward--v1.png" alt="forward--v1"/></a>
 </div>
  </div>
  </div>
{/* Image section */}
<div className='block2 d-flex gap-2 p-2'>
    <Card  style={{ width: '40rem',height:'25rem'}}>
          <Card.Body className='sizetext'>
         <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'55px'}} href="">Xiaomi Care </a>
         <div className='three-logo d-flex'>
<img style={{marginTop:'100px',marginLeft:'-350px'}} src="https://i03.appmifile.com/48_operator_in/17/11/2022/786ada679e2e325724eabe2876999875!96x96.png" alt="" />
<img style={{marginTop:'100px',marginLeft:'-195px'}} src="https://i03.appmifile.com/101_operator_in/17/11/2022/0f88264f22456edc80f4ddbbab017d9a!96x96.png" alt="" />


         </div>
          </Card.Body>
        </Card>
        <Card  style={{ width: '35rem',height:'15rem'}}>
          <Card.Body>
          <a className='size' style={{textDecoration:'none',marginLeft:'140px',color:'black',fontSize:'25px',fontWeight:'bold'}} href="">Service Centers</a>
          </Card.Body>
        </Card>
        
 </div>









    </div>
    </>
  )
};

export default Shop