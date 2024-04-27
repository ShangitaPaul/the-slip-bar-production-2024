const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
//const Home = require('./frontend/dist/src/components/home.js'); // Correct file path for Home component

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the 'frontend/dist' directory
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// set up a jobs endpoint to return a list of jobs
app.get('/jobs', (req, res) => {
  res.json([
    { id: 1, title: 'Software Engineer', company: 'Google' },
    { id: 2, title: 'Product Manager', company: 'Facebook' },
    { id: 3, title: 'Data Scientist', company: 'Amazon' }
  ]);
});

// Serve frontend
app.get('/favicon.ico', (req, res) => {
  // Send an empty response for the favicon request
  res.sendFile(__dirname + '/frontend/dist/public/favicon.ico');

});

app.get('*', (req, res) => {
  // Redirect to the slipbar homepage
  res.sendFile(__dirname + '/frontend/dist/public/index.html');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
