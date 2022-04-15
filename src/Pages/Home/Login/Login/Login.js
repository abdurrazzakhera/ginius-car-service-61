import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  //State
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  //Funtion
  const handelSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  const nevigateRagister = (event) => {
    navigate("/register");
  };

  //Componetns Return
  return (
    <div>
      <Form onSubmit={handelSubmit} className='container w-50 mx-auto'>
        <h1 className='text-primary text-center mt-2'>Please Login</h1>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type='email'
            placeholder='Enter email'
            required
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type='password'
            placeholder='Password'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <p className='text-center'>
        New to Genius Car{" "}
        <Link
          to='/register'
          className='text-decoration-none text-danger'
          onClick={nevigateRagister}
        >
          Please Login
        </Link>
      </p>

      {/* <Link to='/register'>Register</Link> */}
    </div>
  );
};

export default Login;
