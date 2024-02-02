import React from 'react'
import './login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Login() {
  return (
    <div className='login d-flex'>
       <div className='logo-div'>
<img src="https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.92c693b4..jpg" alt="" width={'300px'} />
       </div>
       <div className='login-form'>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <div className='buttonform'>
          <Button style={{width:'220px'}} variant="warning">Sign In</Button>{' '}
     </div>
<div className='buttonform1'>
         <Button style={{width:'220px'}}>Sign In</Button>{' '}
    
</div>

  </Form.Group>
      
    </Form>
       </div>
    </div>
  )
}

export default Login