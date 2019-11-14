import React from 'react';
import { cleanup, render } from '@testing-library/react';
import DateInput from '../../../../src/components/Input/DateInput';

afterEach(cleanup);

describe('DateInput', () => {
  const value = '2019-01-01';

  const renderComponent = (iconPosition?: 'left' | 'right') =>
    render(
      <DateInput
        iconPosition={iconPosition}
        id="1"
        onChange={() => {}}
        statusClassname="status-classname"
        value={value}
      />,
    );

  it('renders without crashing', () => {
    const dateInput = renderComponent();
    return expect(dateInput!).toMatchSnapshot();
  });

  it('displays the given value', () => {
    const dateInput = renderComponent();
    return expect(dateInput!.findByDisplayValue(value)).toBeTruthy();
  });

  it('renders the calendar icon on the left', () => {
    const dateInput = renderComponent('left');
    return expect(dateInput!.getByDisplayValue(value)).toHaveProperty(
      'className',
      'input icon-position-left status-classname',
    );
  });
});
