import react from 'react';
import { IconButton, TextField, Select, InputLabel, OutlinedInput, InputAdornment, FormControl, MenuItem, FormHelperText } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function TransactionInput(){


    return(
        <>
            <TextField
                id="transactionDate"
                label="Transaction Date"
                type="date"
                defaultValue="2022-01-21"
                sx={{ 
                    width: 220,
                    marginRight: '25px' }}
            />
            <TextField 
                id="outlined-basic" 
                label="Details"
                sx={{ 
                    width: 220,
                    marginRight: '25px' }}
                />
            <FormControl 
                sx={{ 
                    width: 220,
                    marginRight: '25px' }}
                >
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="transactionAmount"
                    label="Amount"
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                />
            </FormControl>
            <FormControl 
                sx={{ 
                    width: 220,
                    marginRight: '25px' }}
            >
                <InputLabel>Transaction Type</InputLabel>
                <Select
                id="transactionType"
                label="Transaction Type"
                >
                    {/* must add values to those below */}
                    <MenuItem>Income</MenuItem>
                    <MenuItem>Taxes</MenuItem>
                    <MenuItem>Debt</MenuItem>
                    <MenuItem>Savings</MenuItem>
                    <MenuItem>Investment</MenuItem>
                </Select>
            </FormControl>
            <FormControl 
                sx={{ 
                    width: 220,
                    marginRight: '25px' }}
            >
                <InputLabel>Category</InputLabel>
                <Select
                id="category"
                label="Category"
                >
                    <MenuItem>Insert looped category items from DB</MenuItem>
                </Select>
            </FormControl>
            <FormControl 
                sx={{ 
                    width: 220,
                    marginRight: '25px' }}
            >
                <InputLabel>SubCategory</InputLabel>
                <Select
                id="subCategory"
                label="subCategory"
                >
                    <MenuItem>Insert looped subcategory items from DB</MenuItem>
                </Select>
            </FormControl>
            <IconButton 
                aria-label="add" 
                size="large">
                <AddCircleOutlineIcon fontSize="inherit" />
            </IconButton>
        </>
    )
}