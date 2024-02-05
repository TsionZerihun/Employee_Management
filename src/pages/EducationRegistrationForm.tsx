import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Container,
  Box,
} from '@mui/material';

interface Education {
  qualification: string;
  department: string;
  otherEducation: boolean;
}

const EducationRegistrationForm: React.FC = () => {
  const [education, setEducation] = useState<Education>({
    qualification: '',
    department: '',
    otherEducation: false,
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log(education);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setEducation((prevState) => ({
      ...prevState,
      otherEducation: checked,
    }));
    
  };
  return (
    <div>
      
    <Container maxWidth="sm" 
                      sx={{bgcolor:'#fff'}}  >
    <form onSubmit={handleFormSubmit} >
    
        <InputLabel>Qualification</InputLabel>
        <TextField
          name="qualification"
          value={education.qualification}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
          variant="outlined"
        />
        <InputLabel>Department</InputLabel>
        <TextField
          name="department"
          value={education.department}
          onChange={handleInputChange}
          margin="normal"
          fullWidth
          variant="outlined"
        />
        <br/>
      <FormControlLabel
        control={
          <Checkbox
            name="otherEducation"
            checked={education.otherEducation}
            onChange={handleCheckboxChange}
          />
        }
        label="Other Education"
      /><br/>
      {education.otherEducation && (
        <FormControl  margin="normal" fullWidth>
          <InputLabel>Other Education Details</InputLabel>
          <TextField name="otherDetails" onChange={handleInputChange} />
        </FormControl>
      )}
    
    <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
   
    </form>
    </Container>
    </div>
  );
};
export default EducationRegistrationForm;
/*<Box sx={{marginX:"100px",
display:"block",
 backgroundColor:"red"}}
       mt={20}>*/