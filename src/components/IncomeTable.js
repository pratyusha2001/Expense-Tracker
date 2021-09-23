import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import axios from 'axios'

/* Get Data from Income input*/

const IncomeTable = () => {
    
    const [datas, setDatas] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
            "https://crudcrud.com/api/0e18f5ad92474db3b9daec670de6b92f/income",
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
                        <th>Income Category</th>
                        <th>Income Amount</th>
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

export default IncomeTable;