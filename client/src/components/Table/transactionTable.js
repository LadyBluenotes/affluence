import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
    // data pulled into here
    {
        id: 1,
        date: 2022-02-02,
        description: 'edit',
        amount: '2000.00',
        transactionType: 'Income',
        category: 'Main',
        subCategory: 'none'
    }
];

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
  });
  
  const cadPrice = {
    type: 'number',
    width: 160,
    valueFormatter: ({ value }) => currencyFormatter.format(value),
    cellClassName: 'font-tabular-nums',
  };
  

export default function TransactionTable() {
  return (
    <div 
        style={{ 
            height: 300, 
            width: '100%' }}>
      <DataGrid 
        rows={rows} 
        columns={[
            { 
                field: 'date', 
                headerName: 'Date',
                type: 'date',
                width: 180
            },
            { 
                field: 'description', 
                headerName: 'Description', 
                width: 220 
            },
            { 
                field: 'subTotal', 
                ...cadPrice 
        },
            {
                field: 'transactionType',
                headerName: 'Transaction Type',
                width: 200,
            },
            {
                field: 'category',
                headerName: 'Category',
                width: 180
            },
            {
                field: 'subCategory',
                headerName: 'Sub-Category',
                width: 180
            },
        ]} />
    </div>
  );
}