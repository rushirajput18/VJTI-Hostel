import React from 'react';
import './css/Admission.css';
const Admission = ({ isDarkTheme }) => {
  return (
    <div className={isDarkTheme ? 'admi dark-theme' : 'admi'}>
      <section className={isDarkTheme ? 'vh-100 gradient-custom dark-theme' : 'vh-100 gradient-custom'}>
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className={isDarkTheme ? 'card shadow-2-strong dark-card' : 'card shadow-2-strong card-registration'} style={{ borderRadius: "15px" }}>
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form>

                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" id="firstName" className={`form-control form-control-lg ${isDarkTheme ? 'dark-input' : ''}`} />
                          <label className="form-label" for="firstName">First Name</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <div className="form-outline">
                          <input type="text" id="lastName" className={`form-control form-control-lg ${isDarkTheme ? 'dark-input' : ''}`} />
                          <label className="form-label" for="lastName">Last Name</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">

                        <div className={`form-outline datepicker w-100 ${isDarkTheme ? 'dark-input' : ''}`}>
                          <input type="text" className={`form-control form-control-lg ${isDarkTheme ? 'dark-input' : ''}`} id="birthdayDate" />
                          <label for="birthdayDate" className="form-label">Birthday</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <h6 className={`mb-2 pb-1 ${isDarkTheme ? 'dark-text' : ''}`}>Gender: </h6>

                        <div className={`form-check form-check-inline ${isDarkTheme ? 'dark-text' : ''}`}>
                          <input className={`form-check-input ${isDarkTheme ? 'dark-input' : ''}`} type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" checked />
                          <label className="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div className={`form-check form-check-inline ${isDarkTheme ? 'dark-text' : ''}`}>
                          <input className={`form-check-input ${isDarkTheme ? 'dark-input' : ''}`} type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
                          <label className="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div className={`form-check form-check-inline ${isDarkTheme ? 'dark-text' : ''}`}>
                          <input className={`form-check-input ${isDarkTheme ? 'dark-input' : ''}`} type="radio" name="inlineRadioOptions" id="otherGender" value="option3" />
                          <label className="form-check-label" for="otherGender">Other</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="email" id="emailAddress" className={`form-control form-control-lg ${isDarkTheme ? 'dark-input' : ''}`} />
                          <label className="form-label" for="emailAddress">Email</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4 pb-2">

                        <div className="form-outline">
                          <input type="tel" id="phoneNumber" className={`form-control form-control-lg ${isDarkTheme ? 'dark-input' : ''}`} />
                          <label className="form-label" for="phoneNumber">Phone Number</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">

                        <select className={`select form-control-lg ${isDarkTheme ? 'dark-input' : ''}`}>
                          <option value="1" disabled>Choose Block</option>
                          <option value="2">Block-A</option>
                          <option value="3">Block-B</option>
                          <option value="4">Block-C</option>
                          <option value="4">Block-D</option>
                        </select>
                        <label className="form-label select-label">Choose Block</label>

                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input className={`btn btn-primary btn-lg ${isDarkTheme ? 'dark-button' : ''}`} type="submit" value="Submit" />
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
