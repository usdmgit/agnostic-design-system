import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Input from '../../../src/components/Input'

afterEach(cleanup)

describe('Input', () => {
  const id = "1";
  const label = "the_label";
  const onChange = () => {};
  const type = "text";
  const value = "the_value";
  const wrapperClass = "wrapperClass";

  it('renders without crashing', () => {
    const input = render(<Input 
      id={id}
      label={label}
      onChange={onChange}
      type={type}
      value={value}
      wrapperClass={wrapperClass}
    />);
    expect(input!).toMatchSnapshot()
  })

  it('displays the given value', () => {

    const input = render(<Input 
      id={id}
      label={label}
      onChange={onChange}
      type={type}
      value={value}
      wrapperClass={wrapperClass}
    />);
    return expect(input!.findByDisplayValue(value)).toBeTruthy();
  })

  it('renders with the default type=text', () => {
    const input = render(<Input 
      id={id}
      label={label}
      onChange={onChange}
      value={value}
      wrapperClass={wrapperClass}
    />);

    return expect(input!.getByDisplayValue(value)).toHaveProperty('type', 'text');
  })
})