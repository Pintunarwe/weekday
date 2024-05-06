// JobFilters.jsx

import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, TextField, Button } from '@mui/material';

const JobFilters = ({ filters, setFilters, applyFilters }) => {
  const handleFilterChange = (event) => {
    const { name, value, checked, type } = event.target;
    const updatedFilters = { ...filters };
    updatedFilters[name] = type === 'checkbox' ? checked : value;
    setFilters(updatedFilters);
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="min-experience-label">Min Experience</InputLabel>
        <Select
          labelId="min-experience-label"
          id="min-experience"
          name="minExperience"
          value={filters.minExperience}
          onChange={handleFilterChange}
        >
          {/* Options for min experience */}
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel id="company-name-label">Company Name</InputLabel>
        <Select
          labelId="company-name-label"
          id="company-name"
          name="companyName"
          value={filters.companyName}
          onChange={handleFilterChange}
        >
         
        </Select>
      </FormControl>

    
      <FormControlLabel
        control={<Checkbox checked={filters.remote} onChange={handleFilterChange} name="remote" />}
        label="Remote"
      />

      <TextField
        label="Tech Stack"
        name="techStack"
        value={filters.techStack}
        onChange={handleFilterChange}
      />

      <Button variant="contained" color="primary" onClick={applyFilters}>
        Apply Filters
      </Button>
    </div>
  );
};

export default JobFilters;
