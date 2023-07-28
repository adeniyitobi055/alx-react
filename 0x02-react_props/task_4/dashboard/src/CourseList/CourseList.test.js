import React from 'react';
import { render } from '@testing-library/jest-dom';
import CourseList from './CourseList';

describe('CourseList', () => {
    it('renders CourseList components without crashing', () => {
        render(<CourseList />);
    });

    it('renders the 5 different rows', () => {
        const { container } = render(<CourseList />);
        const rows = container.querySelectorAll('tr');
        expect(rows.length).toBe(5);
    });
});