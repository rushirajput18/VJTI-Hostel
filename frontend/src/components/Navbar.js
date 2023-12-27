import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate} from 'react-router-dom';
const Navbar = ({ toggleDarkTheme, isDarkTheme }) => {

  const navigate = useNavigate();
  const navbarClass = isDarkTheme
    ? "navbar navbar-expand-lg navbar-dark bg-dark"
    : "navbar navbar-expand-lg navbar-light bg-light";
    const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/login')
    }
    let location = useLocation();
  return (
    <>
      <nav className={navbarClass}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            VJTI Hostel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/admission">
                  Admissions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/facilities">
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sendcomplaint">
                  Send Complaint
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/map">
                  Map
                </Link>
              </li>
              <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/StudentNotice"? "active":""}`} to="/studentNotice">Student Notice</Link>
        </li>
              <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Studentdetails"? "active":""}`} to="/studentdetails">Student Details</Link>
        </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/other"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/complaint">
                      Complaint
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                 
                </ul>
              </li>
            </ul>
            {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link className={`btn btn-${isDarkTheme?"light":"primary"} mx-1`} to="/login" role="button">Login</Link>
      <Link className={`btn btn-${isDarkTheme?"light":"primary"} mx-1`} to="/signup" role="button">Sign Up</Link>
      </form>: <button onClick={handleLogout} className='btn btn-primary'>Logout</button>}
      <button
              onClick={toggleDarkTheme}
              className={`btn btn-${isDarkTheme?"light":"primary"} mx-2`}
            >
              {isDarkTheme ? "Switch to Light" : "Switch to Dark"} Theme
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
