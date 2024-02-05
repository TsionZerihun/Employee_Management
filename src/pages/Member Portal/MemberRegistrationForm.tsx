import React, { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, TextField, Container, Checkbox, Typography, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, FormControlLabel, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from "axios";
import {baseUrl} from '../../constant'
export interface Member {
  baptismNameError?: string;
  genderError?: string;
  phoneError?: string;
  emailError?: string;
  middleNameError?: string;
  firstNameError?: string;
  lastNameError?: string;
  email: string;
  title?: number;
  firstName: string;
  middleName: string;
  lastName: string;
  baptismName: string;
  gender: string;
  birthDate: string;
  phone: string;
  secondaryPhone: number;
  motherName: string;
  isMkEmployee: boolean;
  isMemberActive: boolean;
  parish_no: string;
}

interface MemberRegistrationFormProps {
  onNext: (data: Member) => void;

}
enum Title {
  Mr = 'Mr',
  Mrs = 'Mrs',
  Miss = 'Miss',
}

const MemberRegistrationForm: React.FC<MemberRegistrationFormProps> = ({ onNext }) => {
  const app = baseUrl;
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<Member>({
    email: '',
    title: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    baptismName: '',
    gender: '',
    birthDate: '',
    phone: '',
    secondaryPhone: 0,
    motherName: '',
    isMkEmployee: false,
    isMemberActive: false,
    parish_no: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
let {id}=useParams();
const userId = sessionStorage.getItem("user_id");
if(userId !== null){
  id = userId;
}
useEffect(()=>{
  axios.get(baseUrl + '/members/' + id).then((response) => {
    console.log(response.data);
    setFormData(response.data);
    console.log(formData);
        });
},[])

  const handleNext = () => {
    let hasError = false;

    if (!formData.email) {
      setFormData(prevState => ({
        ...prevState,
        emailError: 'Email is required',
      }));
      hasError = true;
    }
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormData((prevState) => ({
        ...prevState,
        emailError: 'Invalid email format ',
      }));
      hasError = true;
    }
    else {
      setFormData(prevState => ({
        ...prevState,
        emailError: '',
      }))
    }

    if (!formData.firstName) {
      setFormData(prevState => ({
        ...prevState,
        firstNameError: 'First Name is required',
      }));
      hasError = true;
    }
    else {
      setFormData(prevState => ({
        ...prevState,
        firstNameError: '',
      }))
    }
    if (!formData.middleName) {
      setFormData(prevState => ({
        ...prevState,
        middleNameError: 'Middle Name required',
      }))
      hasError = true;
    }

    else {
      setFormData(prevState => ({
        ...prevState,
        middleNameError: '',
      }))

    }


    if (!formData.lastName) {
      setFormData(prevState => ({
        ...prevState,
        lastNameError: 'Last Name is required',
      }));
      hasError = true;
    }
    else {
      setFormData(prevState => ({
        ...prevState,
        lastNameError: '',
      }))
    }

    if (!formData.baptismName) {
      setFormData(prevState => ({
        ...prevState,
        baptismNameError: 'batism Name is required',
      }));
      hasError = true;
    }
    else {
      setFormData(prevState => ({
        ...prevState,
        baptismNameError: '',
      }))
    }
  
    if (!formData.phone) {
      setFormData(prevState => ({
        ...prevState,
        phoneError: 'phone Nember is required',
      }));
      hasError = true;
    }
    else if (! /^\d{10}$/.test(formData.phone)) {
      setFormData((prevState) => ({
        ...prevState,
        phoneError: 'Invalid phone no format ',
      }));
      hasError = true;
    }

    else {
      setFormData(prevState => ({
        ...prevState,
        phoneError: '',
      }))
    }


    if (!hasError) {
      // Other validation and logic...
      formData['title'] = 0;
      formData['gender'] = '';
      console.log(formData['title']);
      if(id =='new'){
        alert('new')
        axios.post(baseUrl + '/members', formData).then((response) => {
          console.log(response.data.id);
 sessionStorage.setItem("user_id",response.data.id);
 onNext(formData);
              });
      }
      else{
        alert('not new')

        axios.patch(baseUrl + '/members/'+id, formData).then((response) => {
          console.log(response);
          onNext(formData);
              });
      }
      console.log('formData');
      
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name as string]: value,
    }));
  };



  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: checked,
    }));
  };

  const saveGeneralInfo = () => {
    formData['title'] = 0;
    formData['gender'] = '';
    console.log(formData['title']);
    if(id=='new'){
      axios.post(baseUrl + '/members', formData).then((response) => {
        console.log(response);
            });
    }
    else{
      axios.patch(baseUrl + '/members/'+id, formData).then((response) => {
        console.log(response);
            });
    }
    console.log('formData');

  }
  return (
    <>
      <form style={{
        width: "100%",
        padding: "20px",
        paddingLeft: "60px",
        paddingRight: "30px",


      }} >

        <Grid container sx={{

          bgcolor: '#fff',
          boxShadow: '2px 3px 3px 1px #ccc',
          borderRadius: "5px",
          padding: '10px',
          paddingRight: '25px'
        }}
          spacing={4}
          rowSpacing={1} >
          <Grid item xs={12}>
            <h1>Member Registration Form</h1>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <TextField
              name="email"
              label="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              fullWidth

              error={!!formData.emailError} // Add this line to highlight the field as an error if emailError exists
              helperText={formData.emailError} // Add this line to display the error message

            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl fullWidth>
              <Typography>Title:</Typography>
              <Select
                name="title"
                value="0"
                type='number'
                onChange={handleSelectChange}
              >
                {Object.values(Title).map((title) => (
                  <MenuItem key={title} value={title}>{title}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>

            <TextField
              name="firstName"
              label="firstName"
              value={formData.firstName}
              onChange={handleChange}
              margin="normal"
              fullWidth

              error={!!formData.firstNameError}
              helperText={formData.firstNameError}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              name="middleName"
              label="middleName"
              value={formData.middleName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              error={!!formData.middleNameError}
              helperText={formData.middleNameError}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              name="lastName"
              label="lastName"
              value={formData.lastName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              error={!!formData.lastNameError}
              helperText={formData.lastNameError}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              name="baptismName"
              label="የክርስትና ስም"
              value={formData.baptismName}
              onChange={handleChange}
              margin="normal"
              fullWidth
              error={!!formData.baptismNameError}
              helperText={formData.baptismNameError}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>

            <TextField
              name="gender"
              label="gender"
              value={formData.gender}
              onChange={handleChange}
              type='number'
              margin="normal"
              fullWidth
              size='small'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>
              Birth Date
            </Typography>
            <TextField
              type="date"
              name="birthDate"

              value={formData.birthDate}
              onChange={handleChange}

              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              name="phone"
              label="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
              fullWidth
              error={!!formData.phoneError}
              helperText={formData.phoneError}

            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              name="secondaryPhone"
              label="secondaryPhone"
              value={formData.secondaryPhone}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              name="motherName"
              label="motherName"
              value={formData.motherName}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              name="parish_no"
              label="Parish Number"
              value={formData.parish_no}
              onChange={handleChange}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isMkEmployee"
                  checked={formData.isMkEmployee}
                  onChange={handleCheckboxChange}
                />
              }
              label="Is MK Employee"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  name="isMemberActive"
                  checked={formData.isMemberActive}
                  onChange={handleCheckboxChange}
                  required
                />
              }
              label="Is Member Active"
            />
          </Grid>
          <Grid container>

            <Stack padding={6} direction="row" spacing={2}>

              <Button variant="contained" onClick={handleNext}>
                Save
              </Button>

              <Button style={{display:"none"}} variant="contained" color="success" onClick={saveGeneralInfo} >
                Save
              </Button>

            </Stack>

          </Grid>


        </Grid>


      </form>
    </>
  );
};

export default MemberRegistrationForm;


