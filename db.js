const mysql = require('mysql2')

// Create the connection pool. The pool-specific settings are the defaultsS`
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: 'manager',
  database: 'Employee_Table',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})


module.exports = pool
