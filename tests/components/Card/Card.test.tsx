import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Card from '../../../src/components/Card';

describe('Card', () => {
  const getComponent = (onClick?: () => void) =>
    render(
      <Card
        image="../images/image.jpg"
        title="Card Title"
        description="Ea qui proident velit cupidatat ut. Ea dolor anim anim id voluptate voluptate incididunt aliqua eu labore."
        shortcuts={[
          { label: 'Shortcut 1 label', onClick: onClick! },
          { label: 'Shortcut 2 label', onClick: onClick! },
        ]}
        primaryButton={{ label: 'Button label', onClick: onClick! }}
      />,
    );

  const clickOnButton = (buttonLabel: string) => {
    let clickCount = 0;

    const addClick = () => {
      clickCount += 1;
    };

    const { getByText } = getComponent(addClick);
    const node = getByText(buttonLabel);
    fireEvent.click(node);
    return clickCount;
  };

  it('renders without crashing', () => {
    const card = getComponent();
    return expect(card).toMatchSnapshot();
  });

  it('calls onClick prop on Shortcut 1 button click', () => {
    const clickCount = clickOnButton('Shortcut 1 label');
    expect(clickCount).toBe(1);
  });

  it('calls onClick prop on Shortcut 2 button click', () => {
    const clickCount = clickOnButton('Shortcut 2 label');
    expect(clickCount).toBe(1);
  });

  it('calls onClick prop on Button click', () => {
    const clickCount = clickOnButton('Button label');
    expect(clickCount).toBe(1);
  });
});
