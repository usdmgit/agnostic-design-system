import React from 'react';
import { render } from '@testing-library/react';
import Text, { Type } from '../../../src/components/Text';

describe('Text', () => {
  const value = 'This is a text value';

  const getComponent = (
    type: Type = 'body-content',
    maxLength?: number,
    customClassName?: string,
  ) =>
    render(
      <Text
        type={type}
        value={value}
        maxLength={maxLength}
        customClassName={customClassName}
      />,
    );

  it('renders without crashing', () => {
    expect(getComponent()).toMatchSnapshot();
  });

  it('renders a body-content', () => {
    const { getByText } = getComponent();
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'body-content ');
  });

  it('renders a body-content with a custom class name', () => {
    const customClassName = 'custom-class-name';
    const { getByText } = getComponent(
      'body-content',
      undefined,
      customClassName,
    );
    const node = getByText(value);
    expect(node).toHaveProperty('className', `body-content ${customClassName}`);
  });

  it('renders a title', () => {
    const { getByText } = getComponent('title');
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'title ');
  });

  it('truncates the text after maxLength and adds ...', () => {
    const text = getComponent('body-content', 3);
    const truncatedText = 'Thi ...';
    expect(text.getByText(truncatedText)).toBeTruthy();
  });
});
