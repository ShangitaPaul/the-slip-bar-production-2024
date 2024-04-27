const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Import the path module

const app = express();

app.use(express.static(path.join(__dirname, 'frontend', 'dist'))); // Corrected typo in express.static
const PORT = process.env.PORT || 5000; // Use correct environment variable for Heroku

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
  {
    id: '04/06',
    time: '8:00 PM',
    title: 'Tres Hombres',
    description: 'Joke Rock',
    location: 'Lomita'
  },
  {
    id: '04/07',
    time: '8:00 PM',
    title: 'Taco Tuesday',
    description: 'Get your taco fix with our delicious hard and soft shell tacos',
    location: 'Lomita',
    
  },
  {
    id: '04/08',
    title: 'Pizza Thursday',
    time: '8:00 PM',
    description: 'View our pizza menu on IG and enjoy a delicious pizza with your favorite toppings',
    location: 'Redondo Beach'
  },

  {
    id: '04/12',
    title: 'Mark Fitchet Band',
    time: '8:00 PM',
    description: 'Classic Rock',
    location: 'Lomita'
  
  },

  {
    id: '04/13',
    title: 'Carol & The Time Travelers',
    time: '8:00 PM',
    description: 'Prepares and cooks food according to menu and safety specifications.',
    location: 'Lomita'
  
  }
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
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});