// Complaint.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Complaint.css"; // Import the CSS file

const ComplaintList = ({ complaints, onComplaintClick, onDeleteClick }) => (
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
                    width: "124px",
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
const ComplaintDetails = ({ complaint }) => (
  <div className="complaint-details">
    <h2>Complaint Details</h2>
    <p>Name: {complaint.name}</p>
    <p>Block: {complaint.block}</p>
    <p>Room Number: {complaint.roomNumber}</p>
    <p>Mobile Number: {complaint.mobileNumber}</p>
    <p>Email ID: {complaint.emailID}</p>
    <p>Issue Type: {complaint.issueType.join(", ")}</p>
    <p>Description: {complaint.description}</p>
  </div>
);

const Complaint = () => {
  // Assuming you have a list of complaints with their details
  const [selectedComplaintIndex, setSelectedComplaintIndex] = useState(null);
  const [complaints, setComplaints] = useState([]);

  const handleComplaintClick = (index) => {
    setSelectedComplaintIndex(index);
  };

  useEffect(() => {
    // Fetch all complaints from the backend when the component mounts
    fetch("http://localhost:5000/api/complaintsent/fetchallcomplaints")
      .then((response) => response.json())
      .then((data) => setComplaints(data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <section className="complaint-section">
      {selectedComplaintIndex === null ? (
        <ComplaintList
          complaints={complaints}
          onComplaintClick={handleComplaintClick}
        />
      ) : (
        <ComplaintDetails complaint={complaints[selectedComplaintIndex]} />
      )}

      <footer>
        <Link to="/">Back to Complaints</Link>
      </footer>
    </section>
  );
};

export default Complaint;
