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
                <button
                  onClick={() => onDeleteClick(complaint._id)}
                  className="btn btn-danger"
                  style={{
                    whiteSpace: "nowrap",
                    textTransform: "none",
                    width: "124px",
                    marginTop: "10px",
                  }}
                >
                  Delete Complaint
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const ComplaintDetails = ({ complaint, onHideDetailsClick }) => (
  <div className="complaint-details">
    <h2>Complaint Details</h2>
    <p>Name: {complaint.name}</p>
    <p>Block: {complaint.block}</p>
    <p>Room Number: {complaint.roomNumber}</p>
    <p>Mobile Number: {complaint.mobileNumber}</p>
    <p>Email ID: {complaint.email}</p>
    <p>Issue Type: {complaint.issueType}</p>
    <p>Description: {complaint.description}</p>

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

const Complaint = () => {
  // Assuming you have a list of complaints with their details
  
  const [selectedComplaintIndex, setSelectedComplaintIndex] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const handleHideDetailsClick = () => {
    setSelectedComplaintIndex(null);
  };
  const handleComplaintClick = (index) => {
    setSelectedComplaintIndex(index);
  };
  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/complaintsent/deletecomplaint/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the deletion is successful, fetch the updated list of complaints
        const updatedComplaints = await response.json();
        setComplaints(updatedComplaints);
        handleHideDetailsClick(); // Hide details after deletion
      } else {
        // Handle errors
        console.error('Error deleting complaint');
      }
    } catch (error) {
      console.error(error);
    }
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
          onDeleteClick={handleDeleteClick} 
        />
      ) : (
        <ComplaintDetails
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

export default Complaint;