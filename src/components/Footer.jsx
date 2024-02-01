import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column bg-black'>
      <div className='footer d-flex align-items-center justify-content-evenly w-100'>
        <div className="support d-flex flex-column">
          <h3 style={{color:'white'}}>SUPPORT</h3>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Online Help</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Customer Service</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Shipping FAQ</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Shipping FAQ</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Warranty</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Mi Exchange</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Bulk Orders</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>User Guide</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Laptop Drivers</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Mi Screen Protect</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Mi Extended Warranty</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Mi Complete Protect</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Certification</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Service Centre</Link>
        </div>
        <div className="shop d-flex flex-column">
          <h3 style={{color:'white'}}>SHOP & LEARN</h3>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Xiaomi Phones</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Redmi Phones</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>TV's</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Laptops&Tablets</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Audio</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>LifeStyle</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Smart Home</Link>
        </div>        
        <div className="retail d-flex flex-column">
          <h3 style={{color:'white'}}>RETAIL STORE</h3>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Mi Home</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Mi Authorized Store</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Mi Store Franchise</Link>
        </div>   

        <div className="about d-flex flex-column">
          <h3 style={{color:'white'}}>ABOUT US</h3>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Xiaomi</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Privacy Policy</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>User Agreement</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Integrity & Compliance</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>CSR & Disclosures</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>E-Waste Management</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>In The Press</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Trust Center</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Culture</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Smart Phone Quality</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>TV Quality</Link>
          <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Service Quality</Link>
        </div> 
        <div className="contact d-flex flex-column">
          <h2 style={{color:'white'}}>Follow Mi</h2>
          <div className='d-flex gap-3'>
          <i style={{color:'white'}} class="fa-brands fa-square-facebook fa-2x"></i>
          <i style={{color:'white'}} class="fa-brands fa-x-twitter fa-2x"></i>  
          <i style={{color:'white'}} class="fa-brands fa-square-instagram fa-2x"></i>       
           </div>
           <div className='d-flex mt-2'>
          <input type="email" className='form-control' placeholder='enter email address'/>
           </div>
           <div className='d-flex gap-2 mt-3'>
            <div>
              <img src="https://i01.appmifile.com/webfile/globalimg/7/C5413B23-7D21-2A99-0764-F2EE18425936.png" alt="" width={50} />
            </div>
            <p style={{color:'white'}}>Get mi Store App</p>
           </div>

        </div>
      </div>
   <p style={{color:'white'}}>Copyright © 2010 - 2024 Xiaomi. All Rights Reserved</p></div>
  )
}

