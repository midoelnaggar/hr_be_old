const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 4000;
const employeeRoute =  require('./routes/employeeRoute');

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://mido:1234@cluster0-vppfv.gcp.mongodb.net/pssHr?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
 
// CORS setup
app.use(cors());

employeeRoute(app);

app.listen(PORT, () => 
    console.log(`Running on port ${PORT}`)
);