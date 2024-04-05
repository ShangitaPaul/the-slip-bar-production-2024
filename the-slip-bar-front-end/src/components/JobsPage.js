import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobList from './JobList';
import JobDetails from './JobDetail'; // Assuming JobDetails component exists
import '../styles/JobsPage.css';

function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        console.log('process.env.REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
        setJobs(response.data);
        setFilteredJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (locationFilter) {
      const filtered = jobs.filter(job => job.location === locationFilter);
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs(jobs);
    }
  }, [locationFilter, jobs]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="jobs-page">
      <h2 className="page-title">Come Join Us!</h2>
      <div className="filter-section">
        <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
          <option value="">All Locations</option>
          <option value="Lomita">Lomita</option>
          <option value="Redondo Beach">Redondo Beach</option>
        </select>
      </div>
      <JobList jobs={filteredJobs} onJobClick={handleJobClick} />
      {selectedJob ? <JobDetails job={selectedJob} /> : null}
    </div>
  );
}

export default JobsPage;