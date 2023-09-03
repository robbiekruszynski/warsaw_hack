import React, { useState } from "react";
import { Button, TextField, Typography } from '@mui/material';
import { RequestNetwork } from '@requestnetwork/request-client.js';
import { Web3SignatureProvider } from '@requestnetwork/web3-signature';
import { payRequest } from '@requestnetwork/payment-processor';

const CreateInvoiceForm = () => {
  const [formData, setFormData] = useState({
    premium: "",
    dueDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize Request Network
    const requestNetwork = new RequestNetwork({ nodeConnectionConfig: { baseURL: 'http://localhost:3000' } });

    // Create Request
    try {
      const request = await requestNetwork.createRequest({
        requestInfo: {
          currency: 'ETH',
          expectedAmount: formData.premium,
          payer: { type: 'ethereumAddress', value: '0x...' },
          payee: { type: 'ethereumAddress', value: '0x...' },
          timestamp: Date.now(),
          extensionsData: [
            {
              type: 'dueDate',
              value: formData.dueDate
            }
          ]
        },
        signer: {
          // Signer information here
        },
      });

      console.log(`Request created with id: ${request.requestId}`);
    } catch (error) {
      console.error(`Failed to create request: ${error}`);
    }
  };

  return (
    <div>
      <Typography variant="h4">Create Invoice</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Premium"
          name="premium"
          value={formData.premium}
          onChange={handleChange}
        />
        <TextField
          label="Due Date"
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit" variant="contained" color="secondary">
            Create Invoice
        </Button>
      </form>
    </div>
  );
};

export default CreateInvoiceForm;
