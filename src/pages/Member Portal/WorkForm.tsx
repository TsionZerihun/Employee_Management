import React, { FormEvent, useState } from 'react';
import { 
  TextField,
   Button, 
   FormControl, 
   FormLabel,
    RadioGroup, 
    FormControlLabel, 
    Container,
    Stack,
    Radio, 
    Grid,
    FormHelperText} from '@mui/material';
    export interface Work
{
AreEmployeeError?: any;
AreEmployee: boolean; 
CurrentWorkPlace: string;
NameofOrganization: string;
WorkResponsibility: string;
workStatus :string;
CurrentJobPosition: string; 
}


   

    interface WorkFormProps
    {
      onBack: () => void
      onNext: (data: Work) => void
    }
    const WorkForm:React.FC<WorkFormProps> =({onBack,onNext}) =>{
       const [formData,setFormData] = useState<Work>({
        AreEmployee: false,
      CurrentWorkPlace: '',
       NameofOrganization: '',
      WorkResponsibility: '',
       workStatus :'',
      CurrentJobPosition: '',
       })
    
 


  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

 

  
  const handleNext = () => {
    
    let hasError = false;
  
    if (!formData.AreEmployee)  {
      setFormData(prevState => ({
        ...prevState,
        AreEmployeeError: 'the information is requried',
      }));
      hasError = true;
    }
    else{
      setFormData(prevState =>({
        ...prevState,
        phoneError:'',
     }))
    }
    if (!hasError)
    {
      onNext(formData)
    }
  
  }
    

  return (
  
    <form style={{
      width:"100%",
      paddingTop:"10px",
      paddingLeft:"20px", 
      paddingRight:"50px", 
      paddingBottom:'20px'
    }} >
     <Stack  sx={{
           
            bgcolor: '#fff',
            boxShadow: '2px 3px 3px 1px #ccc',
            borderRadius:"5px",
            padding:"25px",
            height:'800px'
                 }} >
    <Grid container sx={{
         
           padding:'15px',
                }} 
          spacing={5}
           rowSpacing={2} > 
           <Grid item  xs={12}sm={6} md={6}>
      <FormControl  error={!!formData.AreEmployeeError}>
        <FormLabel component="legend">Are you currently employed?</FormLabel>
        <RadioGroup
          name="AreEmployee"
          value={formData.AreEmployee}
          onChange={handleInputChange}
          row
        >
          <FormControlLabel value={1} control={<Radio />} label="Yes" />
          <FormControlLabel value={0} control={<Radio />} label="No" />
        </RadioGroup>
        {formData.AreEmployeeError && (
         <FormHelperText>
          {formData.AreEmployeeError}
          </FormHelperText>
              )}
     </FormControl>
      { formData.AreEmployee == true && (
        <>
          <TextField
            label="Current Workplace"
            name="CurrentWorkPlace"
            value={formData.CurrentWorkPlace}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Name of Organization"
            name="NameofOrganization"
            value={formData.NameofOrganization}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Work Responsibility"
            name="WorkResponsibility"
            value={formData.WorkResponsibility}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Work Status"
            name="WorkStatus"
            value={formData.workStatus}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Current Job Position"
            name="CurrentJobPosition"
            value={formData.CurrentJobPosition}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </>
      )
      }
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

export default WorkForm;