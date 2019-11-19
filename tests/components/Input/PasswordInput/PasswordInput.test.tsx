import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import PasswordInput from '../../../../src/components/Input/PasswordInput';

afterEach(cleanup);

describe('PasswordInput', () => {
  const value = 'the_password';

  const getComponent = () =>
    render(
      <PasswordInput
        id="1"
        onChange={() => {}}
        statusClassname="status-classname"
        value={value}
      />,
    );

  it('renders without crashing', () => {
    const passwordInput = getComponent();
    return expect(passwordInput!).toMatchSnapshot();
  });

  it('displays the given value', () => {
    const passwordInput = getComponent();
    return expect(passwordInput!.findByDisplayValue(value)).toBeTruthy();
  });

  it('executes show password button click', () => {
    const { getByLabelText, getByDisplayValue } = getComponent();

    fireEvent.click(getByLabelText('Reveal Password'));
    const changedButton = getByLabelText('Reveal Password');
    const passwordInput = getByDisplayValue('the_password');

    expect(changedButton).toHaveProperty('className', 'button text');
    expect(passwordInput).toHaveProperty('type', 'text');
  });
});
