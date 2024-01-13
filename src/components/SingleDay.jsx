import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const SingleDay = ({
    day,
    date,
    temp,
    temp_min,
    temp_max,
    weather,
    icon,
    description,
    humidity,
    getIcon,
}) => {
    const currentDate = new Date(date);
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(currentDate);

    return (
        <Card className="text-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
            <Card.Body>
                <Card.Title>{formattedDate}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{description}</Card.Subtitle>
                <Image
                    className="w-50"
                    fluid
                    src={getIcon(description.toString())}
                    alt="daily-mood"
                />
                <Card.Text>
                    Temperatura: {temp.toFixed(1)}°C

                </Card.Text>
                <Card.Text>
                    Humidity: {humidity}%
                </Card.Text>
            </Card.Body>
        </Card>
    );

};

export default SingleDay;
