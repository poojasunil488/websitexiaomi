import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [menu,setMenu] = useState('store');
  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img style={{marginLeft:'50px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png' alt="" width={'40px'} />
  
       </div>
        <ul className='nav-menu'>
            <ul onClick={()=>{setMenu('store')}}><Link style={{textDecoration:'none',color:'black'}} to='/'>Store</Link>
            {menu==='store'?<hr/>:<></>}</ul>
            <ul  onClick={()=>{setMenu('phone')}}><Link style={{textDecoration:'none',color:'black'}} to='/phone'>
              Phone</Link>{menu==='phone'?<hr/>:<></>}
              
              </ul>
            <ul onClick={()=>{setMenu('tv')}}><Link style={{textDecoration:'none',color:'black'}} to='/tv'>TV & Smart Home</Link>{menu==='tv'?<hr/>:<></>}</ul>
            <ul onClick={()=>{setMenu('lap')}}><Link style={{textDecoration:'none',color:'black'}} to='/lap'>Laptop & Tablet</Link></ul>
            <ul onClick={()=>{setMenu('lifestyle')}}><Link style={{textDecoration:'none',color:'black'}} to='/lifestyle'>LifeStyle</Link>{menu==='lifestyle'?<hr/>:<></>}</ul>
        </ul>
        <div className='nav-login'>
        <ul className='nav-menu'>
        <ul onClick={()=>{setMenu('discover')}}><Link style={{textDecoration:'none',color:'black'}} to='/discover'>Discover</Link>{menu==='/discover'?<hr/>:<></>}</ul>
        <ul onClick={()=>{setMenu('support')}}><Link style={{textDecoration:'none',color:'black'}} to='/support'>Support</Link>{menu==='/support'?<hr/>:<></>}</ul>

        </ul>

          <img width="24" height="24" src="https://img.icons8.com/ios/50/search--v1.png" alt="search--v1"/>        
  
       <img width="24" height="24" src="https://img.icons8.com/fluency-systems-regular/48/shopping-cart--v1.png" alt="shopping-cart--v1"/>  
<a href='/loginregister.js'>
          <img width="24" height="24" src="https://img.icons8.com/small/16/gender-neutral-user.png" alt="gender-neutral-user"/>     
  
</a>  
        </div>
    </div>
  )
}
