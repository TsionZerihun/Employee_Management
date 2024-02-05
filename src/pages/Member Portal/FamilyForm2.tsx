import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, FormLabel,
         Grid, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material';
  enum MaritalStatus {
          single = "Single",
          married = 'Married',
          Divorced = 'Divorced',
        }
        
export interface Family2 {
    maritalStatus: string;
    haveChildren: boolean;
    isSpouseMember: boolean;
    spouseName: string;
  }

interface FamilyFormProps {
  onBack: () => void;
  onNext: (formData: Family2) => void;
}

const  FamilyForm2: React.FC<FamilyFormProps> = ({ onBack, onNext }) => {
  const [formData, setFormData] = useState<Family2>({
  
    maritalStatus: MaritalStatus.single,
    haveChildren: false,
    isSpouseMember: false,
    spouseName: '',
    
  });

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name as string]: value,
     
    }));
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
      const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: checked,
        }));
      };
    

 const handleNext = () => {
 
    onNext(formData);
  };
   
  return (
    <div>
    <form style={{
    width:"100%",
    padding:"20px",
    paddingLeft:"50px",
    paddingRight:"30px",

    
  }} >
   
  <Grid container sx={{
          bgcolor: '#fff',
          boxShadow: '2px 3px 3px 1px #ccc',
          borderRadius:"5px",
          padding:'20px',
               }} 
        spacing={5}
         rowSpacing={2} > 
      <Grid item md={6} sm={6} xs={12}>
      
      <Typography variant="h5" gutterBottom>
        Family Member Registration
      </Typography>

   
 

      <FormControl fullWidth>
        <Typography>Marital Status:</Typography>
        <Select
      
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleSelectChange}
              
        >
          {Object.values(MaritalStatus).map((maritalStatus) => (
            <MenuItem key={maritalStatus} value={maritalStatus}>
              {maritalStatus}
            </MenuItem>
          ))}
        </Select>

       
        
      </FormControl>

   
       

      <FormControlLabel
        control={
          <Checkbox
            name="haveChildren"
            checked={formData.haveChildren}
            onChange={handleCheckboxChange}
          />
        }
        label="Have Children"
      />
      <br/>
      <FormControlLabel
        control={
          <Checkbox
            name="isSpouseMember"
            checked={formData.isSpouseMember}
            onChange={handleCheckboxChange}
          />
        }
        label="Is Spouse a Member"
      />
    <br/>
      {formData.isSpouseMember && (
        <TextField
          name="spouseName"
          label="Spouse Name"
          value={formData.spouseName}
          onChange={handleChange}
          fullWidth
          margin='normal'
        />
      )}
      <br/>
      <Stack direction="row" spacing={2}>
      <Button variant="contained"onClick={onBack}>
        Back
      </Button>
      <Button variant="contained" color='primary' onClick={handleNext}>
        Next
      </Button>
      <Button  type="submit" variant="contained" color='success' >
        Save
      </Button>
    </Stack>
    
      </Grid>
      </Grid>
      </form>
    </div>
  );
};


export default FamilyForm2;