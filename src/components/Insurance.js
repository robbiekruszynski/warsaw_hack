// import Button from '@mui/material/Button';
import InsuranceReturn from './InsuranceReturn';

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { rate } from"../components/placeHolderData/PlaceHolderData";

function Insurance() {
  const [formData, setFormData] = useState({
    days: '',
    validators: '',
    deductibleValue: '',
    deductibleType: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Do something with the form data, e.g., send it to an API
    document.getElementsByClassName("cheatcode")[0].style.display = 'block';
    console.log(formData);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Get Insurance Quote</h1>
      <h3>30-day lagging APY: {rate.yield.toFixed(5)*100}%</h3>
      <TextField
        label="Number of Days"
        variant="outlined"
        name="days"
        value={formData.days}
        onChange={handleChange}
        style={{ marginBottom: '20px', width: '100%' }}
      />
      <TextField
        label="Number of Validators"
        variant="outlined"
        name="validators"
        value={formData.validators}
        onChange={handleChange}
        style={{ marginBottom: '20px', width: '100%' }}
      />
      <TextField
        label="Deductible Value"
        variant="outlined"
        name="deductibleValue"
        value={formData.deductibleValue}
        onChange={handleChange}
        style={{ marginBottom: '20px', width: '100%' }}
      />
      <FormControl variant="outlined" style={{ marginBottom: '20px', width: '100%' }}>
        <InputLabel>Deductible Type</InputLabel>
        <Select
          label="Deductible Type"
          name="deductibleType"
          value={formData.deductibleType}
          onChange={handleChange}
        >
          <MenuItem value="percent">Percent</MenuItem>
          <MenuItem value="amount">Amount</MenuItem>
        </Select>
      </FormControl>
      <Button color="secondary" variant="contained" onClick={handleSubmit}>
        Get Quote
      </Button>

      <InsuranceReturn></InsuranceReturn>
    </div>
  );
}

// export default InsuranceForm;

export default Insurance;