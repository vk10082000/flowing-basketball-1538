import React, { useState } from "react";

import { styled } from "styled-components";

import { toast } from "react-toastify";

const initialState = {
  email: "",
  name: "",
  password: "",
};

const Register = () => {
  

  return (
    <DIV>
      <h2>Please Register</h2>
      <div className="register-form">
        <div>
          <input
            placeholder="Enter your Name"
            type="text"
            name="name"
     
          />
        </div>
        <div>
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
         
          />
        </div>
        <div>
          <input
            placeholder="Enter Password"
            type="password"
            name="password"
           
          />
        </div>
        <div>
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
           
          />
        </div>
        <button className="register-button"  >
          Register
        </button>
      </div>
    </DIV>
  );
};

export default Register;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
 
  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
    margin-top: 6%;
  }

  .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;

    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 500px;
  }

  .register-form input {
    width: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    margin-bottom: 15px;
  }

  .register-form button {
    background-color: teal;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .register-form button:hover {
    background-color: #27ae60;
  }
`;
