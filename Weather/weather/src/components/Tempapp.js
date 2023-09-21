import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");
  const [weather, setWeather] = useState(null);
  console.log(search);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=79785c4b0632ad562c83bc7846b931e2`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
      if (resJson.weather && resJson.weather.length > 0) {
        setWeather(resJson.weather[0]);
      }
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box ">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        {!city ? (
          <p className="errorMsg">No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°C</h1>
              <h3 className="tempmin_max">
                Min: {city.temp_min}°C|{city.temp_max}°C
              </h3>
              <div>
                {weather ? (
                  <h3 className="tempmin_max">weather: {weather.description}</h3>
                ) : (
                  <h3 className="tempmin_max">weather: null</h3>
                )}
              </div>
            </div>
            <div>
              <div className="wave -one"></div>
              <div className="wave -two"></div>
              <div className="wave -three"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
