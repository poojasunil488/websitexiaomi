import React from 'react';
import './tablet.css'
import Button from 'react-bootstrap/Button';


function Tablets() {
  return (
    <div className='tabletpage'>
    <div className='headers'>
<div className='headlink'>
<li>Home</li>
<li>All Products</li>
<li>Xiaomi Series</li>
</div>
<div className='headerall'>
    <span>
    Tablets  
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
<img className="img1" src="https://i03.appmifile.com/311_item_in/01/09/2023/8f8e4ed463073cf5d027ce6790a5c8da.jpg?f=webp" alt="" width={'250px'} />
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
<img className="img1" src="https://i03.appmifile.com/396_item_in/12/06/2023/a2f6eb051ada73b3c31b78c4ef75397c.jpg?f=webp" alt="" width={'250px'} />
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
<img className="img1" src="https://i03.appmifile.com/917_item_in/12/06/2023/3d2e72c017654b2dbb6be25343c1c69c.jpg?f=webp" alt="" width={'250px'} />
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
<img className="img1" src="https://i03.appmifile.com/61_item_in/24/08/2023/89bec9fe6f28937438b4646f395bf4cb.jpg?f=webp" alt="" width={'250px'} />
</div>

</div>
</div> 
 )
}

export default Tablets