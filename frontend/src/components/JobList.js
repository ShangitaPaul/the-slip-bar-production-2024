// JobList.js
import React, { useState } from 'react';
import JobDetail from './JobDetail';

function JobList({ jobs }) {
  const [expandedJobId, setExpandedJobId] = useState(null);

  const toggleJobDetails = (jobId) => {
    setExpandedJobId(prevJobId => prevJobId === jobId ? null : jobId);
  };

  return (
    <ul>
      {jobs.map(job => (
        <li key={job.id}>
          <div>
            <h3>{job.title}</h3>
            <button onClick={() => toggleJobDetails(job.id)}>
              {expandedJobId === job.id ? 'Hide Details' : 'Show Details'}
            </button>
          </div>
          {expandedJobId === job.id && <JobDetail job={job} />}
        </li>
      ))}
    </ul>
  );
}

export default JobList;
