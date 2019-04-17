import React from 'react';
import ReactDOM from 'react-dom';

import {
    Flex
} from '@rebass/emotion';

import Forecast from './containers/Forecast';

function App() {
    return (
        <Flex
            px={4}
            py={4}

        >

            <Forecast/>
        </Flex>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
