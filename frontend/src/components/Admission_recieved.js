import React,{ useState, useEffect } from 'react'
import axios from 'axios';


const Admission_recieved = () => {
    const [details, setDetails] = useState([]);
    //1. get all students admission data
    useEffect( () =>  {
         axios.get(
            "http://localhost:5000/api/admission/fetchallstudents")
        .then((response) => setDetails(response.data))
        .catch((error) => console.error(error));
    }, []);

    return (
        <>
            <table className="table table-dark table-striped container" style={{ flex: 1, width: '50%', height: '50%', float: 'left' }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Registration No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact No.</th>
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
                            <td>{detail.mobileNumber}</td>
                            {/* <td><i className="fa-solid fa-trash mx-2" onClick={() => handleDelete(detail._id)}></i></td>
                            <td><i className="fa-regular fa-pen-to-square mx-2" onClick={() => handleUpdate1()}></i></td> */}
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}

export default Admission_recieved
