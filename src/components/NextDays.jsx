import SingleDay from "./SingleDay";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const API_KEY = '9c0ece9ecabc211f28776c581ffc21e8';

const NextDays = ({ getIcon, windowWidth, setWindowWidth }) => {
    const [data, setData] = useState(null);
    const [city, setCity] = useState("Roma");
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);


    useEffect(() => {
        fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("retreaving data error!");
                }
                return response.json();
            })
            .then((output) => {
                setData(output.list);
                setCity(output.city.name);
            })
            .catch((err) => console.log("ERROR!", err));
    }, [lon, lat]);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setWindowWidth]);


    return (
        <Container fluid>
            <h3 className="py-3 ps-2 text-dark fw-bold mb-0">
                Meteo a {city} nei prossimi giorni
            </h3>
            <Row xs={1} md={2} lg={4}>
                {data &&
                    data.slice(0, 23).map((day, index) =>
                        index % 2 === 0 ? (
                            <Col key={day.dt}>
                                <Card className="mb-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
                                    <Card.Body>
                                        <SingleDay
                                            date={day.dt_txt}
                                            temp={day.main.temp}
                                            weather={day.weather[0].main}
                                            description={day.weather[0].description}
                                            icon={day.weather[0].icon}
                                            humidity={day.main.humidity}
                                            getIcon={getIcon}
                                        />
                                    </Card.Body>
                                </Card>
                            </Col>
                        ) : null
                    )}
            </Row>
        </Container>
    );
}



export default NextDays;
