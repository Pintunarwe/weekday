


import React from 'react';
import { Card, CardContent, Typography, Button, Collapse } from '@mui/material';
import sampleJobs from './Data/SampleData';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="subtitle1">{job.company}</Typography>
        <Typography variant="subtitle2">{job.location}</Typography>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body2">{job.description}</Typography>
        </Collapse>
        <Button onClick={handleExpandClick} color="primary">
          {expanded ? 'Read Less' : 'Read More'}
        </Button>
        <Typography variant="body2">Experience: {job.experience}</Typography>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

const JobCardList = () => {
  return (
    <>
      {sampleJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </>
  );
};

export default JobCardList;
