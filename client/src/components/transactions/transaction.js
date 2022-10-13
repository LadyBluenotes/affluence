import React from 'react';

function Transaction({ transaction:{id, date, description, amount, transactionType, category, subCategory} }) {

    return(
        <tr key={id}>
            <td>{date}</td>
            <td>{description}</td>
            <td>{amount}</td>
            <td>{transactionType}</td>
            <td>{category}</td>
            <td>{subCategory}</td>
            <button>Edit</button>
            <button>Delete</button>
        </tr>
    )
}