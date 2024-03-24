import Map from './components/Map'

import React, { useState } from 'react';
import Sliding from './components/Sliding';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentNotice from './components/StudentNotice';
import Login from './components/Login';
import Alert from './components/Alert';
import Admission from './components/Admission';
import Studentdetails from './components/Studentdetails';
import Facilities from './components/Facilities';
import Complaint from './components/Complaint';
import SendComplaint from './components/SendComplaint';
import AdmissionReceived from './components/AdmissionReceived';
import AboutVJTI from './components/AboutVJTI';
function App() {
 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
    <Router>
      <Navbar />
      <Alert alert={alert}/>
      <div className='w-100px'>
      <Routes>
      <Route exact path='/login' element={<Login /> } />
      {/* <Route exact path='/signup' element={<Signup  />} /> */}
      <Route exact path="/map" element= {<Map />}/>
      <Route exact path="/" element= {<Sliding/>}/>
      <Route exact path="/sendcomplaint" element= {<SendComplaint />}/>
      <Route path="/complaint" element={<Complaint/>} />      
      <Route exact path="/facilities" element= {<Facilities/>}/>
      <Route exact path="/admission" element = {<Admission />} />
      <Route exact path="/studentNotice" element= {<StudentNotice 
      />}/>
      <Route exact path="/Studentdetails" element={<Studentdetails />}/>
      <Route exact path="/admissionreceived" element={<AdmissionReceived />}/>
      <Route exact path="/aboutvjti" element={<AboutVJTI />}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;