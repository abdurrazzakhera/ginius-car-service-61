import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  // //Declaration State
  // const nameRef = useRef("");
  // const emailRef = useRef("");
  // const passwordRef = useRef("");
  const navigate = useNavigate();
  const nevigateLogin = () => {
    navigate("/login");
  };
  const handelReagister = (event) => {
    event.preventDefault();
    const email = event.target.name.value;
    const name = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, name, password);
  };
  return (
    <div className='ragister-form'>
      <h2>Please Ragister</h2>
      <form onSubmit={handelReagister}>
        <input type='text' name='name' id='' placeholder='Enter Your Name' />
        <input
          type='email'
          name='email'
          id=''
          placeholder='Enter Your Email'
          required
        />
        <input
          type='password'
          name='password'
          id=''
          placeholder='Enter Your Password'
          required
        />
        <input type='submit' value='Register' />
      </form>
      <p className='text-center'>
        Allready have an Account?
        <Link
          to='/login'
          className='text-decoration-none text-danger'
          onClick={nevigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
