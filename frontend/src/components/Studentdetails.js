import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Studentdetails = () => {
    const [details, setDetails] = useState([]);
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    const [selectedrow, setSelectedrow] = useState({ Student_ID: "", Name: "", Gender: "", Home_Address: "", Phone_Number: "", Parent_Phone_Number: "", Hostel_Room_No: "" });
    const [formData, setFormData] = useState({
        Student_ID: '',
        Name: '',
        Email: '',
        Phone_Number: '',
        Parent_Phone_Number: '',
        Gender: '',
        Home_Address: '',
        Hostel_Room_No: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/students/addstudent', formData);
        window.location.reload();
    };

    const onClickRow = (studentrow) => {
        setSelectedrow(studentrow);
        setIsUpdateFormVisible(true);
        setFormData({
            Student_ID: studentrow.Student_ID,
            Name: studentrow.Name,
            Email: studentrow.Email,
            Phone_Number: studentrow.Phone_Number,
            Parent_Phone_Number: studentrow.Parent_Phone_Number,
            Gender: studentrow.Gender,
            Home_Address: studentrow.Home_Address,
            Hostel_Room_No: studentrow.Hostel_Room_No
        });
    };

    //1. get all student data
    useEffect(() => {
        axios.get('http://localhost:5000/api/students/fetchallstudents')
            .then((response) => {
                setDetails(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    //3.DELETE
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/students/deletestudent/${id}`)
            .then(() => {
                const newDetails = details.filter((detail) => detail._id !== id);
                setDetails(newDetails);
            });
    };
    const handleUpdate = async (e, id) => {
        
        // Use the data from formData and selectedrow to perform the update
        await axios.put(`http://localhost:5000/api/students/updatestudent/${id}`, formData);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setIsUpdateFormVisible(false);
        window.location.reload();
    };

    const [isFormVisible, setIsFormVisible] = useState(false);

    // Function to toggle the visibility of the form
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <>
            <button style={{ width: '200px' }} onClick={toggleFormVisibility}>
                {isFormVisible ? 'View Student Details' : 'Add a new Student'}
            </button>

            {!isFormVisible && (
                <div style={{ padding: '2rem', border: '2px solid red', display: 'flex', alignContent: 'flex-start' }}>
                    {details.length === 0 ? <p>No Student found</p> :
                        <table className="table table-dark table-striped container" style={{ flex: 1, width: '50%', height: '50%', float: 'left' }}>
                           <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Registration No.</th>
          <th scope="col">Name</th>
          <th scope="col">Contact No.</th>
          <th scope="col">Delete</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
      {details.map((detail, index) => (
        <tbody key={detail._id}>
          <tr onClick={() => onClickRow(detail)}>
            <th scope="row">{index + 1}</th>
            <td>{detail.Student_ID}</td>
            <td>{detail.Name}</td>
            <td>{detail.Phone_Number}</td>
            <td><i className="fa-solid fa-trash mx-2" onClick={() => handleDelete(detail._id)}></i></td>
            <td><i className="fa-regular fa-pen-to-square mx-2" onClick={() => handleUpdate(detail._id)}></i></td>
          </tr>
        </tbody>
      ))}
                        </table>
                    }
                       {details.length > 0 && (
      <div>
        <div className="card container" style={{ width: '20rem', marginLeft:'13px'}}>
          <div className="card-header">DETAILS</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Student ID: {selectedrow.Student_ID}</li>
            <li className="list-group-item">Name: {selectedrow.Name}</li>
            <li className="list-group-item">Email: {selectedrow.Email}</li>
            <li className="list-group-item">Student Phone No.: {selectedrow.Phone_Number}</li>
            <li className="list-group-item">Parent Phone No.: {selectedrow.Parent_Phone_Number}</li>
            <li className="list-group-item">Gender: {selectedrow.Gender}</li>
            <li className="list-group-item">Home Address: {selectedrow.Home_Address}</li>
            <li className="list-group-item">Hostel Room No.: {selectedrow.Hostel_Room_No}</li>
          </ul>
        </div>
      </div>
    )}
                </div>
            )}

            {isFormVisible && (
                <div style={{ padding: '2rem', border: "2px solid red", display: 'flex', alignContent: 'flex-start' }}>
                    <h1 style={{justifyContent:'center'}}>Add new Student</h1>
                      <form className='container' style={{ paddingBottom: '4rem' }} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="studentID" className="form-label">Student ID</label>
                        <input type="text" className="form-control" id="studentID" name="Student_ID" value={formData.Student_ID} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="Name" value={formData.Name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="Email" value={formData.Email} onChange={handleChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phoneNumber" name="Phone_Number" value={formData.Phone_Number} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="parentPhoneNumber" className="form-label">Parent Phone Number</label>
                        <input type="text" className="form-control" id="parentPhoneNumber" name="Parent_Phone_Number" value={formData.Parent_Phone_Number} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <input type="text" className="form-control" id="gender" name="Gender" value={formData.Gender} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="homeAddress" className="form-label">Home Address</label>
                        <input type="text" className="form-control" id="homeAddress" name="Home_Address" value={formData.Home_Address} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="hostelRoomNo" className="form-label">Hostel Room No</label>
                        <input type="text" className="form-control" id="hostelRoomNo" name="Hostel_Room_No" value={formData.Hostel_Room_No} onChange={handleChange} />
                    </div>
                    <div >
                        <button type="submit" className="submitButton" style={{}}>Submit</button>
                    </div>
                    </form>
                </div>
            )}
             {isUpdateFormVisible && (
            <div style={{ padding: '2rem', border: '2px solid green', display: 'flex', alignContent: 'flex-start' }}>
                <h1 style={{ justifyContent: 'center' }}>Update Student Details</h1>
                <form className='container' style={{ paddingBottom: '4rem' }} onSubmit={(e) => handleUpdate(e, selectedrow._id)}>
                    {/* ... (same form inputs as in the add new student form) */}
                    <div className="mb-3">
                        <label htmlFor="studentID" className="form-label">Student ID</label>
                        <input type="text" className="form-control" id="studentID" name="Student_ID" value={formData.Student_ID} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="Name" value={formData.Name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="Email" value={formData.Email} onChange={handleChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="phoneNumber" name="Phone_Number" value={formData.Phone_Number} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="parentPhoneNumber" className="form-label">Parent Phone Number</label>
                        <input type="text" className="form-control" id="parentPhoneNumber" name="Parent_Phone_Number" value={formData.Parent_Phone_Number} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <input type="text" className="form-control" id="gender" name="Gender" value={formData.Gender} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="homeAddress" className="form-label">Home Address</label>
                        <input type="text" className="form-control" id="homeAddress" name="Home_Address" value={formData.Home_Address} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="hostelRoomNo" className="form-label">Hostel Room No</label>
                        <input type="text" className="form-control" id="hostelRoomNo" name="Hostel_Room_No" value={formData.Hostel_Room_No} onChange={handleChange} />
                    </div>
                    <div >
                        <button type="submit" className="submitButton" style={{}}>Submit</button>
                    </div>
                    <div>
                        <button type="submit" className="updateButton">Update</button>
                    </div>
                </form>
            </div>
        )}
        </>
    );
};

export default Studentdetails;
