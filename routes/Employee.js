const express = require('express');
const mysql = require('mysql2')
const empApp = express.Router();

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'manager',
//     database: 'employeedb'
// });

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: 'manager',
    database: 'employeedb',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  })




empApp.get('/:name', (request, response) => {

    
    var query = `select * from Employee_Table where name = '${request.params.name}' `;


    connection.query(query, (error, result) => {

        if (error == null) {

            console.log(result);
            response.send(result);

        } else {

            console.log(error);
            response.send(result);

        }

    });
});

empApp.post('/addemp', (request, response) => {

    var query = `insert into Employee_Table values (${request.body.id}, '${request.body.name}', '${request.body.email}', '${request.body.password}', ${request.body.emp_id}, '${request.body.dname}', '${request.body.doj}')`


    connection.query(query, (error, result) => {

        if (error == null) {

            console.log(result);
            response.send(result);

        } else {

            console.log(error);
            response.send(result);

        }

    });
});


empApp.delete('/:doj', (request, response) => {

    var query = `delete from Employee_Table where doj = '${request.params.doj}'`;


    connection.query(query, (error, result) => {

        if (error == null) {

            console.log(result);
            response.send(result);

        } else {

            console.log(error);
            response.send(result);

        }

    });
});

empApp.delete('/:doj', (request, response) => {

    var query = `delete from Employee_Table where doj = '${request.params.doj}'`;


    connection.query(query, (error, result) => {

        if (error == null) {

            console.log(result);
            response.send(result);

        } else {

            console.log(error);
            response.send(result);

        }

    });
});


empApp.put('/:id', (request, response) => {

    var query = `update Employee_Table set dname = '${request.body.dname}', doj = '${request.body.doj}' where id = ${request.params.id}`;


    connection.query(query, (error, result) => {

        if (error == null) {

            console.log(result);
            response.send(result);

        } else {

            console.log(error);
            response.send(result);

        }

    });
});





module.exports = empApp



