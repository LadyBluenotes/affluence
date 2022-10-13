import React from 'react';
import './Transactions.css';
import UserNav from '../../components/userNav';

export default function Transactions() {


    return(
        <>
            <UserNav />
            <div class='content'>


                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>Date</p>
                            </th>
                            <th>
                                <p>Description</p>
                            </th>
                            <th>
                                <p>Amount</p>
                            </th>
                            <th>
                                <p>Transaction Type</p>
                            </th>
                            <th>
                                <p>Category</p>
                            </th>
                            <th>
                                <p>SubCategory</p>
                            </th>
                        </tr>
                    </thead>

                </table>
            </ div>
        </>
    )
}