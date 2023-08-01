import React from 'react';
import { render } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header Cell" />
        </tbody>
      </table>
    );

    const thElement = container.querySelector('th');
    expect(thElement).toBeInTheDocument();
    expect(thElement.getAttribute('colSpan')).toBe('2');
    expect(thElement.textContent).toBe('Header Cell');
  });

  it('renders two cells when isHeader is true and textSecondCell is present', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
        </tbody>
      </table>
    );

    const thElements = container.querySelectorAll('th');
    expect(thElements.length).toBe(2);
    expect(thElements[0].textContent).toBe('Header 1');
    expect(thElements[1].textContent).toBe('Header 2');
  });

  it('renders correctly two td elements within a tr element when isHeader is false', () => {
    const { container } = render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />
        </tbody>
      </table>
    );

    const trElement = container.querySelector('tr');
    expect(trElement).toBeInTheDocument();

    const tdElements = container.querySelectorAll('td');
    expect(tdElements.length).toBe(2);
    expect(tdElements[0].textContent).toBe('Data 1');
    expect(tdElements[1].textContent).toBe('Data 2');
  });
});
