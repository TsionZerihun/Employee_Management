import React, { useState, FormEvent, useEffect } from 'react';
import { TextField, Button,Container, Grid, Stack } from '@mui/material';
import axios from "axios";
import { baseUrl } from "../../constant";



export interface Emergency

{
  MembersId: string;
    EmergName: string;
    EmergPhone: string;
    EmergRelation:string;
    EmergEmail: string;
    EmergAddress: string;
}
 
interface EmergencyFormProps {
    onBack: () => void;
    onNext: (data: Emergency) => void;
  }
  
const EmergencyContactForm: React.FC<EmergencyFormProps> = ({ onBack, onNext }) => {
  const userId = sessionStorage.getItem("user_id");
  const [emergencyContact, setEmergencyContact] = useState({
    MembersId:userId?? "",
    EmergName: '',
    EmergPhone: '',
    EmergRelation: '',
    EmergEmail: '',
    EmergAddress: '',
  });
  const [emergenceyId, setEmeregencyId] = useState("");
  useEffect(() => {
    axios.get(baseUrl + "/Emergency/member/" + userId).then((response) => {
      console.log("response", response);
      alert(response.data.EmergName);
      if (response.data !== "") {
        setEmergencyContact({
          ...emergencyContact,
          ["EmergName"]: response.data.emergName,
          ["EmergPhone"]: response.data.emergPhone,
          
          //["EmergEmail"]: response.data.EmergEmail,
          ["EmergRelation"]: response.data.emergRelation,
        });
        setEmeregencyId(response.data.id);
      }
    });
  }, []);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmergencyContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleNext =() =>{
    if (emergenceyId === "") {
      axios.post(baseUrl + "/emergency", emergencyContact).then((response) => {
        console.log(response.data.id);
        console.log(emergencyContact);
      });
      onNext(emergencyContact);
    } else {
      console.log(emergencyContact)
      console.log(emergenceyId)
      axios
        .patch(baseUrl + "/emergency/" + emergenceyId, emergencyContact)
        .then((response) => {
          console.log(response);
        });
      onNext(emergencyContact);
    }
    onNext(emergencyContact);
  };

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
              padding:'20px'
                   }} 
            spacing={5}
             rowSpacing={2} > 
          <Grid item xs={12} md={12}>
          <h2>Emergency Contact </h2>
          </Grid>
         
         
         <Grid item xs={12} sm={6} md={6}>
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

export default EmergencyContactForm;