import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  SelectChangeEvent,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Stack,
  FormHelperText,
} from '@mui/material';

interface RegistrationFormProps {
  onBack:() => void
  onNext: (GibGubaeData: GibGubae) => void;
}

 export interface GibGubae {
  AreMemberErorr?: string;
  haveBeenGibiGubae: boolean;
  gibiGubaeName: string;
  gibiGubaePlace: string;
}



const GibGubaeRegistrationForm: React.FC<RegistrationFormProps> = ({onBack,onNext}) => {
  const [GibGubaeData, setGibGubaeData] = useState<GibGubae>
  (
    {
      haveBeenGibiGubae: false,
      gibiGubaeName: "",
      gibiGubaePlace: "",
    
    }
  );
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setGibGubaeData((GibGubaeData) => ({
      ...GibGubaeData,
      [name as string]: value,
    }));
  };
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGibGubaeData((GibGubaeData) => ({
      ...GibGubaeData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    
    let hasError = false;
  
    if (!GibGubaeData.haveBeenGibiGubae)  {
      setGibGubaeData(prevState => ({
        ...prevState,
        AreMemberErorr: 'The Information Is Required',
      }));
      hasError = true;
    }
    else{
      setGibGubaeData(prevState =>({
        ...prevState,
        phoneError:'',
     }))
    }
    if (!hasError)
    {
      onNext(GibGubaeData)
    }
  
  }

  return (
    <form style={{
      width:"100%",
      paddingTop:"10px",
      paddingLeft:"20px", 
      paddingRight:"30px", 
      paddingBottom:'20px'
    }} >
     <Stack  sx={{
            bgcolor: '#fff',
            boxShadow: '2px 3px 3px 1px #ccc',
            borderRadius:"5px",
            padding:"25px",
            height:'500px'
                 }} >
    <Grid container sx={{
           paddingTop:'10px',
           paddingLeft:'20px'
                }} 
          spacing={5}
           rowSpacing={2} > 
        <Grid item  md={6} sm={6} xs={12}>

        <FormControl  fullWidth margin="normal" error={!!GibGubaeData.AreMemberErorr}>
        <FormLabel component="legend">በግቢ ጉባኤ አገልግለዋል ?</FormLabel>
        <RadioGroup
          name="haveBeenGibiGubae"
          value={GibGubaeData.haveBeenGibiGubae}
          onChange={handleSelectChange}
          row
        >
          <FormControlLabel 
                 value={1} 
                 control={<Radio />} 
                 label="Yes" />
          <FormControlLabel 
                 value={0}
                 control={<Radio />}
                 label="No" />
        </RadioGroup>
        {GibGubaeData.AreMemberErorr && (
         <FormHelperText>
          {GibGubaeData.AreMemberErorr}
          </FormHelperText>
              )}
      </FormControl>
        
        {GibGubaeData.haveBeenGibiGubae ==true && (
          <>
              <TextField
                name="gibiGubaeName"
                variant="outlined"
                label="የግቢ ጉባኤው ስም"
                value={GibGubaeData.gibiGubaeName}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
            <br/>
         
              <TextField
                name="gibiGubaePlace"
                variant="outlined"
                label="የግቢ ጉባኤው ቦታ"
                value={GibGubaeData.gibiGubaePlace}
                onChange={handleChange}
                margin="normal"
                fullWidth
              />
          </>
        )}
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
             </Stack>
       </form>
      
    
  );
};

export default GibGubaeRegistrationForm;