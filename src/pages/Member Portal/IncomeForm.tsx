import React, { useState } from 'react';
import { 
    TextField, 
    Button, 
    Typography, 
    Grid,
    Stack}  from '@mui/material';
export interface Finance {
  monthlyDonor: string;
  monthlyIncome: string;
}
interface FinanceFormProps {
    onBack: () => void;
    onNext: (data: Finance) => void;
  }
  
  const FinanceForm: React.FC<FinanceFormProps> = ({ onBack, onNext }) => {
  const [financeData, setFinanceData] = useState<Finance>({
    monthlyDonor: '',
    monthlyIncome: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFinanceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 const handleNext = () => {
    onNext(financeData);
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
            padding:'15px',
            height:'500px',
                 }} 
          spacing={5}
          rowSpacing={2} > 
      <Grid item xs={12} sm={6} md={6}>
      <Typography variant="h5" gutterBottom >
        Finance Income Form
      </Typography>
      <TextField
        name="monthlyDonor"
        label="Monthly Donor"
        value={financeData.monthlyDonor}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="monthlyIncome"
        label="Monthly Income"
        value={financeData.monthlyIncome}
        onChange={handleChange}
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

export default FinanceForm;