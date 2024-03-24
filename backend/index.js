const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')
const app = express();

const { isAdmin, isBasicUser } = require('./middleware/userType.js'); // Import your authentication middleware here

connectToMongo();
const port = 5000;

app.use(cors())
app.use(express.json());

// app.use('/api/students', isAdmin);

//available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/students',require('./routes/students'))
app.use('/api/admins',require('./routes/admins'))
app.use('/api/complaintsent',require('./routes/complaintsent'))
app.use('/api/admission',require('./routes/admission'))


app.listen(port, () => {
  console.log(`VJTI Hostel app is listening on port ${port}`);
});