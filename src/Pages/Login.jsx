

import { styled } from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast styles
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const intialstate = {
  email: "",
  password: "",
};

const Login = () => {

  return (
    <DIV>
      <h2>Please Login</h2>
      <div className="loginform">
        <div className="input-group">
          <input
            placeholder="Enter your Email"
            type="email"
            name="email"
         
          />
        </div>
        <div className="input-group">
          <input
           
            placeholder="Enter password"
            name="password"
           
          />
          <div className="input-right-element">
            <button ></button>
         
          </div>
        </div>
        <button className="button" >
         Login
        </button>
      </div>
      <ToastContainer />
    </DIV>
  );
};

export default Login;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  height: 100vh;
  background-color: #f0f2f5;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }

  .loginform {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
    width: 500px;
  }

  .input-group {
    position: relative;
    width: 100%;
    margin-bottom: 15px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  .input-right-element {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 0.5rem;
  }

  .button {
    background-color: #2ecc71;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #27ae60;
  }
  .icon {
    width: 25px;
    height: 25px;
    padding-right: 5px;
    cursor: pointer;
  }
`;
