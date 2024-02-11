import React, { useState, useEffect } from 'react'
import axios from 'axios';


const AdmissionReceived = () => {
    const [details, setDetails] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState(''); //to change status in backend
    const [selectedStudentId, setSelectedStudentId] = useState('');
    const [selectedrow, setSelectedrow] = useState({ email: "", fullName: "", dateOfBirth: "", gender: "", mobileNumber: "", regId: "", year: "", branch: "", homeAddress: "", block: "", status: "" });

    const [showCard, setShowCard] = useState(false);

    const handleUpdateStatusClick = (detail) => { //when clicked on update button
        setShowCard(true);
        setSelectedrow(detail);
        setSelectedStudentId(detail._id)
        console.log(detail._id)
    }

    //1. get all students admission data
    useEffect(() => {
        axios.get(
            "http://localhost:5000/api/admission/fetchallstudents")
            .then((response) => setDetails(response.data))
            .catch((error) => console.error(error));
    }, []);
    //////////////////////////////////////////////////////////////////////
    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    const handleUpdateStatus = async () => {

        try {
            await axios.put(`http://localhost:5000/api/admission/updatestudent/${selectedStudentId}`, { status: selectedStatus });
            // Refresh the data after updating status
            // axios.get("http://localhost:5000/api/admission/fetchallstudents")
            //     .then((response) => setDetails(response.data))
            //     .catch((error) => console.error(error));
        } catch (error) {
            console.error('Error updating status:', error);
        }

    };

    //////////////////////////////////////////////////////////////////
    return (
        <>
            <table className="table table-dark table-striped container" style={{ flex: 1, width: '50%', height: '50%', float: 'left' }}>
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
                        <th scope="col">Block</th>
                        <th scope="col">Current Status</th>
                        <th scope="col">Update Status</th>
                        {/* <th scope="col">Delete</th>
                        <th scope="col">Update</th> */}
                    </tr>
                </thead>
                {details.map((detail, index) => (
                    <tbody key={detail._id}>
                        <tr >
                            <th scope="row">{index + 1}</th>
                            <td>{detail.regId}</td>
                            <td>{detail.fullName}</td>
                            <td>{detail.email}</td>
                            <td>{detail.dateOfBirth}</td>
                            <td>{detail.gender}</td>
                            <td>{detail.mobileNumber}</td>

                            <td>{detail.year}</td>
                            <td>{detail.branch}</td>
                            <td>{detail.homeAddress}</td>
                            <td>{detail.block}</td>
                            <td>{detail.status}</td>
                            {/* ////////////////////////////////////////////////////////// */}
                            {/* <td>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`status_${index}`}
                                            value="Alloted"
                                            checked={selectedStatus === 'Alloted'}
                                            onChange={() => handleStatusChange('Alloted', detail._id)}
                                        /> Alloted
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`status_${index}`}
                                            value="Rejected"
                                            checked={selectedStatus === 'Rejected'}
                                            onChange={() => handleStatusChange('Rejected', detail._id)}
                                        /> Rejected
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input
                                            type="radio"
                                            name={`status_${index}`}
                                            value="Waitlisted"
                                            checked={selectedStatus === 'Waitlisted'}
                                            onChange={() => handleStatusChange('Waitlisted', detail._id)}
                                        /> Waitlisted
                                    </label>
                                </div>
                </td>*/}
                            <td>
                                <button onClick={() => handleUpdateStatusClick(detail)}>Update Status</button>
                            </td>
                            {/* /////////////////////////////////////////////////////////////// */}
                        </tr>
                    </tbody>
                ))}
            </table>

            {showCard && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Update Allotment Status of {selectedrow.fullName}</h5>

                        <form className='container' style={{ paddingBottom: '4rem' }} onSubmit={handleUpdateStatus}>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    name="status"
                                    id="Alloted"
                                    value="Alloted"
                                    // checked={selectedStatus === 'A'}
                                    onChange={() => handleStatusChange('Alloted')}
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
                                    // checked={selectedStatus === 'B'}
                                    onChange={() => handleStatusChange('Waitlisted')}
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
                                    // checked={selectedStatus === 'C'}
                                    onChange={() => handleStatusChange('Rejected')}
                                    className="form-check-input"
                                />
                                <label htmlFor="Rejected" className="form-check-label">
                                    Rejected
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary mt-3" onClick={() => handleUpdateStatus()}>
                                Submit
                            </button>
                        </form>


                    </div>
                </div>
            )}
        </>
    )
}

export default AdmissionReceived
