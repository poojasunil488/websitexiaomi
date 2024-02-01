import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css"
import './shopstyle.css';
import { Col } from 'react-bootstrap';
import p1 from '../components/Images/p1.webp'
import p2 from '../components/Images/p2.webp'
import p3 from '../components/Images/p3jpg.jpg'
import p4 from '../components/Images/p4.png'
import p5 from '../components/Images/p5.png'
import p6 from '../components/Images/p6.png'


function Shop(){
  return (
    <>
  
  {/* Image Slider */}
  <div className='shop'>
  <Carousel>
      <Carousel.Item>
        
             <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/778_operator_in/22/01/2024/26edffb39ac6959159a75b4c4633c084.jpg?f=webp"
             alt="First slide"
             interval = {1000}
           />

         
      </Carousel.Item>
      <Carousel.Item>
      <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/710_operator_in/31/01/2024/00de5cf01449691ae2bf82285fc061c0.jpg?f=webp"
             alt="First slide"
             interval = {1000}

           />
      </Carousel.Item>
      <Carousel.Item>
      <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/105_operator_in/01/02/2024/f57da6947dcc800abc199576667a68c1.jpg?f=webp"
             alt="First slide"
             interval = {1000}

           />
      </Carousel.Item>
      <Carousel.Item>
      <img
             className="p1 d-block w-100"
             src="https://i03.appmifile.com/763_operator_in/22/01/2024/36e78d01f45e0735e330c423745a8321.jpg?f=webp"
             alt="First slide"
             interval = {1000}

           />
      </Carousel.Item>
    </Carousel>
    </div>
  

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

    {/* Image section */}











    </div>
    </>
  )
};

export default Shop