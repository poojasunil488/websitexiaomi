import React from 'react'
import './login.css';

function Login() {
  return (
    <div className='login-form d-flex '>
      <div className="login-image">
<img src="https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.92c693b4..jpg" alt="" />
      </div>
<div className='login-mod d-flex gap-3'>
  <img src='http://assets.stickpng.com/images/6102dadda849c40004f9a13b.png' alt="image" width={'50px'} height={'50px'} />
<span>Xiaomi Account</span>
</div>
<div className='log-nav d-flex'>
<a href='/useragreement'>
  <li>User Agreement</li>
  
</a>
<a href='/privacy'>
  <li>Privacy Policy</li>
</a>
<a href='/help'>
  <li>Need Help</li>
</a>
<a href='/language'>
  <li>Select Your Language</li>
</a>
</div>
{/* ----------------------------------------------------------------------------------------------- */}
<div className='login-sign'>



















</div>








    </div>
  )
}

export default Login