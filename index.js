const express = require('express');
const cors = require('cors');
const useEmp = require('./routes/Employee')
const app = express();


app.use(cors({ 'origin': '*' }));

app.use(express.json());

app.use('/employee', useEmp)

app.listen('9898', () => console.log('Server Started at 9898'));