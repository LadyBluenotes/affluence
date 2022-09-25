import { Typography, Button, Box } from '@mui/material';
import * as React from 'react';
import LandingNav from '../../components/landingNav';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

export default function LandingPage() {
  return (
    <>
    <LandingNav />
    <Box sx={{
        padding: '10%',
        margin: '0 auto',
        textAlign: 'center'
    }}>
        <SavingsOutlinedIcon sx={{
            fontSize: '9rem'
        }} />
        <Typography variant='h1'>Affluence</Typography>
        <Typography variant='subtitle1' sx={{
            marginTop: '20px'
        }}>Your new wealth diary.</Typography>
        <Button variant="contained" href='/signup' sx={{
            marginTop: '20px',
            marginLeft: '10px'
        }}>Sign Up</Button>
        <Button variant="contained" href='/signin' sx={{
            marginTop: '20px',
            marginLeft: '10px'
        }}>
            Sign In
            </Button>
    </Box>
    </>
  );
}