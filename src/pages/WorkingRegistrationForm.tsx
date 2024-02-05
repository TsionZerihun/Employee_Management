import React, { FormEvent, useState } from 'react';
import { 
  TextField,
   Button, 
   FormControl, 
   FormLabel,
    RadioGroup, 
    FormControlLabel, 
    Container,
    Radio } from '@mui/material';

const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useState({
    AreEmployee: '',
    CurrentWorkPlace: '',
    NameofOrganization: '',
    WorkResponsibility: '',
    WorkStatus: '',
    CurrentJobPosition: '',
  });

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log(registrationData);

    // Reset form fields
    setRegistrationData({
      AreEmployee: '',
      CurrentWorkPlace: '',
      NameofOrganization: '',
      WorkResponsibility: '',
      WorkStatus: '',
      CurrentJobPosition: '',
    });
  };

  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#fff' }} >
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset" fullWidth margin="normal">
        <FormLabel component="legend">Are you currently employed?</FormLabel>
        <RadioGroup
          name="AreEmployee"
          value={registrationData.AreEmployee}
          onChange={handleInputChange}
          row
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      {registrationData.AreEmployee === 'yes' && (
        <>
          <TextField
            label="Current Workplace"
            name="CurrentWorkPlace"
            value={registrationData.CurrentWorkPlace}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Name of Organization"
            name="NameofOrganization"
            value={registrationData.NameofOrganization}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Work Responsibility"
            name="WorkResponsibility"
            value={registrationData.WorkResponsibility}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Work Status"
            name="WorkStatus"
            value={registrationData.WorkStatus}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Current Job Position"
            name="CurrentJobPosition"
            value={registrationData.CurrentJobPosition}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </>
      )}

      <Button type="submit"  variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </Container>
  );
};

export default RegistrationForm;