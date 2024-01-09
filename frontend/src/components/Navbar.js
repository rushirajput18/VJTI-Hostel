import React from "react";
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
                <Link className={`nav-link ${location.pathname === "/studentNotice" ? "active" : ""}`} to="/studentNotice">Student Notice</Link>
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                  <a
  className="nav-link"
  href="http://127.0.0.1:5500/VJTI-Hostel/frontend/src/components/form/index.html"
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#7d2ae8';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = '';
  }}
>
  Admissions
</a>
                  </li>
                  <li className="nav-item">
                <Link className="nav-link" to="https://rzp.io/l/wVrc0Ngo5">
                  Fees Payment
                </Link>
              </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sendcomplaint">
                      Send Complaint
                    </Link>
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
                </>
              )}
            </ul>
            {!isLoggedIn ? (
              <form className="d-flex" role="search">
                <Link className="btn mx-1" to="/login" role="button" style={{ backgroundColor: '#7d2ae8', color: 'white' }}>Student Login</Link>
                <Link className="btn mx-1" role="button" onClick={handleRedirectToLocalhost3001} style={{ backgroundColor: '#7d2ae8', color: 'white' }}>Admin Login</Link>
              </form>
            ) : (
              <button onClick={handleLogout} className="btn my-2" to="/login" role="button" style={{ width:'auto', backgroundColor: '#7d2ae8', color: 'white' }}>Logout</button>
              
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
