import "./css/Login.css"; // Make sure to import your CSS file
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "./Images/images.jpg";
const Login = ({ props }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        // props.showAlert("Logged in Successfully", "success")
      }
    } catch (error) {
      // console.error('Fetch error:', error);
      console.log("Erro Occurred");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const [credentials1, setCredentials1] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate1 = useNavigate();
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials1;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate1("/login");
      // props.showAlert("Account Created Successfully", "success")
    } else {
      console.log("Internal Error");
      // props.showAlert("Invalid Details", "danger")
    }
  };
  const onChange1 = (e) => {
    setCredentials1({ ...credentials1, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img className="iamg" src={image1} alt="" />
          <div className="text"></div>
        </div>
        <div className="back">
          {/*<img className="backImg" src="images/backImg.jpg" alt="" />*/}
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form onSubmit={handleSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={credentials.email}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={credentials.password}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="text">
                  <a href="a">Forgot password?</a>
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>

                <div className="text sign-up-text">
                  Don't have an account?{" "}
                  <label htmlFor="flip">Signup now</label>
                </div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Signup</div>
            <form onSubmit={handleSubmit1}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter your name"
                    onChange={onChange1}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    id="email1"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    onChange={onChange1}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="password1"
                    name="password"
                    onChange={onChange1}
                    minLength={5}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">
                  Already have an account?{" "}
                  <label htmlFor="flip">Login now</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
