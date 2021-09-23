import React, { useState } from 'react';
import { Container, Card } from "react-bootstrap";
import axios from 'axios';

const Expense = () => {
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
            <Card className="card">
                <Card.Header className="card-header" style={{ backgroundColor: "#FFD2D2",color:"black"  }}>Expense</Card.Header>
                <Card.Body>
                    <Card.Text>
                    {datas &&
                        datas.map((data, index) => {
                            return (                          
                                    <p className="disp-amt">{data.amount}</p>);
                        })}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Expense;