const Pool = require('pg').Pool;

const pool = new Pool({
user : "postgres",
password : "postgres",
host : "localhost",
port : 5432,
database : "intelligentsforms"

});


module.exports = {
    query: (text, params) => pool.query(text, params),
  }
