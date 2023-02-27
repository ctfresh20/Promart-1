import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as Icons from "react-icons/fa";
import { Link } from 'react-router-dom';


function LoginForm(){


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);







  return (
    <div>
    <a style={{backgroundColor:"transparent",border:"0px",color:"black"}} onClick={handleShow}>
        Sign In <Icons.FaSignInAlt/>
      </a>

      <Modal show={show} onHide={handleClose}>
      
        <Modal.Body>
        <h5 style={{textAlign:"center"}}>Welcome back!</h5>
          <h5 style={{textAlign:"center",fontSize:"25px",fontWeight:"600"}}>Sign in to your account</h5>
          <p style={{textAlign:"center",fontSize:"14px"}}>Don't have an account?<Link to="/Sign-up" id='signup' style={{fontSize:"13px"}}>Sign Up</Link></p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>password</Form.Label>
              <Form.Control type="password" placeholder='password' />
            </Form.Group>
          </Form>

          <p style={{textAlign:"center"}}><Link to="forgot password" id='signup' >Forgot your password?</Link></p>

        </Modal.Body>
<hr/>
<p style={{textAlign:"center"}}><Link to="/sign in" id='signup' >SIGN IN</Link> </p>

        {/* <Modal.Footer>

        <p style={{textAlign:"center"}}><Link to="/sign up" id='signup' >SIGN Up</Link> </p>
         <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default LoginForm;