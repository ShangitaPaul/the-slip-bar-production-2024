// JobDetail.js
import React from 'react';

const JobDetail = ({ job }) => {
  return (
    <div className="details">
      <p>{job.description}</p>
      <div className="instructions">
        <p>
          Please email your resume to{' '}
          <a href={`mailto:info@theslipbar.com?subject=Applying for job ID ${job.id}`}>
            info@theslipbar.com
          </a>{' '}
          with "Job ID {job.id}" in the Subject field
        </p>
      </div>
    </div>
  );
};

export default JobDetail;
