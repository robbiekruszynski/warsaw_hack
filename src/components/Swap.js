
// import Button from '@mui/material/Button';
import SwapReturn from './SwapReturn';

import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

function Swap() {
  const [formData, setFormData] = useState({
    deductibleValue: '',
    validators: '',
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
    console.log(formData);
    document.getElementsByClassName("cheatcode")[0].style.display = 'block';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Swap Interest Rate</h1>
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
      <Button color="secondary" variant="contained" onClick={handleSubmit}>
        Swap
      </Button>


      <SwapReturn></SwapReturn>
    </div>
  );
}


export default Swap;