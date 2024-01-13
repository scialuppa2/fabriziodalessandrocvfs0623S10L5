import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import SearchBar from "./SearchBar";
import NextDays from "./NextDays";
import icons from "../data/icons.json";


const AppContainer = () => {
    const [lon, setLon] = useState();
    const [lat, setLat] = useState();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        function success(pos) {
            const crd = pos.coords;
            setLat(crd.latitude);
            setLon(crd.longitude);
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);

    const getIcon = function (weather) {
        for (let i = 0; i < icons.weather_conditions.length; i++) {
            if (
                weather.toLowerCase() ===
                icons.weather_conditions[i].condition.toLowerCase()
            ) {
                return icons.weather_conditions[i].image_link;
            }
        }
    };


    return (
        <div className="App">
            <header>
                <SearchBar setLon={setLon} setLat={setLat} />
                <Weather 
                    lon={lon}
                    lat={lat}
                    getIcon={getIcon}
                    windowWidth={windowWidth}
                />
            </header>
            <main>
                <NextDays
                    lon={lon}
                    lat={lat}
                    getIcon={getIcon}
                    windowWidth={windowWidth}
                    setWindowWidth={setWindowWidth}
                />
            </main>
        </div>
    );
};

export default AppContainer;
