import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const API_KEY = '9c0ece9ecabc211f28776c581ffc21e8';

const SearchBar = function ({ setLon, setLat }) {
    const [city, setCity] = useState("Rome");

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city) {
            fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("API retrieve failed!");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("Data loaded correctly", data[0]);
                    setCity(data[0].name);
                    setLon(data[0].lon);
                    setLat(data[0].lat);
                })
                .catch((err) => console.log("ERROR", err));
        }
    };

    return (
        <Container className="glass-main" fluid>
            <Row className="justify-content-center p-4">
                <Col xs={12} md={8}>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Search Location"
                                aria-label="Search Location"
                                aria-describedby="basic-addon2"
                                onChange={handleChange}
                            />
                            <Button variant="outline-dark" id="button-addon2" type="submit">
                                Search
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBar;
