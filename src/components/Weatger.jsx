import moment from "moment";
import { Button } from "semantic-ui-react";
import styled from "styled-components";
import "./styles.css";
import { IoIosThunderstorm } from "react-icons/io";
import { FaSmog } from "react-icons/fa";
import {
  BsFillCloudDrizzleFill,
  BsFillCloudRainHeavyFill,
  BsCloudSnowFill,
  BsFillSunFill,
  BsFillCloudFill,
} from "react-icons/bs";

const Weather = ({ weatherData }) => {
  const WeatherIcon = styled.div`
    color: whitesmaoke;
  `;
  const refresh = () => {
    window.location.reload();
  };

  let weatherIcon = null;

  if (weatherData.weather[0].main === "Thunderstorm") {
    weatherIcon = <IoIosThunderstorm />;
  } else if (weatherData.weather[0].main === "Drizzle") {
    weatherIcon = <BsFillCloudDrizzleFill />;
  } else if (weatherData.weather[0].main === "Rain") {
    weatherIcon = <BsFillCloudRainHeavyFill />;
  } else if (weatherData.weather[0].main === "Snow") {
    weatherIcon = <BsCloudSnowFill />;
  } else if (weatherData.weather[0].main === "Clear") {
    weatherIcon = <BsFillSunFill />;
  } else if (weatherData.weather[0].main === "Clouds") {
    weatherIcon = <BsFillCloudFill />;
  } else {
    weatherIcon = <FaSmog />;
  }
  return (
    <div className="main">
      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button
          className="button"
          inverted
          color="blue"
          circular
          icon="refresh"
          onClick={refresh}
        />
      </div>
      <div className="flex">
        <p className="day">
          {moment().format("dddd")}, <span>{moment().format("LL")}</span>
        </p>
        <div className="flex">
          <WeatherIcon style={{ fontSize: 30, marginTop: 15 }}>
            {weatherIcon}
          </WeatherIcon>
          <p className="description">{weatherData.weather[0].main}</p>
        </div>
      </div>

      <div className="flex">
        <div className="temp">Temperature: {weatherData.main.temp} &deg;F</div>
        <div className="temp">Humidity: {weatherData.main.humidity} %</div>
      </div>

      <div className="flex">
        <div className="sunrise-sunset">
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-IN")}
        </div>
        <div className="sunrise-sunset">
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}
        </div>
      </div>
    </div>
  );
};

export default Weather;
