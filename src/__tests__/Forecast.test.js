import React from 'react';
import { ForecastToday } from '../components/index';

// jest.mock('axios');

it('renders without crashing', () => {
    // const getSpy = jest.spyOn('uaxios, 'get');
    const wrapper = mount(
        <ForecastToday />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
});