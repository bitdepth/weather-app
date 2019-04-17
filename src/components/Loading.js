import {
    Box,
    Text,
} from '@rebass/emotion';
import React from 'react';

export function Loading() {

    return (
        <Box
            p={3}
            width={1 / 2}
            bg='white'
            data-testid='loading'
        >
            <Text
                textAlign='center'
                color='black'
            >
                Loading weather data...
            </Text>

        </Box>
    );
}