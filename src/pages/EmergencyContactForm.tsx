import React, { useState, FormEvent } from 'react';
import { TextField, Button,Container } from '@mui/material';


const EmergencyContactForm = () => {
  const [emergencyContact, setEmergencyContact] = useState({
    EmergName: '',
    EmergPhone: '',
    EmergRelation: '',
    EmergEmail: '',
    EmergAddress: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmergencyContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log(emergencyContact);

    // Reset form fields
    setEmergencyContact({
      EmergName: '',
      EmergPhone: '',
      EmergRelation: '',
      EmergEmail: '',
      EmergAddress: '',
    });
  };

  return (
    <Container maxWidth="sm" sx={{ bgcolor: '#fff' }}>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        name="EmergName"
        value={emergencyContact.EmergName}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="EmergPhone"
        value={emergencyContact.EmergPhone}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Relation"
        name="EmergRelation"
        value={emergencyContact.EmergRelation}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="EmergEmail"
        value={emergencyContact.EmergEmail}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Address"
        name="EmergAddress"
        value={emergencyContact.EmergAddress}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </Container>
  );
};

export default EmergencyContactForm;