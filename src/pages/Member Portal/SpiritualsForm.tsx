import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  Stack,
  Grid,
  Typography,
} from '@mui/material';

enum SpiritualTitle {
  kahn = 'ካህን ',
  komos = 'ቆሞስ',
  mon = 'መነኩሴ',
}

interface SpiritualsRegisterFormProps {
  onBack: () => void;
  onNext: (SpiritualData:Spirituals) => void;
}

export interface Spirituals {
  spirFatherName: string;
  spiritualTitle: string;
  spirSchoolName: string;
  spirGraduateDate: string;
  spirFatherPhone: string;
  spirFatherParish: string;
}

const SpiritualsForm: React.FC<SpiritualsRegisterFormProps> = ({onBack,onNext  }) => {
  const [SpiritualData, setSpiritualData] = useState<Spirituals>({
    spirFatherName: '',
    spiritualTitle: SpiritualTitle.kahn,
    spirSchoolName: '',
    spirGraduateDate:'',
    spirFatherPhone: '',
    spirFatherParish: '',
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpiritualData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setSpiritualData((prevState) => ({
      ...prevState,
      [name as string]: value,
    }));
  };
  const handleNext = () => {
 
    onNext(SpiritualData);
  };

  return (
   < form style={{
      width:"100%",
      padding:"20px",
      paddingLeft:"60px",
      paddingRight:"30px",

      
    }} >
     
    <Grid container sx={{
            bgcolor: '#fff',
            boxShadow: '2px 3px 3px 1px #ccc',
            borderRadius:"5px",
            padding:"25px"
                 }} 
          spacing={5}
           rowSpacing={2} > 
    <Grid item  md={12}>
    <h1 >
     Spiritual informatio
      </h1>
      </Grid>
  <Grid item md={6} sm={12} xs={12}>
      <TextField
        label="የንስሀ አባት ስም"
        name="spirFatherName"
        value={SpiritualData.spirFatherName}
        onChange={handleChange}
      
        margin='normal'
        fullWidth
      />
           <br/>
  
      <FormControl fullWidth>
        <Typography></Typography>
        <Select
          name="spiritualTitle"
          value={SpiritualData.spiritualTitle}
          onChange={handleSelectChange}
          required
          
        >
          {Object.values(SpiritualTitle).map((title) => (
            <MenuItem key={title} value={title}>
              {title}
            </MenuItem>
          ))}
        </Select>
        
      </FormControl>

      <TextField
        label="School Name"
        name="spirSchoolName"
        value={SpiritualData.spirSchoolName}
        onChange={handleChange}
     
        fullWidth
        margin='normal'
      />
<Typography> Graduate Date </Typography>
      <TextField
        
       
        name="spirGraduateDate"
        type="date"
        value={SpiritualData.spirGraduateDate}
        onChange={handleChange}
        fullWidth
      
       
      />

      <TextField
        label="Spir Father Phone"
        name="spirFatherPhone"
        value={SpiritualData.spirFatherPhone}
        onChange={handleChange}
       
        fullWidth
        margin='normal'
      />

      <TextField
        label="የ ሚያገለግሉበት አጥቢያ ቤተክርስቲያን "
        name="spirFatherParish"
        value={SpiritualData.spirFatherParish}
        onChange={handleChange}
      
        fullWidth
        margin='normal'
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

export default SpiritualsForm;