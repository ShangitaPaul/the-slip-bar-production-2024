const express = require('express');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('./frontend/dist/src/components/home.js'); // Correct file path for Home component

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the 'frontend/dist' directory
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Serve frontend
app.get('/favicon.ico', (req, res) => {
  // Send an empty response for the favicon request
  res.status(204).end();
});

app.get('*', (req, res) => {
  // Render the Home component to HTML
  const html = ReactDOMServer.renderToString(React.createElement(Home));

  // Serve the rendered HTML as the response
  res.send(html);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
