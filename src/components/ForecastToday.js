import React from 'react';

import {
    Box,
    Text,
} from '@rebass/emotion';

export function ForecastToday({city, description, high}) {

    return (
        <Box
            p={3}
            color='magenta'
            width={1 / 2}
            bg='white'
        >

            <Text
                fontSize={[4, 5, 6]}
                color='black'
                fontWeight='bold'
                textAlign='center'
            >
                {city}
            </Text>
            <Text
                textAlign='center'
                color='black'
            >
                {description}
            </Text>
            <Text
                fontSize={[4, 5, 6]}
                textAlign='center'
                color='black'
            >
                {high} &deg;
            </Text>

        </Box>
    );
}
