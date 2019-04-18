import React from 'react';
import T from 'prop-types';
import {
    Flex,
    Text,
} from '@rebass/emotion';


const DayForecast = ({day, description, low, high}) => (
    <Flex
        p={3}
        width={1 / 2}
        color='magenta'
        bg='white'
        justifyContent='space-between'
    >

        <Text
            color='black'
            textAlign='center'
        >
            {day}
        </Text>
        <Text
            textAlign='center'
            color='black'
        >
            {description}
        </Text>
        <Text
            textAlign='center'
            color='black'
        >
            {high} &deg;
        </Text>
        <Text
            textAlign='center'
            color='black'
        >
            {low} &deg;
        </Text>

    </Flex>
);

DayForecast.propTypes = {
    day: T.string,
    description: T.string,
    high: T.number,
    low: T.number,
};


export function Forecast4Day({forecast = []}) {
    return (
        <Flex
            flexDirection='column'
            alignItems='center'
            width={1}
            data-testid='weather-4day'
        >
            {forecast.map((item) => <DayForecast key={item.day} {...item} />)}
        </Flex>
    );
}

Forecast4Day.propTypes = {
    forecast: T.arrayOf(T.shape({
        day: T.string,
        description: T.string,
        high: T.number,
        low: T.number,
    })).isRequired
};

