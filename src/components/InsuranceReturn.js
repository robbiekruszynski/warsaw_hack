
import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import { mockInsurance } from"../components/placeHolderData/PlaceHolderData";

import CreateInvoiceForm from '../components/requestInsuranceInvoice';

function roundHackFix(value, decimals) {
return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

const InsuranceReturn = () => {
  const [data, setData] = useState(null);

  // Replace this useEffect with your actual API call
  useEffect(() => {
    const fetchData = async () => {
      // Simulated API call
      const apiData = mockInsurance;
      console.log(mockInsurance);

      setData(apiData);
    };

    fetchData();
  }, []);

  return (
    <Container className="cheatcode" sx={{ display: 'none' }}>
      <Typography variant="h4" component="h1" gutterBottom padding="30px 0 15px 0">
        Insurance Quote Details -&gt;
      </Typography>
      {data && (
        <>
          <Typography variant="h6" component="h2" gutterBottom>
            Policy
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Premium</TableCell>
                  <TableCell>Deductible</TableCell>
                  <TableCell>Max Payback</TableCell>
                  <TableCell>Max Payout</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{roundHackFix(data.policy.premium,3)} ETH</TableCell>
                  <TableCell>{roundHackFix(data.policy.deductible,3)} ETH</TableCell>
                  <TableCell>{roundHackFix(data.policy.maxPayback,3)} ETH</TableCell>
                  <TableCell>{roundHackFix(data.policy.maxPayout,3)} ETH</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h6" component="h2" gutterBottom>
            Returns
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Covered</TableCell>
                  <TableCell>Gross</TableCell>
                  <TableCell>Max</TableCell>
                  <TableCell>Min</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{roundHackFix(data.returns.covered,3)} ETH</TableCell>
                  <TableCell>{roundHackFix(data.returns.gross,3)} ETH</TableCell>
                  <TableCell>{roundHackFix(data.returns.max,3)} ETH</TableCell>
                  <TableCell>{roundHackFix(data.returns.min,3)} ETH</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography variant="h6" component="h2" gutterBottom>
            Yields
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Covered</TableCell>
                  <TableCell>Gross</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>{roundHackFix(data.yields.covered, 3) * 100 +"%" /* note, fix dis decimal shit */}</TableCell>
                  <TableCell>{roundHackFix(data.yields.gross, 3) * 100 +"%" /* note, fix dis decimal shit */}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>


            <CreateInvoiceForm></CreateInvoiceForm>
            {/* <Button color="secondary" variant="contained" onClick={handleSubmit}>
                Create Invoice
            </Button> */}
        </>
      )}
    </Container>
  );
};

export default InsuranceReturn;
