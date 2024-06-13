import React, {useRef} from 'react';
import './index.css';

import { Auth } from "../../context/auth.context";

import { toast } from "react-toastify";

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Login = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  let navigation = useNavigate();

  const auth = Auth();

  const submit = async (e) => { 
    e.preventDefault();
    let check = 0;

    emailRef?.current?.value?.length === 0 && check++;
    passwordRef?.current?.value?.length === 0 && check++;

    if (check > 0) {
      toast.error("Please fill in all fields.");
      return;
    }
    try {
      const formData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const result = await axios.post(
        `http://localhost:5000/api/user/login-user`,
        formData
      );
      if (check === 0) {

        auth.activateToken(localStorage.setItem("token", result.data.token));
        console.log(auth.activateToken);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        auth.activateAuthentication(true);
        toast.success("Login Successfull! ");
        navigation("/");
      }
    } 
      catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
    }
  };

  return (
    <div className="signup-container">
      
      <div className="signup-left">
        <h1>Login for Mosoq</h1>
        <p>Lorem Ipsum Dolor Sit Amet Consectetur. Mi Ipsum Diam</p>
        <div className="illustration">
          <img src="/Image Login page.png" alt="blog"  />
        </div>
      </div>

      <div className="signup-right">
        <h2>Login for Mosoq.</h2>
        <p>Connect with businesses</p>
        <button className="social-button google">Continue with Google</button>
        <button className="social-button apple">Continue with Apple</button>
        <p>OR</p>

        <form>

          <input ref={emailRef} type="email" name="email" placeholder="Email Address" style={{width:'100%', marginTop:"2rem"}} />

          <input ref={passwordRef} type="password" name="password" placeholder="Password" style={{marginTop:"2rem"}} />

          <button onClick={submit} type="submit" className="signup-button mt-3">Sign up</button>
        </form>

        <p className="business-link">Are you a <a href="#">business?</a></p>
      </div>
    </div>
  );
};

export default Login;
