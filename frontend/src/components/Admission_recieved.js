// Complaint.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Complaint.css"; // Import the CSS file
import axios from 'axios';

const ComplaintList = ({ complaints, onComplaintClick }) => (
  <div className="complaint-list">
    <h2 style={{ marginLeft: "200px" }}>Complaints</h2>
    <div className="complaint-cards">
      <div className="row">
        {complaints.map((complaint, index) => (
          <div className="col-md-6" key={index}>
            <div className="card my-3" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{complaint.name}</h5>
                <p className="card-text">
                  {complaint.block}-{complaint.roomNumber}
                </p>
                <button
                  onClick={() => onComplaintClick(index)}
                  className="btn btn-primary"
                  style={{
                    whiteSpace: "nowrap",
                    textTransform: "none",
                    width: "157px",
                    paddingBottom: "10px",
                    backgroundColor: "purple",
                  }}
                >
                  Show Details
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const AdmissionDetails = ({ admission, onHideDetailsClick }) => (
  <div className="complaint-details">    
    <h2>Complaint Details</h2>
    <p>ID: {admission.regId}</p>
    <p>Email: {admission.email}</p>
    <p>Name: {admission.fullName}</p>
    <p>DOB: {admission.dateOfBirth}</p>
    <p>Gender: {admission.gender}</p>
    <p>Block: {admission.block}</p>
    <p>Branch: {admission.branch}</p>
    <p>Mobile Number: {admission.mobileNumber}</p>
    <p>Year: {admission.year}</p>
    <p>Home Address: {admission.homeAddress}</p>

    <button
      onClick={onHideDetailsClick}
      className="btn btn-secondary"
      style={{
        whiteSpace: "nowrap",
        textTransform: "none",
        marginTop: "20px",
        width: "150px",
        backgroundColor: "gray",
      }}
    >
      Hide Details
    </button>

   
  </div>
);

const Admission_received = () => {
  // Assuming you have a list of complaints with their details
  
  const [selectedComplaintIndex, setSelectedComplaintIndex] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const handleHideDetailsClick = () => {
    setSelectedComplaintIndex(null);
  };
  const handleAdmissionClick = (index) => {
    setSelectedComplaintIndex(index);
  };
 


  useEffect(() => {
    // Fetch all complaints from the backend when the component mounts
    fetch("http://localhost:5000/api/admission/fetchallstudents")
      .then((response) => response.json())
      .then((data) => setComplaints(data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <section className="complaint-section">
      {selectedComplaintIndex === null ? (
        <ComplaintList
          complaints={complaints}
          onComplaintClick={handleAdmissionClick}
        />
      ) : (
        <AdmissionDetails
          complaint={complaints[selectedComplaintIndex]}
          onHideDetailsClick={handleHideDetailsClick}
        />
      )}

      <footer>
        <Link to="/">Back to Complaints</Link>
      </footer>
    </section>
  );
};

export default Admission_received;