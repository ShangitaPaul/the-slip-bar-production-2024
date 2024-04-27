// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('./frontend/dist/src/components/home.js'); // Correct file path for Home component

const app = express();

app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
const PORT = process.env.PORT || 5000;

app.use(cors());

// Dummy job data with location information
const jobs = [
  {
    id: '04/05',
    time: '8:00 PM',
    title: 'Michael Forbes Band',
    description: 'Classic Rock',
    location: 'Redondo Beach'
  },
  // Add other job objects here...
];

// Middleware
app.use(bodyParser.json());

// Routes
app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/jobs/:id', (req, res) => {
  const jobId = req.params.id;
  const job = jobs.find(job => job.id === jobId);

  if (!job) {
    return res.status(404).json({ error: 'Job not found' });
  }

  res.json(job);
});

// Serve frontend
app.get('/', (req, res) => {
  // Render the Home component to HTML
  const html = ReactDOMServer.renderToString(React.createElement(Home));

  // Serve the rendered HTML as the response
  res.send(html);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});