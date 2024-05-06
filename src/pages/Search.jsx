import { Search as SearchIcon, AccountBox as User1Icon, AccountCircle as User2Icon, CurrencyRupee as RupeeIcon } from '@mui/icons-material';
import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import logo from "../assets/logo.png";
import msg from "../assets/msg.png"
import JobCard from './JobCard';

const Search = () => {


  const [jobs, setJobs] = useState([]); 
  const [filters, setFilters] = useState({
    Minexperience: '',
    Companyname: '',
    Location: '',
    Remote: '',
    Techstack: '',
    Role: '',
    Minbasepay: '',

  })

  
  const searchJobs = () => {
    
    const fetchedJobs = []; 
    setJobs(fetchedJobs);
  };

  const applyFilters = () => {

  }







  return (
    <Grid container style={{ height: '100%', display: 'flex' }}>
      <Grid
        item
        xs={1} 
        sm={2}
        md={2}
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px',
          padding: '16px', 
        }}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item>
           
            <div style={{ width: '60px', height: '60px', border: '1px solid #ccc', borderRadius: '50%', overflow: 'hidden' }}>
              <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Grid>
          <Grid item>
            <Typography variant="body1">Get Jobs</Typography>
          </Grid>
          <Grid item>
            <IconButton>
              <User1Icon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <RupeeIcon />
            </IconButton>
          </Grid>
          <Grid item marginTop={"20rem"}>
            <IconButton>
              <User2Icon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11} sm={10} md={10}>
        <Grid container spacing={2}>
          <Grid item xs={12} style={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', paddingRight: '16px', height: '5%', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: '60px', height: '60px', border: '1px solid #ccc', borderRadius: '50%', overflow: 'hidden' }}>
              <img src={msg} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Grid>
          <Grid item >
            
            <Typography xs={12} marginTop={10} marginLeft={60} variant="h6" style={{ cursor: 'pointer', }} onClick={() => alert('SearchJobs clicked')}>
              Search Jobs
            </Typography>

            <Grid container spacing={2} style={{ padding: '16px' }}>
              <Grid item xs={2}>
                <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: '150px' }}>
                  <InputLabel id="role-label">Role</InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    label="Role"
                  >
                    <MenuItem value="Engineering"> Backend</MenuItem>
                    <MenuItem value="Engineering"> Frontend</MenuItem>
                    <MenuItem value="Engineering"> Full Stack</MenuItem>
                    <MenuItem value="Engineering"> IOS</MenuItem>
                    <MenuItem value="Engineering"> Tech Lead</MenuItem>
                    <MenuItem value="Engineering"> Dev-Ops</MenuItem>
                    <MenuItem value="Engineering"> Data Engineer</MenuItem>
                    <MenuItem value="Engineering"> Data Science</MenuItem>
                    <MenuItem value="Engineering"> Computer-vision</MenuItem>
                    <MenuItem value="Engineering"> Deep Learning</MenuItem>
                    <MenuItem value="Engineering"> Test/Qa</MenuItem>
                    <MenuItem value="Engineering"> Sre</MenuItem>
                    <MenuItem value="Engineering"> Data Infrastructure</MenuItem>
                    <MenuItem value="Design">Designer</MenuItem>
                    <MenuItem value="Design"> Design Manager</MenuItem>
                    <MenuItem value="Design"> Graphic Designer</MenuItem>
                    <MenuItem value="Design"> Product Designer</MenuItem>
                    <MenuItem value="Product"> Product Manager</MenuItem>
                    <MenuItem value="Operations"> Operations Manager</MenuItem>
                    <MenuItem value="Operations"> Founders Office /chief of staff</MenuItem>
                    <MenuItem value="Sales"> Sales Development Representative</MenuItem>
                    <MenuItem value="Sales"> Account Executive</MenuItem>
                    <MenuItem value="Sales"> Account Manager</MenuItem>
                    <MenuItem value="Marketing"> Digital Marketing Manager</MenuItem>
                    <MenuItem value="Marketing"> Growth Hacker</MenuItem>
                    <MenuItem value="Marketing"> Marketing</MenuItem>
                    <MenuItem value="Marketing"> Product Marketing Manager </MenuItem>
                    <MenuItem value="Other Engineering"> Hardware</MenuItem>
                    <MenuItem value="Other Engineering"> Mechanical</MenuItem>
                    <MenuItem value=" Other Engineering">  System</MenuItem>
                    <MenuItem value="Business Analyst"> Business Analyst</MenuItem>
                    <MenuItem value="Data Analyst"> Data Analyst</MenuItem>
                    <MenuItem value="Legal"> Legal</MenuItem>
                    <MenuItem value="HR "> HR </MenuItem>
                    <MenuItem value="Finance"> Finance</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: '150px' }}>
                  <InputLabel id="employees-label">No Of Employees</InputLabel>
                  <Select
                    labelId="employees-label"
                    id="employees"
                    label="Employees"
                  >
                    <MenuItem value="employee">1-10</MenuItem>
                    <MenuItem value="employee">11-20</MenuItem>
                    <MenuItem value="employee">21-50</MenuItem>
                    <MenuItem value="employee">51-100</MenuItem>
                    <MenuItem value="employee">101-200</MenuItem>
                    <MenuItem value="employee">201-500</MenuItem>
                    <MenuItem value="employee">500+</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: '150px' }}>
                  <InputLabel id="experience-label">Experience</InputLabel>
                  <Select
                    labelId="experience-label"
                    id="experience"
                    label="Experience"
                  >
                    <MenuItem value="experience">1</MenuItem>
                    <MenuItem value="experience">2</MenuItem>
                    <MenuItem value="experience">3</MenuItem>
                    <MenuItem value="experience">4</MenuItem>
                    <MenuItem value="experience">5</MenuItem>
                    <MenuItem value="experience">6</MenuItem>
                    <MenuItem value="experience">7</MenuItem>
                    <MenuItem value="experience">8</MenuItem>
                    <MenuItem value="experience">9</MenuItem>
                    <MenuItem value="experience">10</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: '150px' }} >
                  <InputLabel id="remote-label">Remote</InputLabel>
                  <Select
                    labelId="remote-label"
                    id="remote"
                    label="Remote"
                  >
                    <MenuItem value="remote">Remote</MenuItem>
                    <MenuItem value="Hybrid">Hybrid</MenuItem>
                    <MenuItem value="In-Office">In-Office</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: '150px' }}>
                  <InputLabel id="salary-label">Minimum Base Pay Salary</InputLabel>
                  <Select
                    labelId="salary-label"
                    id="salary"
                    label="Salary"
                  >
                    <MenuItem value="salary">0L</MenuItem>
                    <MenuItem value="salary">1L</MenuItem>
                    <MenuItem value="salary">2L</MenuItem>
                    <MenuItem value="salary">3L</MenuItem>
                    <MenuItem value="salary">4L</MenuItem>
                    <MenuItem value="salary">5L</MenuItem>
                    <MenuItem value="salary">6L</MenuItem>
                    <MenuItem value="salary">7L</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl fullWidth variant="outlined" size="small" sx={{ minWidth: '150px' }}>
                  <TextField size='small' id="company" label="Search Company Name" variant="outlined" />
                  {/* Add MenuItem options for Company */}
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ padding: '16px' }}>
              {
                jobs.map((job) => (
                  <Grid item xs={12} sm={6} md={4} key={job.id}>
                    <JobCard job={job} />
                  </Grid>
                ))
              }
            </Grid>




          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};


export { Search };














// Search.jsx

// import React, { useState } from 'react';
// import { FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
// import { Search as SearchIcon, AccountBox as User1Icon, AccountCircle as User2Icon, CurrencyRupee as RupeeIcon } from '@mui/icons-material';
// import logo from "../assets/logo.png";
// import JobFilters from './JobFilters'; // Import JobFilters component
// import JobCard from './JobCard'; // Import JobCard component

// const Search = () => {
//   const [jobs, setJobs] = useState([]); // State to hold job data
//   const [filters, setFilters] = useState({
//     minExperience: '',
//     companyName: '',
//     remote: false,
//     techStack: '',
//     // Add more filter options as needed
//   });

//   // Function to handle searching for jobs
//   const searchJobs = () => {
//     // Code to fetch job data from API or local source
//     const fetchedJobs = []; // Placeholder for fetched job data
//     setJobs(fetchedJobs); // Update jobs state with fetched data
//   };

//   const applyFilters = () => {
//     // Code to apply filters to job listings
//   };

//   return (
//     <Grid container style={{ height: '100%', display: 'flex' }}>
//       <Grid
//         item
//         xs={1} // Set xs to 1 (5% of the column)
//         sm={2}
//         md={2}
//         sx={{
//           display: { xs: 'none', sm: 'flex' },
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '100%',
//           backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light white background color
//           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Optional: adds a subtle shadow
//           borderRadius: '8px', // Optional: adds rounded corners
//           padding: '16px', // Optional: adds padding inside the grid item
//         }}
//       >
//         <Grid container direction="column" spacing={2}>
//           <Grid item>
//             {/* Design for logo */}
//             <div style={{ width: '60px', height: '60px', border: '1px solid #ccc', borderRadius: '50%', overflow: 'hidden' }}>
//               <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//             </div>
//           </Grid>
//           <Grid item>
//             <Typography variant="body1">Get Jobs</Typography>
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <User1Icon />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <SearchIcon />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             <IconButton>
//               <RupeeIcon />
//             </IconButton>
//           </Grid>
//           <Grid item marginTop={"20rem"}>
//             <IconButton>
//               <User2Icon />
//             </IconButton>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Grid item xs={11} sm={10} md={10}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} style={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', paddingRight: '16px', height: '5%', display: 'flex', justifyContent: 'flex-end' }}>
//             <JobFilters filters={filters} setFilters={setFilters} applyFilters={applyFilters} />
//           </Grid>
//           <Grid item >
//             <Typography xs={12}  marginTop={10} marginLeft={60} variant="h6" style={{ cursor: 'pointer',  }} onClick={() => alert('SearchJobs clicked')}>
//               Search Jobs
//             </Typography>

//             <Grid container spacing={2} style={{ padding: '16px' }}>
//               {/* Render job listings using JobCard component */}
//               {jobs.map((job) => (
//                 <Grid item xs={12} sm={6} md={4} key={job.id}>
//                   <JobCard job={job} />
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export {Search};
