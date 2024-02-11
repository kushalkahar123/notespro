const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // For environment variables

const app = express();
const port = process.env.PORT || 5000;  

// Middleware
app.use(cors()); // Allow cross origin requests
app.use(express.json()); // Parse JSON data in requests

// MongoDB connection
const uri = process.env.MONGO_URI; // Store your Atlas URI in .env file
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
