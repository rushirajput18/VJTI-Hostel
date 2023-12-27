import React from "react";

function StudentDetails({ isDarkTheme }) {
  const containerClass = isDarkTheme ? "dark-theme" : "";
  const tableClass = isDarkTheme ? "table table-striped table-dark" : "table table-striped";

  return (
    <div className={containerClass}>
      <h1 className={`text-center ${isDarkTheme ? "text-white" : ""}`} style={{ paddingBottom: "1em" }}>
        Student Details
      </h1>

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="input-group mb-3">
              <input
                className={`form-control ${isDarkTheme ? "bg-dark text-white" : ""}`}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button
                  className={`btn btn-outline-success m-2 ${isDarkTheme ? "btn-dark text-white" : ""}`}
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-8 offset-md-2">
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
                <tr>
                  <th scope="row">1</th>
                  <td>Akash</td>
                  <td>Dhamane</td>
                  <td>211080055</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Rushikesh</td>
                  <td>Rajput</td>
                  <td>211080051</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Vedant</td>
                  <td>Avhad</td>
                  <td>211080054</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Chintan</td>
                  <td>Padia</td>
                  <td>211080052</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-8 offset-md-2 text-center">
            <button type="button" className={`btn btn-primary btn-sm mx-2 ${isDarkTheme ? "btn-dark" : ""}`}>
              Add
            </button>
            <button type="button" className={`btn btn-danger btn-sm mx-2 ${isDarkTheme ? "btn-dark" : ""}`}>
              Delete
            </button>
            <button type="button" className={`btn btn-warning btn-sm mx-2 ${isDarkTheme ? "btn-dark" : ""}`}>
              Update
            </button>
          </div>
        </div>
      </div>
  );
}

export default StudentDetails;
