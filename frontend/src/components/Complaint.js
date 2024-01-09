// Complaint.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Complaint.css'; // Import the CSS file


const ComplaintList = ({ complaints, onComplaintClick }) => (
  <div className="complaint-list">
    <h2 style={{ marginLeft: '200px' }}>Complaints</h2>
    <div className="complaint-cards">
      <div className="row">
        {complaints.map((complaint, index) => (
          <div className="col-md-6" key={index}>
            <div className="card my-3" style={{ width: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title">{complaint.issueType.join(', ')}</h5>
                <p className="card-text">{complaint.description}</p>
                <button
  onClick={() => onComplaintClick(index)}
  className="btn btn-primary"
  style={{ whiteSpace: 'nowrap', textTransform: 'none', width:'124px', paddingBottom:'10px', backgroundColor:'purple'}}
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
    <p>Issue Type: {complaint.issueType.join(', ')}</p>
    <p>Description: {complaint.description}</p>
    <p>Availability: {complaint.availability}</p>
  </div>
);

const Complaint = () => {
  // Assuming you have a list of complaints with their details
  const [selectedComplaintIndex, setSelectedComplaintIndex] = useState(null);
  const complaints = [
    {
      name: "John Doe",
      block: "A",
      roomNumber: "101",
      mobileNumber: "1234567890",
      emailID: "john.doe@example.com",
      issueType: ["overcharge"],
      description: "Missing item in the room",
      availability: "2023-01-01T12:00",
    },
    {
      name: "John Doe",
      block: "A",
      roomNumber: "101",
      mobileNumber: "1234567890",
      emailID: "john.doe@example.com",
      issueType: ["overcharge"],
      description: "Missing item in the room",
      availability: "2023-01-01T12:00",
    },
    {
      name: "John Doe",
      block: "A",
      roomNumber: "101",
      mobileNumber: "1234567890",
      emailID: "john.doe@example.com",
      issueType: ["overcharge"],
      description: "Missing item in the room",
      availability: "2023-01-01T12:00",
    },
    {
      name: "John Doe",
      block: "A",
      roomNumber: "101",
      mobileNumber: "1234567890",
      emailID: "john.doe@example.com",
      issueType: ["overcharge"],
      description: "Missing item in the room",
      availability: "2023-01-01T12:00",
    },
    {
      name: "John Doe",
      block: "A",
      roomNumber: "101",
      mobileNumber: "1234567890",
      emailID: "john.doe@example.com",
      issueType: ["overcharge"],
      description: "Missing item in the room",
      availability: "2023-01-01T12:00",
    },
    // Add more entries as needed...
  ];
  const handleComplaintClick = (index) => {
    setSelectedComplaintIndex(index);
  };

  return (
    <section className="complaint-section">
      {selectedComplaintIndex === null ? (
        <ComplaintList complaints={complaints} onComplaintClick={handleComplaintClick} />
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
