import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Studentdetails = () => {

    const [details, setDetails] = useState([]);
    const [selectedrow, setSelectedrow] = useState({ Student_ID: "", Name: "", Gender: "", Home_Address: "", Phone_Number: "", Parent_Phone_Number: "", Hostel_Block: "" });
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
        await axios
            .post('http://localhost:5000/api/students/addstudent', formData)
            

    };
    const onClickRow = (studentrow) => {
        setSelectedrow(studentrow);
    }
    //1. get all studentd data
    useEffect(() => {
        axios.get('http://localhost:5000/api/students/fetchallstudents').then((response) => {
            setDetails(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    //3.DELETE
    const handleDelete = async(id) =>{
        await axios
      .delete(`http://localhost:5000/api/students/deletestudent/${id}`)
      .then(() => {
        const newDetails = details.filter((detail)=> {return detail._id!==id})
        setDetails(newDetails);
      });
    }
    return (
        <div>
            {/* <ul>{details.map(detail => <li key={detail._id}>{detail.Name}</li>)}</ul> */}
            <div style={{ padding: '2rem', border: "2px solid red", display: 'flex', alignContent: 'flex-start' }}>
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
                    {details.map((detail, index) => <tbody key={detail._id} >
                        <tr onClick={() => onClickRow(detail)}>
                            <th scope="row">{index + 1}</th>
                            <td>{detail.Student_ID}</td>
                            <td>{detail.Name}</td>
                            <td>{detail.Phone_Number}</td>
                            <td><i className="fa-solid fa-trash mx-2" onClick={()=>handleDelete(detail._id)}></i></td>
                            <td><i className="fa-regular fa-pen-to-square mx-2"  ></i></td>
                        </tr>
                    </tbody>)}
                </table>
                <div >
                    <div class="card container" style={{ width: '20rem', }}>
                        <div class="card-header">
                            DETAILS
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Student ID : {selectedrow.Student_ID}</li>
                            <li class="list-group-item">Name : {selectedrow.Name}</li>
                            <li class="list-group-item">Email : {selectedrow.Email}</li>
                            <li class="list-group-item">Student Phone No. : {selectedrow.Phone_Number}</li>
                            <li class="list-group-item">Parent Phone No. : {selectedrow.Parent_Phone_Number}</li>
                            <li class="list-group-item">Gender : {selectedrow.Gender}</li>
                            <li class="list-group-item">Home Address : {selectedrow.Home_Address}</li>
                            <li class="list-group-item">Hostel Room No. : {selectedrow.Block}</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div style={{ padding: '2rem', paddingTop: '5rem' }} >
                <form className='container' style={{ paddingBottom: '4rem' }} onSubmit={handleSubmit}>
                    <h1>Add new Student</h1>
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
                        <label htmlFor="hostelRoomNo" className="form-label">Hostel Room No.</label>
                        <input type="text" className="form-control" id="hostelRoomNo" name="Hostel_Block" value={formData.Hostel_Block} onChange={handleChange} />
                    </div>
                    <div >
                        <button type="submit" className="btn btn-primary" style={{ width: '5rem' }}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Studentdetails