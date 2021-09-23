import { Container, Card } from "react-bootstrap";
import React, { useState } from 'react';
import axios from 'axios'

const Income = () => {
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
            <Card className="card">
                <Card.Header className="card-header" style={{ backgroundColor: "#DFF2BF",color:"black" }}>Income</Card.Header>
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

export default Income;