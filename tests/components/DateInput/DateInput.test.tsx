import React from 'react'
import { cleanup, render } from '@testing-library/react'
import DateInput from '../../../src/components/DateInput'

afterEach(cleanup)

describe('DateInput', () => {
  const id = '1';
  const iconPosition = 'left';
  const onChange = () => {};
  const value = '2019-01-01';

  function renderComponent(id: string, onChange: any, value: string, iconPosition?: any ) {
    return render(<DateInput 
      iconPosition={iconPosition}
      id={id}
      onChange={onChange}
      value={value}
    />)
  }

  it('renders without crashing', () => {
    const dateInput = renderComponent(id, onChange, value);
    return expect(dateInput!).toMatchSnapshot()
  })

  it('displays the given value', () => {
    const dateInput = renderComponent(id, onChange, value);
    return expect(dateInput!.findByDisplayValue(value)).toBeTruthy();
  })

  it('renders the calendar icon on the left', () => {
    const dateInput = renderComponent(id, onChange, value, iconPosition);
    return expect(dateInput!.getByDisplayValue(value)).toHaveProperty('className', 'date-input icon-position-left ');
  })
})