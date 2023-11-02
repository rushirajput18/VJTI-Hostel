import React from 'react';

function Studentdetails() {
  return (
    <div className="container mt-5">
      <h1 className="text-center " style={{paddingBottom:'1em'}}>Student Details</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form className="form-inline my-2 my-lg-0">
            <div className="row">
              <div className="col-8">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              </div>
              <div className="col-4" style={{paddingBottom:'4em'}}>
                <button className="btn btn-outline-success btn-block my-2 my-sm-0" type="submit">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-8 offset-md-2">
          <table className="table table-striped">
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
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="d-grid gap-2 d-md-block fixed-bottom " style={{ position: 'fixed', bottom: '20px', right: '0' }}>
            <button type="button" className="btn btn-primary mx-2">Add</button>
            <button type="button" className="btn btn-danger mx-2">Delete</button>
            <button type="button" className="btn btn-warning mx-2">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentdetails;