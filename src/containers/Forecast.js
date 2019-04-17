import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import startCase from 'lodash/startCase';
import { API_KEY, API_URL } from '../config/config';

import { ForecastToday, Forecast5Day } from '../components';

const convertKelvinToCelsius = (kelvin) => Math.round(((kelvin - 273.15)));

const formatWeatherData =  (day) => {
    return {
        day: moment(day.dt * 1000).format('ddd'),
        description: startCase(day.weather[0].description),
        high: convertKelvinToCelsius(day.temp.max),
        low: convertKelvinToCelsius(day.temp.min),
    }
}

function Forecast() {

    const [weatherData, setWeatherData] = useState({})

    async function getWeatherData() {
        const {data} = await axios.get(`${API_URL}${API_KEY}`);

        setWeatherData(data);
    }

    useEffect(() => {
        getWeatherData()
    }, {});

    const {list: dailyWeatherData = [], city} = weatherData;
    let todaysForecast, next4DaysForecast;

    if(dailyWeatherData.length) {
        todaysForecast = formatWeatherData(dailyWeatherData[0]);
        todaysForecast.city = city.name;

        next4DaysForecast = dailyWeatherData.slice(1, 5).map(day => formatWeatherData(day));
    }

    return (
        <>
            <ForecastToday {...todaysForecast} />
            <Forecast5Day forecast={next4DaysForecast}/>
        </>
    );
}

export default Forecast;
