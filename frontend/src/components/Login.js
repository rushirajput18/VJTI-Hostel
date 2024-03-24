import "./css/Login.css"; // Make sure to import your CSS file
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "./Images/images.jpg";
const Login = ({ props }) => {
  // const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const Navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [redirect, setRedirect] = useState(false);

  const [selectedRole, setSelectedRole] = useState('');
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:5000/api/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: credentials.email,
  //         password: credentials.password,
  //       }),
  //     });
  //     const json = await response.json();
  //     console.log(json);
  //     if (json.success) {
  //       // Save the auth token and redirect
  //       localStorage.setItem("token", json.authtoken);
  //       navigate("/");
  //       // props.showAlert("Logged in Successfully", "success")
  //     }
  //   } catch (error) {
  //     // console.error('Fetch error:', error);
  //     console.log("Erro Occurred");
  //   }
  // };
  if (redirect && isLoggedIn ) {
    return <Navigate to={'/'} />;
}
  async function login(ev) {
    ev.preventDefault();

    if (!selectedRole) {
        alert('Please select a role.');
        return;
    }

    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password, role: selectedRole }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        const userInfo = await response.json();

        // Set user as logged in
        localStorage.setItem('token', userInfo.token);
        localStorage.setItem('role', userInfo.role);

        // Update the isLoggedIn state
        setIsLoggedIn(true);

        // Reload the page
        window.location.href = '/';
        // Redirect to committees page
        setRedirect(true);
    } else {
        alert('Wrong credentials');
    }
}


async function register(ev) {
  ev.preventDefault();

  if (!selectedRole) {
      alert('Please select a role.');
      return;
  }

  const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, role: selectedRole }), // Include selected role in the request body
      headers: { 'Content-Type': 'application/json' }
  });
  if (response.status === 200) {
      setRedirect(true);
      alert('Registration successful');
  } else {
      console.log(response.body)
      alert('Registration failed');
  }
}

if (redirect && isLoggedIn ) {
    return <Navigate to={'/'} />;
}
  // const onChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };
  // const [credentials1, setCredentials1] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const navigate1 = useNavigate();
  // const handleSubmit1 = async (e) => {
  //   e.preventDefault();
  //   const { name, email, password } = credentials1;
  //   const response = await fetch("http://localhost:5000/api/auth/createuser", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ name, email, password }),
  //   });
  //   const json = await response.json();
  //   console.log(json);
  //   if (json.success) {
  //     // Save the auth token and redirect
  //     localStorage.setItem("token", json.authtoken);
  //     navigate1("/login");
  //     // props.showAlert("Account Created Successfully", "success")
  //   } else {
  //     console.log("Internal Error");
  //     // props.showAlert("Invalid Details", "danger")
  //   }
  // };
  // const onChange1 = (e) => {
  //   setCredentials1({ ...credentials1, [e.target.name]: e.target.value });
  // };
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
            <form onSubmit={login}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    required
                  />
                </div>
                <div style={{marginBottom:'5px'}}>
                    <i className="fas fa-users"></i>
                    <select id="role1" value={selectedRole} onChange={ev => setSelectedRole(ev.target.value)}>
                        <option value="">Select...</option>
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                    </select>
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                onChange={ev => setPassword(ev.target.value)}
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
            <form onSubmit={register}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter your name"
                    value={name}
                    onChange={ev => setName(ev.target.value)}
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
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    required
                  />
                </div>
                <div style={{marginBottom:'5px'}}>
                    <i className="fas fa-users"></i>
                    <select id="role2" value={selectedRole} onChange={ev => setSelectedRole(ev.target.value)}>
                        <option value="">Select...</option>
                        <option value="Admin">Admin</option>
                        <option value="Student">Student</option>
                    </select>
                </div>
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="password1"
                    name="password"
                    minLength={5}
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
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
