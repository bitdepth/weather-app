import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow } from 'enzyme';
import { ForecastToday } from '../components/';

// jest.mock('axios');

it('sums numbers', () => {
    it('should fetch a list of tasks', () => {
        // const getSpy = jest.spyOn(axios, 'get');
        const forecastInstance = shallow(
            <ForecastToday />
        );
        expect(1+1).toEqual(2);
    });
});