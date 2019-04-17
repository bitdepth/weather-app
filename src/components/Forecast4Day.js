import React from 'react';

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


export function Forecast4Day({forecast = []}) {
    return (
        <>
            {forecast.map((item) => <DayForecast key={item.day} {...item} />)}
        </>
    );
}
