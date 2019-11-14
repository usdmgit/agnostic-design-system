import React from 'react';
import { cleanup, render } from '@testing-library/react';
import TextareaInput from '../../../../src/components/Input/TextareaInput';

afterEach(cleanup);

describe('TextareaInput', () => {
  const value = 'the_value';

  const getComponent = () => {
    const onChange = () => {};

    return render(
      <TextareaInput
        id="1"
        onChange={onChange}
        value={value}
        statusClassname="status-classname"
      />,
    );
  };

  it('renders without crashing', () => {
    return expect(getComponent()!).toMatchSnapshot();
  });

  it('displays the given value', () => {
    return expect(getComponent()!.findByDisplayValue(value)).toBeTruthy();
  });
});
