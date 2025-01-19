require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
const PORT = 5006;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', emailRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
