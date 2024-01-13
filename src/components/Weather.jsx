import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";

const API_KEY = '9c0ece9ecabc211f28776c581ffc21e8';

const Weather = ({ lon, lat, getIcon, windowWidth }) => {
    const [city, setCity] = useState(null);
    const [description, setDescription] = useState(null);
    const [temp, setTemp] = useState(null);
    const [icon, setIcon] = useState(null);
    const [feelsLike, setFeelsLike] = useState(null);
    const [imgBackground, setImgBackground] = useState(null);
    const defaultImage = 'https://www.focusjunior.it/content/uploads/2018/09/mappageo.jpg'

    const date = new Date();
    const formattedDate = `${date.getDate()} ${date.toLocaleDateString(
        "default",
        { month: "long" }
    )}`;

    const chooseImage = (windowWidth, source) => {
        if (windowWidth <= 768) {

            return source.mobile;
        } else {
            return source.web;
        }
    };

    const getCityImage = async function (city) {
        try {
            const response = await fetch(
                `https://api.teleport.org/api/urban_areas/slug:${city.toLowerCase()}/images/`
            );
            if (response.ok) {
                const data = await response.json();
                console.log("image data retreived: ", data.photos[0].image);
                setImgBackground(chooseImage(windowWidth, data.photos[0].image));
            } else {
                throw new Error("Error getting image data");
            }
        } catch (error) {
            console.log("ERROR: ", error);
        }
    };


useEffect(() => {
    const fetchData = async () => {
       try {
        if (lat === undefined || lon === undefined) {
            return;
         }
          const response = await fetch(
             `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
          );
 
          if (!response.ok) {
             throw new Error("fetch data retrieving error!");
          }
 
          const data = await response.json();
 
          setCity(data.name);
          setDescription(data.weather[0].description);
          setTemp(data.main.temp);
          setIcon(getIcon(data.weather[0].description.toString()));
          setFeelsLike(data.main.feels_like);
          getCityImage(data.name);
       } catch (error) {
          console.error("ERROR", error);
       }
    };
 
    fetchData();
 }, [lon, lat]);
 

    return (
        <Container className="position-relative text-center" fluid>
            <Image
                className="py-4 my-4"
                src={imgBackground ? imgBackground : defaultImage}
                alt="background-img"
                fluid
                style={{ width: '850px', height: '300px' }}
            />
            <Row className="flex-column position-absolute top-0 w-100 glass-main">
                <Col xs={12}>
                    <div>
                        <p className="fw-bold mt-2 mb-0 mx-3 text-dark fs-2">
                            {city} - {formattedDate}
                        </p>
                    </div>
                </Col>
                <Col xs={12}>
                    <Row className="mb-3 z-1">
                        <Col className="d-flex">
                            <Image className="w-50 p-1 me-2 p-2" src={icon} />
                            <h1 className="ms-1 p-1 text-white text-shadow">
                                {temp ? temp.toFixed(1) : ""}°C
                            </h1>
                        </Col>
                        <Col className="m-3 mt-1 ms-0 d-flex flex-column align-items-start text-white">
                            <h4 className="fw-blod mb-0 text-capitalize text-shadow">
                                {description}
                            </h4>
                            <p className="m-0 ">
                                <small className="text-shadow">
                                    Percepita  {feelsLike ? feelsLike.toFixed(1) : ""}°
                                </small>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Weather;
