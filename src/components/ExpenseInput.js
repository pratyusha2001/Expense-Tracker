import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

/* Posting Data from Expense input*/

const ExpenseInput = () => {
    const [cat, setCat] = useState('');
    const [amt, setAmt] = useState('');
    
    const handleClick = async (e) => {
        e.preventDefault()
        fetch('https://crudcrud.com/api/4642ff3773ab482984ee9ab6f8b5d88e/expense', {
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
                    <input type="text" placeholder="Add Category" onChange={(e) => setCat(e.target.value)} style={{borderBottom:"2px solid #f56f6f"}}/>
                    <br></br>
                    <input type="number" placeholder="Enter Amount" onChange={(e) => setAmt(e.target.value)} style={{borderBottom:"2px solid #f56f6f"}}/>
                    <br></br>
                </Col>
                <Col sm>
                    <button className="exp-btn" onClick={handleClick}>Add Expense</button>
                </Col>
            </Row>
        </Container>
    );
}

export default ExpenseInput;