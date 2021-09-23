import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

/* Posting Data from Income input*/

const IncomeInput = () => {
    const [cat, setCat] = useState('');
    const [amt, setAmt] = useState('');
    
    const handleClick = async (e) => {
        e.preventDefault()
        fetch('https://crudcrud.com/api/0e18f5ad92474db3b9daec670de6b92f/income', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                category: cat,
                amount: amt
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            
    }

    return (
        <Container>
            <Row>
                <Col sm>
                    <input type="text" placeholder="Add Category" onChange={(e) => setCat(e.target.value)} />
                    <br></br>
                    <input type="number" placeholder="Enter Amount" onChange={(e) => setAmt(e.target.value)} />
                    <br></br>
                </Col>
                <Col sm>
                    <button className="inc-btn" onClick={handleClick}>Add Income</button>
                </Col>
            </Row>
        </Container>
    );
}

export default IncomeInput;