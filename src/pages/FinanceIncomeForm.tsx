import React, { useState } from 'react';
import { 
    TextField, 
    Button, 
    Container,
    Typography }  from '@mui/material';


interface FinanceData {
  monthlyDonor: string;
  monthlyIncome: string;
}

const FinanceIncomeForm: React.FC = () => {
  const [financeData, setFinanceData] = useState<FinanceData>({
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Finance Data:', financeData);
    // Add your logic to submit the data to the database or perform other actions.
  };

  return (
    <form onSubmit={handleSubmit}>
         <Container maxWidth="sm" sx={{ bgcolor: '#fff' }} >
      <Typography variant="h5" gutterBottom>
        Finance Income Form
      </Typography>
      <TextField
        name="monthlyDonor"
        label="Monthly Donor"
        value={financeData.monthlyDonor}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        name="monthlyIncome"
        label="Monthly Income"
        value={financeData.monthlyIncome}
        onChange={handleChange}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </Container>
    </form>
  );
};

export default FinanceIncomeForm;