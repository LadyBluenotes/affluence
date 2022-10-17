import React from 'react';
import './Transactions.css';
import UserNav from '../../components/userNav';
import TransactionInput from '../../components/Input/transactionInput';
import TransactionTable from '../../components/Table/transactionTable';


export default function Transactions() {


    return(
        <>
            <UserNav />
            <div className='content'>
                <TransactionInput />
                <TransactionTable />
            </ div>
        </>
    )
}