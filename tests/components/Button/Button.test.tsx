import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Button, { Type } from '../../../src/components/Button';

afterEach(cleanup);

describe('Button', () => {
  const getComponent = (type: Type = 'main', onClick: (event: React.MouseEvent<HTMLButtonElement>) => void) => (
    render(
      <Button
        id='1'
        name='button1'
        label='Button Label'
        onClick={onClick}
        type={type}
        disabled={false}
      />,
    )
  )

  it('renders without crashing', () => {
    expect(getComponent('main', () => { })).toMatchSnapshot();
  });

  it('calls onClick prop on button click', () => {
    let clickCount = 0;

    const addClick = () => {
      clickCount++;
    }

    const { getByText } = getComponent('main', addClick);
    const node = getByText('Button Label');

    fireEvent.click(node);
    expect(clickCount).toBe(1);
  });
});