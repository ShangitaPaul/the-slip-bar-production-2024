// JobListItem.js
import React from 'react';
import JobDetail from './JobDetail';

const JobListItem = ({ job, expanded, toggleDetails }) => {
  return (
    <div className={`job-card ${expanded ? 'expanded' : ''}`}>
      <div className="job-header">
        <div className="job-header-content">
          <h2>{job.title.charAt(0).toUpperCase() + job.title.slice(1)}</h2>
          <p>Location: {job.location}</p>
          <p>Job ID: {job.id}</p>
          <button className="details-button" onClick={() => toggleDetails(job.id)}>
            {expanded ? 'Close Details' : 'Open Details'}
          </button>
          {expanded && <JobDetail job={job} />}
        </div>
      </div>
    </div>
  );
};

export default JobListItem;
