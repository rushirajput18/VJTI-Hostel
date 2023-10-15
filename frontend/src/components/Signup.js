import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const Signup = ({props,  isDarkTheme }) => {
  const containerClasses = isDarkTheme
  ? "container bg-dark p-5"
  : "container p-5";
  const [credentials, setCredentials] = useState({name:"", email:"", password:"", cpassword:""});
  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
    const {name, email, password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password})
      });
      const json = await response.json();
      console.log(json)
      if(json.success)
          {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/login")
            // props.showAlert("Account Created Successfully", "success")
          }
          else
          {
            console.log("Internal Error")
            // props.showAlert("Invalid Details", "danger")
          }
      
}
const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
    <div className={containerClasses} style={{width:"100vw", height:"100vh", fontFamily:"monospace"}}>
      <h2 className={`text-${isDarkTheme?"danger":"primary"}`}>Create a Account !</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 p-4">
          <input
          style={{width:"600px"}}
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 p-4">
          <input
            style={{width:"600px"}}
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 p-4">
          <input
            style={{width:"600px"}}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="mb-3 p-4">
          <input
          style={{width:"600px"}}
            type="text"
            className="form-control"
            id="cpassword"
            name="cpassword"
            placeholder="Confirm password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" style={{width:"87px", fontSize:"22px", padding:"4px"}} className={`mb-3 mx-4 px-8 btn btn-${isDarkTheme?"danger":"primary"}`}>
          Signup
        </button>
      </form>{" "}
    </div>
  );
};

export default Signup;
