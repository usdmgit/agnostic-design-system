import React from 'react'
import { cleanup, render } from '@testing-library/react'
import TextInput from '../../../src/components/TextInput'

afterEach(cleanup)

describe('TextInput', () => {
  const id = '1';
  const labelClass = 'labelClass';
  const onChange = () => {};
  const value = 'the_value';

  it('renders without crashing', () => {
    const textInput = render(<TextInput
      id={id}
      onChange={onChange}
      value={value}
    />);
    return expect(textInput!).toMatchSnapshot()
  })

  it('displays the given value', () => {
    const textInput = render(<TextInput 
      id={id}
      onChange={onChange}
      value={value}
    />);
    return expect(textInput!.findByDisplayValue(value)).toBeTruthy();
  })
})