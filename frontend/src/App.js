import Map from './components/Map'

import React, { useState } from 'react';
import Sliding from './components/sliding';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentNotice from './components/StudentNotice';
import notices from './data/notices';
import Login from './components/Login';
import Signup from './components/Signup';
import Alert from './components/Alert';
import Admission from './components/Admission';
import Studentdetails from './components/Studentdetails';
import Facilities from './components/Facilities';
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
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
      <Navbar toggleDarkTheme={toggleDarkTheme} isDarkTheme={isDarkTheme} />
      <Alert alert={alert}/>
      <div className='w-100px'>
      <Routes>
      <Route exact path='/login' element={<Login isDarkTheme={isDarkTheme} showAlert={showAlert}/> } />
      <Route exact path='/signup' element={<Signup isDarkTheme={isDarkTheme} showAlert={showAlert}/>} />
      <Route exact path="/map" element= {<Map  isDarkTheme={isDarkTheme} showAlert={showAlert}/>}/>
      <Route exact path="/" element= {<Sliding  isDarkTheme={isDarkTheme} />}/>
      <Route exact path="/facilities" element= {<Facilities  isDarkTheme={isDarkTheme} />}/>
      <Route exact path="/admission" element = {<Admission isDarkTheme={isDarkTheme}/>} />
      <Route exact path="/studentNotice" element= {<StudentNotice notices={notices} isDarkTheme={isDarkTheme} 
      showAlert={showAlert}/>}/>
      <Route exact path="/Studentdetails" element={<Studentdetails/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;