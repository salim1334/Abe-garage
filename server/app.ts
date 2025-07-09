import express from 'express';
import dbConfig from './config/db.config';
import path from 'path';
import dotenv from 'dotenv';
// Use the routes
import routes from './routes/index';
import cors from 'cors';
import sanitize from 'sanitize';

dotenv.config({
  path: 'C:UsersWINDOWS1DesktopEVANGADIPhase-5Abe_Garageserver/.env',
});


// Create a variable to store the port number
const PORT = process.env.PORT || 8000;

// Create an instance of express
const app = express();

// Use the routes
app.use(express.json());

// add cors
app.use(cors({
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200,
}));

// add senitize
app.use(sanitize.middleware);

// Use the routes
app.use(routes);

// test the server
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app to be used in other files
export default app;
