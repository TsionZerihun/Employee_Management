import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Stack,
  
} from '@mui/material';

interface parishChurchProps {
    onBack: () => void;
    onNext: (values:parishChurchs) => void;
  }
export interface parishChurchs {
  parshChurchName: string;
  roleInParishChurch: string;
  parshChurchAddress: string;
}
const parshChurchForm: React.FC<parishChurchProps> = ({onBack,onNext}) => {
  const [values, setValues] = useState<parishChurchs>
  (
    {
        parshChurchName: "",
        roleInParishChurch: "",
        parshChurchAddress: "",
    }
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleNext = () => {
 
    onNext(values);
  };
  return (
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
      <Grid item xs={12} sm={6} md={6}>
      <h2>ያሉበት አጥቢያ ቤተክርስቲያን</h2>
          <TextField
            name="parshChurchName"
            variant="outlined"
            label="የ አጥቢያ ቤተክርስቲያን ስም"
            value={values.parshChurchName}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
          />

       <br/>
          <TextField
            name="roleInParishChurch"
            variant="outlined"
            label="Role in Parish Church"
            value={values.roleInParishChurch}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
          />
          <br/>
        
       
          <TextField
            name="parshChurchAddress"
            variant="outlined"
            label="የ አጥቢያ ቤተክርስቲያን ቦታ"
            value={values.parshChurchAddress}
            onChange={handleInputChange}
            margin="normal"
            fullWidth
          />
          <br/>
     
       
        
          <Stack direction="row"  spacing={1}>
      <Button variant="contained" color='info' onClick={onBack}>
        Back
      </Button>
      <Button variant="contained" color='primary' onClick={handleNext}>
        Next
      </Button>
      <Button variant="contained" color="success">
        save
      </Button>
    </Stack>
             </Grid>
             </Grid>
    </form>
  );
};

export default parshChurchForm;