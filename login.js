// import React from "react";

// function LoginPage() {
//   return (
//     <div>
//       <h2>Login Page</h2>
//       <button onClick={() => handleGoogleLogin()}>Login with Google</button>
//       <button onClick={() => handleFacebookLogin()}>Login with Facebook</button>
//     </div>
//   );

//   function handleGoogleLogin() {
//     // Code to initiate Google login
//   }

//   function handleFacebookLogin() {
//     // Code to initiate Facebook login
//   }
// }

// export default LoginPage;
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
// import  Validation from './Validation';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsGoogle} from 'react-icons/bs';
import Profile from './profile';
import Home from './upload';

const Validation = (data) => {
  let errors = {};

  if (!data.email) {
    errors.email = 'Please enter your email address.';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.password) {
    errors.password = 'Please enter your password.';
  }

  return errors;
};

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setErrors(Validation(formData));
  // };


  return (
    <div className="bg d-flex flex-column justify-content-center align-items-center vh-100 h-100">
      <h1>DECIBEL</h1>
      <Form style={{ width: '350px' }} className="p-4 border rounded">
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            placeholder="Email"
            required />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
            placeholder="Password"
            required />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <button type="submit" className="mt-3 w-100 bg-primary rounded">
          <Link to="/profile"><h5 className='text-light'>Login</h5></Link>
        </button>
        <br></br>
        <br></br>
        <h6 className='text-light'>Don't have an account?</h6>
        <br></br>
        <ul classname='w-100' style={{ display: 'flex', listStyleType: 'none', justifyContent: 'space-between' }}>
          <li><FaFacebook size={50} color='white' /></li>
          <li><SiGmail size={50} color='white' /></li>
          <li><BsGoogle size={50} color='white' /></li>
        </ul>
      </Form>
    </div>
  );
}

export default Login;