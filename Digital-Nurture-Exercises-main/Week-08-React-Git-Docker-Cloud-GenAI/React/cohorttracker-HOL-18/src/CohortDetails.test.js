import React from 'react';
import { shallow, mount } from 'enzyme';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

describe('Cohort Details Component', () => {
    const mockCohort = CohortData[0];

    test('should create the component', () => {
        const wrapper = shallow(<CohortDetails cohort={mockCohort} />);
        expect(wrapper.exists()).toBe(true);
    });

    test('should initialize the props', () => {
        const wrapper = mount(<CohortDetails cohort={mockCohort} />);
        expect(wrapper.props().cohort).toEqual(mockCohort);
    });

    test('should display cohort code in h3', () => {
        const wrapper = mount(<CohortDetails cohort={mockCohort} />);
        expect(wrapper.find('h3').text()).toBe(mockCohort.code);
    });

    test('should always render same html', () => {
        const wrapper = shallow(<CohortDetails cohort={mockCohort} />);
        expect(wrapper).toMatchSnapshot();
    });
});
