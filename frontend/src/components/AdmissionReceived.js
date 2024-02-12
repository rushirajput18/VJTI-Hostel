import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/AdmissionReceived.css"; // Import CSS file

const AdmissionReceived = () => {
  const [originalDetails, setOriginalDetails] = useState([]);
  const [details, setDetails] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchCategory, setSearchCategory] = useState("ID");
  const [selectedStatus, setSelectedStatus] = useState(""); //to change status in backend
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedrow, setSelectedrow] = useState({
    email: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    regId: "",
    year: "",
    branch: "",
    homeAddress: "",
    status: "",
  });
  const [showCard, setShowCard] = useState(false);
  const handleUpdateStatusClick = (detail) => {
    //when clicked on update button
    setShowCard(true);
    setSelectedrow(detail);
    setSelectedStudentId(detail._id);
    console.log(detail._id);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admission/fetchallstudents")
      .then((response) => setDetails(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toISOString().split("T")[0];
  };
  const handleUpdateStatus = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/admission/updatestudent/${selectedStudentId}`,
        { status: selectedStatus }
      );
      // Refresh the data after updating status
      // axios.get("http://localhost:5000/api/admission/fetchallstudents")
      //     .then((response) => setDetails(response.data))
      //     .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleSearch = () => {
    if (!searchId.trim()) {
      alert("Please enter an ID to search.");
      return;
    }

    // Trim the search ID
    const trimmedSearchId = searchId.trim();

    console.log("Searching for ID:", trimmedSearchId);
    console.log("Original details:", originalDetails);

    // Filter originalDetails based on searchId
    const filteredDetails = originalDetails.filter(
      (detail) => String(detail.regId).trim() === trimmedSearchId
    );

    console.log("Filtered details:", filteredDetails);

    if (filteredDetails.length === 0) {
      alert("No student found with the provided ID.");
    } else {
      setDetails(filteredDetails);
      console.log(filteredDetails.map((detail) => detail.regId)); // Log regId of each detail
    }
  };
  const handleReset = () => {
    setDetails(originalDetails);
    setSearchId("");
  };

  return (
    <div style={{ marginTop: "20px", marginLeft: "10px" }}>
      <h2>Admission Received</h2>
      <div style={{ marginBottom: "10px" }}>
        <select
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <option value="ID">ID</option>
          <option value="Branch">Branch</option>
          <option value="Year">Year</option>
          <option value="Gender">Gender</option>
        </select>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder={`Enter ${searchCategory} to search`}
          className={searchCategory.toLowerCase()} // Set class name dynamically
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <table
        className="table table-dark table-striped container"
        style={{ flex: 1, width: "50%", height: "50%", float: "left" }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Registration No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">D.O.B</th>
            <th scope="col">Gender</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Year</th>
            <th scope="col">Branch</th>
            <th scope="col">Home Address</th>
            <th scope="col">Current Status</th>
            <th scope="col">Update Status</th>
            {/* <th scope="col">Delete</th>
                        <th scope="col">Update</th> */}
          </tr>
        </thead>
        {details.map((detail, index) => (
          <tbody key={detail._id}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{detail.regId}</td>
              <td>{detail.fullName}</td>
              <td>{detail.email}</td>
              <td>{formatDate(detail.dateOfBirth)}</td>
              <td>{detail.gender}</td>
              <td>{detail.mobileNumber}</td>
              <td>{detail.year}</td>
              <td>{detail.branch}</td>
              <td>{detail.homeAddress}</td>
              <td>{detail.block}</td>
              <td>{detail.status}</td>
              <td>
                <button style={{    width: '131px'}} onClick={() => handleUpdateStatusClick(detail)}>
                  Update Status
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      {showCard && (
        <div className="card mt-4" style={{ width: "400px", margin: "0 auto" }}>
          <div className="card-body">
            <h5 className="card-title">
              Update Allotment Status of {selectedrow.fullName}
            </h5>

            <form
              className="container"
              style={{ paddingBottom: "4rem" }}
              onSubmit={handleUpdateStatus}
            >
              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  id="Alloted"
                  value="Alloted"
                  onChange={() => handleStatusChange("Alloted")}
                  className="form-check-input"
                />
                <label htmlFor="Alloted" className="form-check-label">
                  Alloted
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  id="Waitlisted"
                  value="Waitlisted"
                  onChange={() => handleStatusChange("Waitlisted")}
                  className="form-check-input"
                />
                <label htmlFor="Waitlisted" className="form-check-label">
                  Waitlisted
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  id="Rejected"
                  value="Rejected"
                  onChange={() => handleStatusChange("Rejected")}
                  className="form-check-input"
                />
                <label htmlFor="Rejected" className="form-check-label">
                  Rejected
                </label>
              </div>

              <button
                type="submit"
                style={{ cursor: "pointer" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionReceived;
