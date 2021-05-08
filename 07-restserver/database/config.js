const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : process.env.HOST_DB,
  user     : process.env.USER_DB,
  password : process.env.PASS_DB,
  database : process.env.DATABASE_DB
});
 
const dbConnection = () => {
    
    try {
        connection.connect();
        console.log('db online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la conexion con db');
    }

    return connection;

}

module.exports = {
    dbConnection
}