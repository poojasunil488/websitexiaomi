import React from 'react'
import './Allxiaomiphones.css'



function Allxiaomiphones() {
  return (
    <div className='allredmi'>
<div className='headers'>
    <div className='headlink'>
    <li>Home</li>
    <li>All Products</li>
    <li>Xiaomi Series</li>
    </div>
    <div className='headerall'>
        <span>
        Xiaomi Series
        </span>
        </div>
    <div className='lists'>
        <ul className='dropdown-toggle'>Categories</ul>
        <li>Relevance</li>
        <li>New</li>
        <li>Price</li>
        <li>On Sale</li>
        <li>In Stock</li>
    </div>
</div>
{/* ---------------------------------------------------- */}

<div className='phones-div d-flex p-2'>
<div className='ph-div1 mt-3'>
<div className='ph-text'>
    <span>Xiaomi 13 Pro</span> 
</div>
<div className='ph-button d-flex gap-2'>
    <button style={{color:'grey',border:'none'}}>Out Of Stock</button>
    <button style={{color:'white',borderRadius:'1px'}}><span style={{color:'black'}}>Learn More</span></button>
</div>
<div className='ph-image'>
    <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677241587.64975684.jpg?f=webp" alt="" width={'200px'} height={'250px'} />
</div>
</div>
<div className='ph-div1 mt-3'>
<div className='ph-text1'>
    <span>Mi 11X Pro 5G</span> 
</div>
<div className='ph-button1 d-flex gap-2'>
    <button style={{color:'grey',border:'none'}}>Out Of Stock</button>
    <button style={{color:'white',borderRadius:'1px'}}><span style={{color:'black'}}>Learn More</span></button>
</div>
<div className='ph-image'>
    <img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1619082954.56137662.png?f=webp" alt="" width={'200px'} height={'250px'} />
</div>
</div>
</div>

</div>
  )
}

export default Allxiaomiphones