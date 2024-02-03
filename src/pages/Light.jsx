import React from 'react'
import './light.css'
import Button from 'react-bootstrap/Button';


function Light() {
  return (
    <div className='lightpage'>
    <div className='headers'>
<div className='headlink'>
<li>Home</li>
<li>All Products</li>
<li>Xiaomi Series</li>
</div>
<div className='headerall'>
    <span>
    Smart Lights
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
{/* ------------------------------------------------------------------------- */}
<div className="container-fluid d-flex gap-2">
<div className='divisions mt-3'>
<div className="texted">
<h3>Xiaomi Home Security</h3>
<p>Camera</p>
</div>
<div className="btn-bt">
<Button  variant="dark" size="sm">Buy Now</Button>
<Button variant="secondary" size="sm">Learn More</Button>
</div>
<img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1616606687.68573462.jpg?width=400&height=400" alt="" width={'250px'} />
</div>
<div className='divisions mt-3'>
<div className="texted">
<h3>Xiaomi Home Security</h3>
<p>Camera</p>
</div>
<div className="btn-bt">
<Button  variant="dark" size="sm">Buy Now</Button>
<Button variant="secondary" size="sm">Learn More</Button>
</div>
<img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1568353105.62414890.jpg?width=400&height=400" alt="" width={'250px'} />
</div>
<div className='divisions mt-3'>
<div className="texted">
<h3>Xiaomi Home Security</h3>
<p>Camera</p>
</div>
<div className="btn-bt">
<Button  variant="dark" size="sm">Buy Now</Button>
<Button variant="secondary" size="sm">Learn More</Button>
</div>
<img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1571914613.44793569.jpg?width=400&height=400" alt="" width={'250px'} />
</div>
<div className='divisions mt-3'>
<div className="texted">
<h3>Xiaomi Home Security</h3>
<p>Camera</p>
</div>
<div className="btn-bt">
<Button  variant="dark" size="sm">Buy Now</Button>
<Button variant="secondary" size="sm">Learn More</Button>
</div>
<img className="img1" src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1574669860.58966823.jpg?width=400&height=400" alt="" width={'250px'} />
</div>

</div>







</div>  )
}

export default Light