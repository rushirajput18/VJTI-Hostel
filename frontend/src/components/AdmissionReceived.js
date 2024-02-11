import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/AdmissionReceived.css'; // Import CSS file

const AdmissionReceived = () => {
    const [originalDetails, setOriginalDetails] = useState([]);
    const [details, setDetails] = useState([]);
    const [searchId, setSearchId] = useState('');
    const [searchCategory, setSearchCategory] = useState('ID');

    useEffect(() => {
        axios.get("http://localhost:5000/api/admission/fetchallstudents")
            .then((response) => {
                setOriginalDetails(response.data);
                setDetails(response.data);
            })
            .catch((error) => console.error(error));
    }, []);

    const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        return dateObject.toISOString().split('T')[0];
    };

    const handleSearch = () => {
        if (!searchId.trim()) {
            alert('Please enter a search term.');
            return;
        }

        // Trim the search term
        const trimmedSearchTerm = searchId.trim().toLowerCase();

        // Filter originalDetails based on search term and category
        const filteredDetails = originalDetails.filter(detail => {
            if (searchCategory === 'ID') {
                return String(detail.regId).includes(trimmedSearchTerm);
            } else if (searchCategory === 'Branch') {
                return detail.branch.toLowerCase().includes(trimmedSearchTerm);
            } else if (searchCategory === 'Year') {
                return detail.year.toLowerCase().includes(trimmedSearchTerm);
            } else if (searchCategory === 'Gender') {
                return detail.gender.toLowerCase().includes(trimmedSearchTerm);
            }
            return false;
        });

        if (filteredDetails.length === 0) {
            alert('No student found with the provided search term.');
        } else {
            setDetails(filteredDetails);
        }
    };

    const handleReset = () => {
        setDetails(originalDetails);
        setSearchId('');
    };

    return (
        <div style={{ marginTop: '20px', marginLeft: '170px' }}>
            <h2>Admission Received</h2>
            <div style={{ marginBottom: '10px' }}>
                <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}>
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
            <table className="table table-dark table-striped" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>D.O.B</th>
                        <th>Gender</th>
                        <th>Mobile Number</th>
                        <th>Year</th>
                        <th>Branch</th>
                        <th>Home City</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail, index) => (
                        <tr key={detail._id}>
                            <td>{index + 1}</td>
                            <td>{detail.regId}</td>
                            <td>{detail.fullName}</td>
                            <td>{detail.email}</td>
                            <td>{formatDate(detail.dateOfBirth)}</td>
                            <td>{detail.gender}</td>
                            <td>{detail.mobileNumber}</td>
                            <td>{detail.year}</td>
                            <td>{detail.branch}</td>
                            <td>{detail.homeAddress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdmissionReceived;
