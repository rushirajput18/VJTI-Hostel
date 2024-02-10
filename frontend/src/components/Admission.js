import React, { useState } from "react";
// import { usePDF } from "react-to-pdf";
import "./css/Admission.css";
import img from "./Images/admission.jpg";
import axios from "axios";

const Admission = () => {
  // const { toPDF, targetRef } = usePDF({ filename: "admission_form.pdf" });
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    regId: "",
    year: "",
    branch: "",
    homeAddress: "",
    block: "",
  });
  // const emailRef = useRef(null);
  // const fullNameRef = useRef(null);
  // const dateOfBirthRef = useRef(null);
  // const genderRef = useRef(null);
  // const mobileNumberRef = useRef(null);
  // const regIdRef = useRef(null);
  // const yearRef = useRef(null);
  // const branchRef = useRef(null);
  // const homeAddressRef = useRef(null);
  // const blockRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admission/addadmission",
        formData
      );
console.log(response)
console.log(formData)
      if (response.status === 200) {
        console.log("Complaint submitted successfully!");
        // Reset the form after successful submission
        setFormData({
          email: "",
          fullName: "",
          dateOfBirth: "",
          gender: "",
          mobileNumber: "",
          regId: "",
          year: "",
          branch: "",
          homeAddress: "",
          block: "",
        });
        // Refresh the page if needed
      } else {
        // Handle errors, maybe show an error message
        console.error("Failed to submit complaint");
      }
    } catch (error) {
      console.log("Hi     " + formData)

      console.error("Error submitting complaint:", error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Retrieve values from the form fields
  //

  //   // Log the data to the console (you can modify this part to suit your needs)
  //   console.log("Form Data:", data);

  //   // Generate PDF
  //   toPDF();
  // };
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
                    type="email"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                    name="fullName"
                    value={formData.fullName}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-calendar-alt" />

                  <input
                    type="date"
                    required
                    placeholder="Date Of Birth"
                    onChange={handleChange}
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                  />
                </div>
                <div className="input-box">
                  <label>
                    <input
                      type="radio"
                      required
                      onChange={handleChange}
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      required
                      onChange={handleChange}
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                    />
                    Female
                  </label>
                </div>

                <div className="input-box">
                  <i className="fas fa-mobile-alt"></i>
                  <input
                    type="number"
                    required
                    placeholder="Mobile Number"
                    onChange={handleChange}
                    name="mobileNumber"
                    value={formData.mobileNumber}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-id-card"></i>
                  <input
                    type="number"
                    required
                    placeholder="Roll Number"
                    onChange={handleChange}
                    name="regId"
                    value={formData.regId}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-book"></i>
                  <input
                    type="text"
                    required
                    placeholder="Year Example Third Year"

                    onChange={handleChange}
                    name="year"
                    value={formData.year}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-book"></i>
                  <input
                    type="text"
                    required
                    onChange={handleChange}
                    placeholder="Branch Example Information Technology"
                    name="branch"
                    value={formData.branch}
                  />
                </div>
                <div className="input-box">
                  <i className="fas fa-map-marker-alt"></i>
                  <input
                    type="text"
                    required
                    onChange={handleChange}
                    placeholder="Home City and Pincode Example Mumbai 400019"

                    name="homeAddress"
                    value={formData.homeAddress}
                  />
                </div>
                <div className="input-box">
                  <label className="form-label select-label">
                    Choose Block
                  </label>
                  <select
                    required
                    onChange={handleChange}
                    name="block"
                    value={formData.block}
                  >
                    <option value="" disabled>
                      Choose Block
                    </option>
                    <option value="Block-A">Block-A</option>
                    <option value="Block-B">Block-B</option>
                    <option value="Block-C">Block-C</option>
                    <option value="Block-D">Block-D</option>
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
