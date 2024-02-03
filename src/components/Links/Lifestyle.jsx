import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Lifestyle.css'
import Button from 'react-bootstrap/Button';
import p7 from "../Images/p7.webp"

function Lifestyle() {
  return (
    <div className='lifestyleclass'>
        <Carousel data-bs-theme="dark">
          <Carousel.Item className='item'>
            <img
              className="d-block w-100"
              src="https://i03.appmifile.com/693_operator_in/25/09/2023/ae6ed6fdecd72f1335572edd7e9a7f7b.jpg?f=webp"
              alt="First slide"
            />
             <div className='slide-texted'>
<span>Redmi Note 13 Pro 5G</span>
<p>Special Launch Price $16,999</p>
<button>Learn More</button>
  </div>
          </Carousel.Item>
          <Carousel.Item className='item'>
            <img
              className="d-block w-100"
              src="https://i03.appmifile.com/268_operator_in/23/06/2023/b50b27200bccb5c27b2b8311c67bb212.jpg?f=webp"
              alt="Second slide"
            />
              <div className='slide-texted'>
<span style={{color:'white'}}>Redmi Note 13 Pro 5G</span>
<p style={{color:'white'}}>Special Launch Price $16,999</p>
<button>Learn More</button>
  </div>
          </Carousel.Item>
          <Carousel.Item className='item'>
            <img
              className="d-block w-100"
              src="https://i03.appmifile.com/270_operator_in/07/10/2023/eb51a51bcc904972d7a5abd02864a027.jpg?f=webp"
              alt="Second slide"
            />
              <div className='slide-texted'>
<span>Redmi Note 13 Pro 5G</span>
<p>Special Launch Price $16,999</p>
<button>Learn More</button>
  </div>
          </Carousel.Item>
          <Carousel.Item className='item'>
            <img
              className="d-block w-100"
              src="https://i03.appmifile.com/731_operator_in/01/08/2023/3c3230c26d4251048a0917ea059b7738.jpg?f=webp"
              alt="Second slide"
            />
              <div className='slide-texted'>
<span>Redmi Note 13 Pro 5G</span>
<p>Special Launch Price $16,999</p>
<button>Learn More</button>
  </div>
          </Carousel.Item>
        </Carousel>
{/* ----------------------------------------------------------------------------------------------- */}

<div className='lifestyle-text mt-2'>
<div className='lifestyle'>
           <h2>Smart Watch</h2> 
    
</div>     
  <a  href="/wear"><button style={{backgroundColor:'black',marginLeft:'700px'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>

{/* ----------------------------------------------------------------------------------- */}
<div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Watch 3 Active</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/877_item_in/01/08/2023/20ec4e1140ec7d5a25f20797895f70c2.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Watch 2 Lite</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1646731200.255354.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Smart Band Pro</h3>
    <p>Sports Watch</p>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1644208569.07921361.png?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >Smart Watch</span>
   <p>All Products</p>
</div> 
 <a href="/All Products"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>
  {/* --------------------------------------------------------------------------------------- */}
  <div className='lifestyle-text mt-2 p-4'>
<div className='lifestyle1'>
           <h2>Audio</h2> 
    </div>     
  <a  href="/audio"><button style={{backgroundColor:'black',marginLeft:'700px'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>
{/* --------------------------------------------------------------------------------- */}
<div className='imagetexted'>
<div className='textedimage1'>
  <img src={p7} alt="" width={'100%'} /> 
</div>
<div className='textedtext'>
<span>Redmi Buds 4 Active</span>
</div>
<div className='textedbutton d-flex gap-4'>
  <a  href=""><button style={{borderRadius:'6px',width:'150px',height:'50px'}}><span>Buy Now</span></button></a>
  <a style={{textDecoration:'none',color:'white'}} href="">Learn More<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/forward.png" alt="forward"/></a>
</div>

</div>

{/* ------------------------------------------------------------------------------------------------ */}

<div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Watch 3 Active</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/528_item_in/10/06/2023/b6d5a6becd22211b5c5c552288a6b5e1.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Watch 2 Lite</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/9_item_in/01/08/2023/5b55c8858a7f2107e20d448e280e6357.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Smart Band Pro</h3>
    <p>Sports Watch</p>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1579000327.41389918.png?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Smart Band Pro</h3>
    <p>Sports Watch</p>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1617825722.98226831.png?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  </div>
  {/* ---------------------------------------------------------------------------------------------------- */}
  <div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Watch 3 Active</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1598954011.16786635.png?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Watch 2 Lite</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1613844064.93574921.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Smart Band Pro</h3>
    <p>Sports Watch</p>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1657699018.20982385.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >All Audio Products</span>
</div> 
 <a href="/All Products"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>
{/* -------------------------------------------------------------------------------------------------------- */}

<div className='lifestyle-text mt-2 p-4'>
<div className='lifestyle2'>
           <h2>PowerBanks & Chargers</h2> 
    </div>     
  <a  href="/power"><button style={{backgroundColor:'black',marginLeft:'700px'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>
{/* ---------------------------------------------------------------------------------------------- */}
<div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Watch 3 Active</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1581487847.24231539.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Watch 2 Lite</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1631696979.32419876.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Smart Band Pro</h3>
    <p>Sports Watch</p>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1622529749.95166999.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >All PowerBanks</span>
</div> 
 <a href="/All Products"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>
{/* ------------------------------------------------------------------------------------------ */}
<div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi 120 W</h3>
    <p>HyperCharge Adapter</p>

 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1659944014.99991930.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Mi 33W Sonic Charge</h3>
    <p>2.0 Charger</p>

 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1626952357.85696708.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Mi 33W Sonic Charge</h3>
    <p>2.0 Charger</p>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1605851020.43266044.png?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >All Chargers</span>
</div> 
 <a href="/All Products"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>
  {/* -------------------------------------------------------------------------------------------- */}
  <div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Sonic Charge</h3>
    <p>2.0 Cable</p>

 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1681374947.32038137.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Mi USB Type C Cable</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1584347658.51432077.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Mi USB Cable 120cm</h3>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1584347658.51432077.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >All Cables</span>
</div> 
 <a href="/All Products"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>

{/* ------------------------------------------------------------------------------------ */}

<div className='lifestyle-text mt-2 p-4'>
<div className='lifestyle2'>
           <h2>Grooming And Hygiene</h2> 
           <p style={{marginLeft:'65px'}}>Look Good Feel Good</p>
    </div>     
  <a  href=""><button style={{backgroundColor:'black',marginLeft:'700px'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>

       {/* ----------------------------------------------------------------------------------- */}

       <div className="container-fluid d-flex gap-2 p-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Grooming Kit Pro</h3>

 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1662530043.20853301.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Grooming Kit</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i03.appmifile.com/989_item_in/24/04/2023/cc415f4f86f0755be4506285e959f9e5.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Beard Trimmer</h3>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1681292640.42658518.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >All Grooming & Hygiene</span>
</div> 
 <a href="/All Products"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>
  {/* -------------------------------------------------------------------------------------------------- */}

  <div className='lifestyle-text mt-2 p-4'>
<div className='lifestyle2'>
           <h2>Apparel Shoes & More</h2> 
    </div>     
  <a  href=""><button style={{backgroundColor:'black',marginLeft:'700px'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>
{/* --------------------------------------------------------------------------------- */}
<div className="container-fluid d-flex gap-2 p-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Running Shoes</h3>

 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1650346984.74057834.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Redmi Writing Pad</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1665380243.77242135.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Mi Eco Active Tshirt</h3>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1599735892.8346194.png?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >Explore More</span>
</div> 
 <a href="/All Products"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>
  {/* ------------------------------------------------------------------------------------------------- */}
  <div className='lifestyle-text mt-2 p-4'>
<div className='lifestyle2'>
           <h2 style={{marginLeft:'38px'}}>BackPack & More</h2> 
    </div>     
  <a  href=""><button style={{backgroundColor:'black',marginLeft:'700px'}}><span style={{color:'white'}}>View More</span></button></a>
       </div>

{/* ------------------------------------------------------------------------------------------------------ */}

<div className="container-fluid d-flex gap-2 p-2">
<div className='divisions mt-3'>
 <div className="texted">
    <h3>Mi StepOut BackPack</h3>

 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1576490467.46922243.png?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Mi Selfie Stick Tripod</h3>
 </div>
  <div className="btn-bt">
    <Button  variant="dark" size="sm">Buy Now</Button>
    <Button variant="secondary" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1678862266.52391023.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3'>
 <div className="texted">
    <h3>Xiaomi Portable Electric Air</h3>
 </div>
  <div className="btn-bt">
    <Button style={{marginLeft:'50px'}}  variant="dark" size="sm">Learn More</Button>
  </div>
  <img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1647251638.96131748.jpg?f=webp&thumb=1&w=500&q=85" alt="" width={'230px'} />
  </div>
  <div className='divisions mt-3 ms-2'>
<div className="texthead">
   <span >All BackPack & Travel</span>
</div> 
 <a href="/All Products"><img className="arrow" width="50" height="50" src="https://img.icons8.com/ios/50/000000/circled-right-2.png" alt="circled-right-2"/></a>
  </div>
  </div>









    </div>
  )
}

export default Lifestyle