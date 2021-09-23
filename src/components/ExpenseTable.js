import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import axios from 'axios'

/* Get Data from Expense input*/

const ExpenseTable = () => {
    const [datas, setDatas] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
            "https://crudcrud.com/api/4642ff3773ab482984ee9ab6f8b5d88e/expense",
        );
        setDatas(response.data);
    };
    fetchData()

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Expense Category</th>
                        <th>Expense Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {datas &&
                        datas.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.category}</td>
                                    <td>{data.amount}</td>
                                    <td><button className="edit-btn">Edit</button>
                                        <button className="del-btn">Delete</button></td>
                                </tr>);
                        })}
                </tbody>
            </Table>
        </Container>
    );
}

export default ExpenseTable;