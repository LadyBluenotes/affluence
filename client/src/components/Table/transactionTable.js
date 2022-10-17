import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
    // data pulled into here
];

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
                field: 'Amount', 
                type: 'number',
                width: 160,
                valueFormatter: (params) => {
                    if (params.value == null) {
                      return '$0';
                    }
      
                    const valueFormatted = Number(params.value.toFixed(2));
                    return `$ ${valueFormatted}`;
                  }
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