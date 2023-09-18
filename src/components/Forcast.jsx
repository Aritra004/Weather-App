import { List } from "semantic-ui-react";
import moment from "moment";
import "./styles.css";
import styled from "styled-components";
import { IoIosThunderstorm } from "react-icons/io";
import { FaSmog } from "react-icons/fa";
import {
  BsFillCloudDrizzleFill,
  BsFillCloudRainHeavyFill,
  BsCloudSnowFill,
  BsFillSunFill,
  BsFillCloudFill,
} from "react-icons/bs";

const Forcast = (props, { weatherData }) => {
  const WeatherIcon = styled.div`
    color: whitesmaoke;
  `;
  const { forcaste } = props;
  const results = forcast.map((item, index) => {
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
      <div key={index} className="forcast">
        <div className="flex-forcast">
          <p>{moment(item.dt_tx).format("dddd")}</p>

          <WeatherIcon style={{ fontSize: 25, marginTop: 4 }}>
            {weatherIcon}
          </WeatherIcon>

          <p>{item.temperature} &deg;F</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <List>{results}</List>
    </div>
  );
};

export default Forcast;
