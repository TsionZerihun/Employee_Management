import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Button,
  Typography,
  Container,
} from '@mui/material';

interface MemberData {
  name: string;
  maritalStatus: 'Single' | 'Married' | 'Divorced';
  haveChildren: boolean;
  isSpouseMember: boolean;
  spouseName: string;
}

const FamilyMemberRegistrationForm: React.FC = () => {
  const [memberData, setMemberData] = useState<MemberData>({
    name: '',
    maritalStatus: 'Single',
    haveChildren: false,
    isSpouseMember: false,
    spouseName: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    const newValue = type === 'checkbox' ? checked : value;

    setMemberData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Member Data:', memberData);
    // Add your logic to submit the data to the database or perform other actions.
  };

  return (
    <form onSubmit={handleSubmit}>
         <Container maxWidth="sm" sx={{ bgcolor: '#fff' }} >
      <Typography variant="h5" gutterBottom>
        Family Member Registration
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Marital Status</FormLabel>
        <RadioGroup
          name="maritalStatus"
          value={memberData.maritalStatus}
          onChange={handleChange}
        >
          <FormControlLabel value="Single" control={<Radio />} label="Single" />
          <FormControlLabel value="Married" control={<Radio />} label="Married" />
          <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
        </RadioGroup>
      </FormControl>
      <br/>
      <FormControlLabel
        control={
          <Checkbox
            name="haveChildren"
            checked={memberData.haveChildren}
            onChange={handleChange}
          />
        }
        label="Have Children"
      />
      <br/>
      <FormControlLabel
        control={
          <Checkbox
            name="isSpouseMember"
            checked={memberData.isSpouseMember}
            onChange={handleChange}
          />
        }
        label="Is Spouse a Member"
      />
    <br/>
      {memberData.isSpouseMember && (
        <TextField
          name="spouseName"
          label="Spouse Name"
          value={memberData.spouseName}
          onChange={handleChange}
       
          required
        />
      )
      }
      <br/> 
       <br/>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </Container>
    </form>
  );
};

export default FamilyMemberRegistrationForm;