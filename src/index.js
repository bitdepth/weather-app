import React from "react";
import ReactDOM from "react-dom";

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
          <Flex
              width={1}
              alignItems='center'
              justifyContent='center'
              flexDirection='column'

          >
              <Forecast />
          </Flex>
      </Flex>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
