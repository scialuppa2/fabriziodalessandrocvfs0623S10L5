import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <p>Meteo App &copy; 2024 Fabrizio D'Alessandro</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter ;
