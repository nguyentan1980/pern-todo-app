const Pool = require('pg').Pool;

require('dotenv').config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   database: process.env.DB_NAME,
// });

const pool = new Pool({
  connectionString: 'postgresql://postgres:MMMAzz728g534NU8@exam-perntodo-ethan-env.cba6rpvi5fmd.us-east-1.rds.amazonaws.com:5432/perntodo',
});


module.exports = pool;
