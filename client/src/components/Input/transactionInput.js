import { useState } from 'react';
import { Grid, IconButton, TextField, Select, InputLabel, OutlinedInput, InputAdornment, FormControl, MenuItem } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { NumericFormat } from 'react-number-format';

const defaultInput = {
    date: 'null',
    details: '',
    amount: 0,
    transactionType: 'null',
    category: 'null',
    subCategory: 'null'
}

export default function TransactionInput(){

    const [ transactionDetails, setTransactionDetails ] = useState(defaultInput)

    const handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        const { date, details, amount, transactionType, category, subCategory } = target
        setTransactionDetails({
            ...transactionDetails,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 

        console.log( transactionDetails )
        setTransactionDetails(defaultInput)
    }

    return(
        <form onSubmit={handleSubmit}>
            <Grid 
                container
                item spacing={2}>
                    <Grid item>
                    <TextField
                        name="date"
                        type="date"
                        defaultValue="2022-01-01"
                        onInput={e => handleInputChange(e)}
                        value={transactionDetails.date}
                        sx={{ 
                            width: 150}}/>
                    </Grid>
                    <Grid item>
                        <TextField 
                            id="outlined-basic" 
                            name="details"
                            label="Details"
                            onChange={e => handleInputChange(e)}
                            value={transactionDetails.details}
                            sx={{ 
                                width: 220}}
                            />
                    </Grid>
                    <Grid item>
                        <FormControl
                            onChange={e => handleInputChange(e)}
                            name="amount"
                            type="number"
                            decimalScale={2}
                            value={transactionDetails.amount}
                            sx={{ 
                                width: 160}}
                            >
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="transactionAmount"
                                type="number"
                                placeholder="0.00"
                                decimalScale={2}
                                label="Amount"
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl
                            sx={{ 
                                width: 200}}>
                        <InputLabel>Transaction Type</InputLabel>
                        <Select
                            id="transactionType"
                            label="Transaction Type"
                            name="transactionType"
                            onChange={e => handleInputChange(e)}
                            value={transactionDetails.transactionType}
                            >
                                {/* must add values to those below */}
                                <MenuItem value={'income'}>Income</MenuItem>
                                <MenuItem value={'taxes'}>Taxes</MenuItem>
                                <MenuItem value={'debt'}>Debt</MenuItem>
                                <MenuItem value={'saving'}>Savings</MenuItem>
                                <MenuItem value={'investment'}>Investment</MenuItem>
                        </Select>
                        </FormControl>  
                    </Grid>
                    <Grid item>
                        <FormControl
                            name="category"
                            onChange={e => handleInputChange(e)}
                            value={transactionDetails.category}
                            sx={{ 
                                width: 180}}
                        >
                            <InputLabel>Category</InputLabel>
                            <Select
                            id="category"
                            label="Category"
                            >
                                <MenuItem>Insert looped category items from DB</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <FormControl
                            name="subCategory"
                            onChange={e => handleInputChange(e)}
                            value={transactionDetails.subCategory}
                            sx={{ 
                                width: 180}} >
                            <InputLabel>SubCategory</InputLabel>
                            <Select
                            id="subCategory"
                            label="subCategory"
                            >
                                <MenuItem>Insert looped subcategory items from DB</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <IconButton 
                            aria-label="add" 
                            size="large"
                            type="submit">
                            <AddCircleOutlineIcon fontSize="inherit" />
                        </IconButton>
                    </Grid>
            </Grid>
        </form>
    )
}