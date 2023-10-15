import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ( {props, isDarkTheme }) => {
  const containerClasses = isDarkTheme
  ? "container bg-dark p-5"
  : "container p-5";
    const [credentials, setCredentials] = useState({email:"", password:""});
    const navigate = useNavigate();
    const handleSubmit =async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email, password:credentials.password})
          });
          const json = await response.json();
          console.log(json)
          if(json.success)
          {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/")
            // props.showAlert("Logged in Successfully", "success")
          }
          else
          {
            props.showAlert("Invalid Credentials", "danger")
            console.log("Internal Error")
          }
    }
    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div className={containerClasses} style={{width:"100vw", height:"100vh", fontFamily:"monospace"}}>
          <h2 className={`text-${isDarkTheme?"danger":"primary"}`}>Login to VJTI Hostel !</h2>
          <form onSubmit={handleSubmit} >
            <div className="mb-3 p-4">
              
              <input
              style={{width:"600px"}}
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3 p-4">

              <input
              style={{width:"600px"}}
                type="password"
                value={credentials.password}
                onChange={onChange}
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" style={{width:"87px", fontSize:"22px"}} className={`mb-3 mx-4 px-8 btn btn-${isDarkTheme?"danger":"primary"}`}>
              Login
            </button>
          </form>
        </div>
      );
};

export default Login;
