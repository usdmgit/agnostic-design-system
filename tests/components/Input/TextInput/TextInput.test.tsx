import React from 'react';
import { render } from '@testing-library/react';
import TextInput from '../../../../src/components/Input/TextInput';

describe('TextInput', () => {
  const id = '1';
  const statusClassname = 'status-class-name';
  const onChange = () => {};
  const value = 'the_value';

  it('renders without crashing', () => {
    const textInput = render(
      <TextInput
        id={id}
        onChange={onChange}
        value={value}
        statusClassname={statusClassname}
      />,
    );
    return expect(textInput!).toMatchSnapshot();
  });

  it('displays the given value', () => {
    const textInput = render(
      <TextInput id={id} onChange={onChange} value={value} />,
    );
    return expect(textInput!.findByDisplayValue(value)).toBeTruthy();
  });
});
