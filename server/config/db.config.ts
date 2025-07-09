// Import the mysql2 module Promise Wrapper
import mysql from 'mysql2/promise';

// Prepare static connection parameters to connect to the database
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  connectionLimit: 10,
};

// Create a connection pool to the database
const pool = mysql.createPool(dbConfig);

console.log('Starting DB connection test...');
// Test the database connection and log a message
(async () => {
  console.log('Inside DB connection test...');
  try {
    const conn = await pool.getConnection();
    console.log('Database connected successfully!');
    conn.release();
  } catch (err) {
    console.error('Database connection failed:', err);
  }
  console.log('DB connection test finished.');
})();

// Prepare a function that will execute a query asynchronously
async function query(sql: string, params: any[]) {
  try {
    const [rows] = await pool.execute(sql, params);
    return rows;
  } catch (error) {
    console.error('Error executing query:', error);
    throw error;
  }
}

// Export the query function to be used in other files
export default { query };
