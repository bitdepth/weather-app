import React from 'react';
import axiosMock from 'axios';
import 'jest-dom/extend-expect';

import { render, cleanup, waitForElement } from 'react-testing-library';

import Forecast from '../containers/Forecast';
import { ForecastToday, Forecast4Day } from '../components/index';

import { mockJsonResponse } from '../__mocks__/weather';

describe('Container: Forecast', () => {

    afterEach(()  => {
        axiosMock.get.mockReset();
        cleanup()
    });

    it('renders todays weather', async () => {
        axiosMock.get.mockImplementation(() => Promise.resolve({ data: mockJsonResponse }));

        const { getByTestId } = render(<Forecast />);
        expect(getByTestId('loading')).toHaveTextContent('Loading weather data...');

        const weatherToday = await waitForElement(() => getByTestId('weather-today'));
        expect(weatherToday).toHaveTextContent('Glasgow');
        expect(weatherToday).toHaveTextContent('Moderate Rain');
        expect(weatherToday).toHaveTextContent('8 °');
        expect(axiosMock.get).toHaveBeenCalledTimes(1);

    });

    it('renders 4 days weather', async () => {
        axiosMock.get.mockImplementation(() => Promise.resolve({ data: mockJsonResponse }));

        const { getByTestId } = render(<Forecast />);
        expect(getByTestId('loading')).toHaveTextContent('Loading weather data...');

        const weather4Day = await waitForElement(() => getByTestId('weather-4day'));
        expect(weather4Day).toHaveTextContent('Wed');
        expect(weather4Day).toHaveTextContent('Broken Clouds');
        expect(weather4Day).toHaveTextContent('15 °');
        expect(weather4Day).toHaveTextContent('5 °');

        expect(axiosMock.get).toHaveBeenCalledTimes(1);


    });
});

describe('Component: ForecastToday', () => {

    const mockProps = {
        city: 'Glasgow',
        day: 'Mon',
        description: 'Light Rain',
        high: 16,
        low: 4,
    };

    it('matches snapshot', () => {
        const wrapper = mount(
            <ForecastToday {...mockProps} />
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders data correctly from props', () => {
        const wrapper = mount(
            <ForecastToday {...mockProps} />
        );
        expect(wrapper.find('ForecastToday').props()).toEqual(mockProps);
        expect(wrapper.html().includes('Glasgow')).toBe(true);
        expect(wrapper.html().includes('Light Rain')).toBe(true);
        expect(wrapper.html().includes('16')).toBe(true);
    });

});

describe('Component: Forecast4Day', () => {

    const mockProps = [
        {
            day: 'Tue',
            description: 'Light Rain',
            high: 14,
            low: 5,
        },
        {
            day: 'Wed',
            description: 'Scatterred Clouds',
            high: 17,
            low: 6,
        },
        {
            day: 'Thurs',
            description: 'Moderate Rain',
            high: 15,
            low: 3,
        },
        {
            day: 'Fri',
            description: 'Broken Clouds',
            high: 17,
            low: 5,
        },
    ];

    it('matches snapshot', () => {
        const wrapper = mount(
            <Forecast4Day forecast={mockProps} />
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders data correctly from props', () => {
        const wrapper = mount(
            <Forecast4Day forecast={mockProps} />
        );

        expect(wrapper.find('Forecast4Day').props().forecast).toEqual(mockProps);
        expect(wrapper.find('DayForecast').length).toEqual(4);
        expect(wrapper.find('DayForecast').first().props()).toEqual(mockProps[0]);

        const firstItemHtml = wrapper.find('DayForecast').first().html();

        expect(firstItemHtml.includes('Tue')).toBe(true);
        expect(firstItemHtml.includes('Light Rain')).toBe(true);
        expect(firstItemHtml.includes('14')).toBe(true);
        expect(firstItemHtml.includes('5')).toBe(true);

    });

});

