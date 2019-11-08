import React from 'react'
import { cleanup, render } from '@testing-library/react'
import TextareaInput from '../../../src/components/TextareaInput'

afterEach(cleanup)

describe('TextareaInput', () => {
  const id = '1';
  const labelClass = 'labelClass';
  const onChange = () => {};
  const value = 'the_value';

  function getComponent(){
    return render(<TextareaInput
      id={id}
      onChange={onChange}
      value={value}
    />);
  }

  it('renders without crashing', () => {
    const textareaInput = getComponent();
    return expect(textareaInput!).toMatchSnapshot()
  })

  it('displays the given value', () => {
    const textareaInput = getComponent();
    return expect(textareaInput!.findByDisplayValue(value)).toBeTruthy();
  })
})