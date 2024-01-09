import React, { useRef } from "react";
import { usePDF } from "react-to-pdf";
import "./css/Admission.css";
import img from "./Images/admission.jpg";

const Admission = () => {
  const { toPDF, targetRef } = usePDF({ filename: "admission_form.pdf" });
  const emailRef = useRef(null);
  const fullNameRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const genderRef = useRef(null);
  const mobileNumberRef = useRef(null);
  const regIdRef = useRef(null);
  const yearRef = useRef(null);
  const branchRef = useRef(null);
  const homeAddressRef = useRef(null);
  const blockRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve values from the form fields
    const data = {
      email: emailRef.current.value,
      fullName: fullNameRef.current.value,
      dateOfBirth: dateOfBirthRef.current.value,
      gender: genderRef.current.value,
      mobileNumber: mobileNumberRef.current.value,
      regId: regIdRef.current.value,
      year: yearRef.current.value,
      branch: branchRef.current.value,
      homeAddress: homeAddressRef.current.value,
      block: blockRef.current.value,
    };

    // Log the data to the console (you can modify this part to suit your needs)
    console.log("Form Data:", data);

    // Generate PDF
    toPDF();
  };
  return (
    <div id="admission" className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img className="backImg" src={img} alt="" />
        </div>
        <div className="back">
          <img className="backImg" src={img} alt="" />
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Admission Form</div>
            <form onSubmit={handleSubmit}>
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="text"
                    placeholder="Email"
                    ref={emailRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Full Name"
                    ref={fullNameRef}
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-calendar-alt" />

                  <input ref={dateOfBirthRef} type="date" />
                </div>
                <div className="input-box">
                  <input
                    ref={genderRef}
                    type="radio"
                    name="gender"
                    value="male"
                  />{" "}
                  Male
                  <input
                    ref={genderRef}
                    type="radio"
                    name="gender"
                    value="female"
                  />{" "}
                  Female
                </div>
                <div className="input-box">
                  <i className="fas fa-mobile-alt"></i>
                  <input
                    ref={mobileNumberRef}
                    type="number"
                    placeholder="Mobile Number"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-id-card"></i>
                  <input
                    ref={regIdRef}
                    type="text"
                    placeholder="Reg ID"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-book"></i>
                  <input
                    ref={yearRef}
                    type="text"
                    placeholder="Year"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-book"></i>
                  <input
                    ref={branchRef}
                    type="text"
                    placeholder="Branch"
                    required
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    ref={homeAddressRef}
                    type="text"
                    placeholder="Home Address"
                    required
                  />
                </div>
                <div className="input-box">
                  <label className="form-label select-label">
                    Choose Block
                  </label>
                  <select ref={blockRef}>
                    <option value="1" disabled>
                      Choose Block
                    </option>
                    <option value="2">Block-A</option>
                    <option value="3">Block-B</option>
                    <option value="4">Block-C</option>
                    <option value="4">Block-D</option>
                  </select>
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
