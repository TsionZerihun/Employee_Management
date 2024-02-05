import React, { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Button, Stack, Grid } from '@mui/material';
export interface Service {
  serviceDepartment: string;
  serviceSection: string;
  serviceYear: string;
  serviceMeeting: string;
  haveTask: boolean;
  responsibility: string;
  canTakeService: boolean;
  wantToOtherAssignment: boolean;
  memberSince: Date | null;
  serviceCenter: string;
}
interface ServiceFormProps {
    onBack:() =>void
  onNext: (ServiceData: Service) => void;
}

const ServiceForm: React.FC<ServiceFormProps> = ({ onBack,onNext }) => {
  const [ServiceData, setServiceData] = useState<Service>({
    serviceDepartment: '',
    serviceSection: '',
    serviceYear: '',
    serviceMeeting: '',
    haveTask: false,
    responsibility: '',
    canTakeService: false,
    wantToOtherAssignment: false,
    memberSince: null,
    serviceCenter: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setServiceData((prevServiceData) => ({
      ...prevServiceData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleNext = () =>
  {
onNext(ServiceData)
  }



  return (

    <form style={{
      width:"100%",
      padding:"20px",
      paddingLeft:"60px",
      paddingRight:"30px",

      
    }} >
     
    <Grid container sx={{
            
            bgcolor: '#fff',
            boxShadow: '2px 3px 3px 1px #ccc',
            borderRadius:"5px",
            padding:"15px"
                 }} 
          spacing={5}
           rowSpacing={2} > 
    <Grid item  md={12}>
    <h1 >
      Service registration form
      </h1>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <TextField
        name="serviceDepartment"
        label="Service Department"
        fullWidth
        variant="outlined"
        value={ServiceData.serviceDepartment}
        onChange={handleChange}
      />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <TextField
        name="serviceSection"
        label="Service Section"
        fullWidth
     
        variant="outlined"
        value={ServiceData.serviceSection}
        onChange={handleChange}
      />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <TextField
        name="serviceYear"
        label="Service Year"
        fullWidth
        variant="outlined"
        value={ServiceData.serviceYear}
        onChange={handleChange}

      />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <TextField
        name="serviceMeeting"
        label="Service Meeting"
        fullWidth
        variant="outlined"
        value={ServiceData.serviceMeeting}
        onChange={handleChange}
      />
</Grid>
      <Grid item xs={12} sm={6} md={6}>
      <FormControlLabel
        control={
          <Checkbox
            name="haveTask"
            checked={ServiceData.haveTask}
            onChange={handleChange} 
          />
        }
        label="Have Task"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <TextField
        name="responsibility"
        label="Responsibility"
        fullWidth
        variant="outlined"
        value={ServiceData.responsibility}
        onChange={handleChange}
      />
</Grid>
      <Grid item xs={12} sm={6} md={6}>
      <FormControlLabel
        control={
          <Checkbox
            name="canTakeService"
            checked={ServiceData.canTakeService}
            onChange={handleChange}
            
          />
        }
        label="Can Take Service"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <FormControlLabel
        control={
          <Checkbox
            name="wantToOtherAssignment"
            checked={ServiceData.wantToOtherAssignment}
            onChange={handleChange}
          />
        }
        label="Want to Other Assignment"
      />
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
<TextField
        name="memberSince"
        type="date"
        label="Member Since"
        value={ServiceData.memberSince}
        onChange={handleChange} 
        fullWidth
      /></Grid>
      <Grid item xs={12} sm={6} md={6}>
      <TextField
        name="serviceCenter"
        label="Service Center"
        fullWidth
        variant="outlined"
        value={ServiceData.serviceCenter}
        onChange={handleChange}
      />
     </Grid>
     <Grid container>
     <Stack direction="row" padding={6} spacing={1}>
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

export default ServiceForm;