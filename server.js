const express = require('express');
const path = require('path');
//const Home = require('./frontend/dist/src/components/home.js'); // Correct file path for Home component

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the 'frontend/dist' directory
app.use(express.static(path.join(__dirname, 'frontend', 'dist', 'build')));

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
  // if req.params[0] is not defined then send the index.html file
  file = req.params[0] ? req.params[0] : 'index.html';

  res.sendFile(__dirname + '/frontend/dist/public/' + file);

});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
