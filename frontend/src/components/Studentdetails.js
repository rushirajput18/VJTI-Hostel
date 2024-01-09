import React, { useState } from "react";

function StudentDetails() {
  const containerClass = "";
  const tableClass = "table table-striped";
  const entriesPerPage = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;

  const students = [
    { id: 1, firstName: "Akash", lastName: "Dhamane", collegeId: "211080051" },
    { id: 2, firstName: "Akash", lastName: "Dhamane", collegeId: "211080052" },
    { id: 3, firstName: "Akash", lastName: "Dhamane", collegeId: "211080053" },
    { id: 4, firstName: "Akash", lastName: "Dhamane", collegeId: "211080054" },
    { id: 5, firstName: "Akash", lastName: "Dhamane", collegeId: "211080055" },
    { id: 6, firstName: "Akash", lastName: "Dhamane", collegeId: "211080056" },
    { id: 7, firstName: "Akash", lastName: "Dhamane", collegeId: "211080057" },
    { id: 8, firstName: "Akash", lastName: "Dhamane", collegeId: "211080058" },
    { id: 9, firstName: "Akash", lastName: "Dhamane", collegeId: "211080059" },
    { id: 10, firstName: "Akash", lastName: "Dhamane", collegeId: "211080060" },
    { id: 11, firstName: "Akash", lastName: "Dhamane", collegeId: "211080061" },
    { id: 12, firstName: "Akash", lastName: "Dhamane", collegeId: "211080062" },
    { id: 13, firstName: "Akash", lastName: "Dhamane", collegeId: "211080063" },
    { id: 14, firstName: "Akash", lastName: "Dhamane", collegeId: "211080064" },
    { id: 15, firstName: "Akash", lastName: "Dhamane", collegeId: "211080065" },
    { id: 16, firstName: "Akash", lastName: "Dhamane", collegeId: "211080066" },
    { id: 17, firstName: "Akash", lastName: "Dhamane", collegeId: "211080067" },
    { id: 18, firstName: "Akash", lastName: "Dhamane", collegeId: "211080068" },
    { id: 19, firstName: "Akash", lastName: "Dhamane", collegeId: "211080069" },
    { id: 20, firstName: "Akash", lastName: "Dhamane", collegeId: "211080070" },
    { id: 21, firstName: "Akash", lastName: "Dhamane", collegeId: "211080071" },
    { id: 22, firstName: "Akash", lastName: "Dhamane", collegeId: "211080072" },
    { id: 23, firstName: "Akash", lastName: "Dhamane", collegeId: "211080073" },
    { id: 24, firstName: "Akash", lastName: "Dhamane", collegeId: "211080074" },
    { id: 25, firstName: "Akash", lastName: "Dhamane", collegeId: "211080075" },
    { id: 26, firstName: "Akash", lastName: "Dhamane", collegeId: "211080076" },
    { id: 27, firstName: "Akash", lastName: "Dhamane", collegeId: "211080077" },
    { id: 28, firstName: "Akash", lastName: "Dhamane", collegeId: "211080078" },
    { id: 29, firstName: "Akash", lastName: "Dhamane", collegeId: "211080079" },
    { id: 30, firstName: "Akash", lastName: "Dhamane", collegeId: "211080080" },
    { id: 31, firstName: "Akash", lastName: "Dhamane", collegeId: "211080081" },
    { id: 32, firstName: "Akash", lastName: "Dhamane", collegeId: "211080082" },
    { id: 33, firstName: "Akash", lastName: "Dhamane", collegeId: "211080083" },
    { id: 34, firstName: "Akash", lastName: "Dhamane", collegeId: "211080084" },
    { id: 35, firstName: "Akash", lastName: "Dhamane", collegeId: "211080085" },
    { id: 36, firstName: "Akash", lastName: "Dhamane", collegeId: "211080086" },
    { id: 37, firstName: "Akash", lastName: "Dhamane", collegeId: "211080087" },
    { id: 38, firstName: "Akash", lastName: "Dhamane", collegeId: "211080088" },
    { id: 39, firstName: "Akash", lastName: "Dhamane", collegeId: "211080089" },
    { id: 40, firstName: "Akash", lastName: "Dhamane", collegeId: "211080090" },
    { id: 41, firstName: "Akash", lastName: "Dhamane", collegeId: "211080091" },
    { id: 42, firstName: "Akash", lastName: "Dhamane", collegeId: "211080092" },
    { id: 43, firstName: "Akash", lastName: "Dhamane", collegeId: "211080093" },
    { id: 44, firstName: "Akash", lastName: "Dhamane", collegeId: "211080094" },
    { id: 45, firstName: "Akash", lastName: "Dhamane", collegeId: "211080095" },
    { id: 46, firstName: "Akash", lastName: "Dhamane", collegeId: "211080096" },
    { id: 47, firstName: "Akash", lastName: "Dhamane", collegeId: "211080097" },
    { id: 48, firstName: "Akash", lastName: "Dhamane", collegeId: "211080098" },
    { id: 49, firstName: "Akash", lastName: "Dhamane", collegeId: "211080099" },
    { id: 50, firstName: "Akash", lastName: "Dhamane", collegeId: "211080100" },
    { id: 51, firstName: "Akash", lastName: "Dhamane", collegeId: "211080101" },
    // ... Your student data here
  ];

  // Filter students based on search query
  const filteredStudents = students.filter((student) =>
    student.collegeId.includes(searchQuery)
  );

  const totalEntries = filteredStudents.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const displayedStudents = filteredStudents.slice(startIndex, endIndex);

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset page when search query changes
  };

  return (
    <div className={containerClass}>
      <h1 className="text-center" style={{ paddingBottom: "1em" }}>
        Student Details
      </h1>

      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="input-group mb-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search by College ID"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ width: "150px" }} // Adjust the width as needed
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-success m-2 "
                type="submit"
                style={{ padding: "1px 50px 1px 1px", marginTop: "-6px" }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          {totalEntries === 0 ? (
            <p className="text-center">No data found.</p>
          ) : (
            <table className={tableClass}>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">College ID</th>
                </tr>
              </thead>
              <tbody>
                {displayedStudents.map((student, index) => (
                  <tr key={student.id}>
                    <th scope="row">{startIndex + index + 1}</th>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.collegeId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="col-md-8 offset-md-2 text-center">
          <button type="button" className="btn btn-primary btn-sm mx-2">
            Add
          </button>
          <button type="button" className="btn btn-danger btn-sm mx-2">
            Delete
          </button>
          <button type="button" className="btn btn-warning btn-sm mx-2">
            Update
          </button>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="row mt-2">
          <div className="col-md-8 offset-md-2 text-center">
            <ul className="pagination">
              {Array.from({ length: totalPages }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDetails;
