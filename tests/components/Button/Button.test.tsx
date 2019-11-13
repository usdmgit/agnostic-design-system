import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Button, { Type } from '../../../src/components/Button';

afterEach(cleanup);

describe('Button', () => {
  const getComponent = (type: Type = 'main', onClick: (event: React.MouseEvent<HTMLButtonElement>) => void, iconPosition?: 'right' | 'left' | undefined) => (
    render(
      <Button
        id='1'
        name='button1'
        label='Button Label'
        onClick={onClick}
        type={type}
        disabled={false}
        iconPosition={iconPosition}
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


  it('renders a button with the left iconPosition', () => {
    const { getByText } = getComponent('main', () => { }, 'left');
    const node = getByText('Button Label');
    expect(node).toHaveProperty('className', 'button main left');
  });

  it('renders a button with the right iconPosition', () => {
    const { getByText } = getComponent('main', () => { }, 'right');
    const node = getByText('Button Label');
    expect(node).toHaveProperty('className', 'button main right');
  });
});