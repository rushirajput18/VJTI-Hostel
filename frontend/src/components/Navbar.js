import React from "react";
import './css/Button.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const history = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('token');
    history('/login');
  };
  const handleRedirectToLocalhost3001 = () => {
    // Redirect to localhost:3001
    window.location.href = 'http://localhost:3001';
  };
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            VJTI Hostel
          </Link>
          <Link
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/studentNotice" ? "active" : ""}`} to="/studentNotice">Student Notice</Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admission">
                      Admission
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://rzp.io/l/wVrc0Ngo5">
                      Fees Payment
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sendcomplaint">
                      Send Complaint
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/aboutvjti">
                      About VJTI Hostel
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/other"
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
                        <Link className="dropdown-item" to="/admissionreceived">
                          Admission Received
                        </Link>
                      </li>
                      <li >
                    <Link className="dropdown-item"  to="/Studentdetails">
                      Student Details
                    </Link>
                  </li>
                    </ul>
                  </li>
                </>
              )}
            </ul>
            {!isLoggedIn ? (
              <form className="d-flex" role="search">
              <Link className="link" to="/login" role="button">Login</Link>
              </form>
            ) : (
              <Link className="logout" onClick={handleLogout} to="/login" role="button">Logout</Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;