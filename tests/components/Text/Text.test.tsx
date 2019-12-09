import React from 'react';
import { render } from '@testing-library/react';
import Text, { Type } from '../../../src/components/Text';

describe('Text', () => {
  const value = 'This is a text value';

  const getComponent = (
    type: Type = 'body-content',
    maxLength?: number,
    wrapperClassName?: string,
  ) =>
    render(
      <Text
        type={type}
        value={value}
        maxLength={maxLength}
        wrapperClassName={wrapperClassName}
      />,
    );

  it('renders without crashing', () => {
    expect(getComponent()).toMatchSnapshot();
  });

  it('renders a body-content', () => {
    const { getByText } = getComponent();
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'body-content');
  });

  it('renders a body-content with a custom class name', () => {
    const wrapperClassName = 'custom-class-name';
    const { getByText } = getComponent(
      'body-content',
      undefined,
      wrapperClassName,
    );
    const node = getByText(value);
    expect(node).toHaveProperty(
      'className',
      `body-content ${wrapperClassName}`,
    );
  });

  it('renders a title', () => {
    const { getByText } = getComponent('title');
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'title');
  });

  it('truncates the text after maxLength and adds ...', () => {
    const text = getComponent('body-content', 3);
    const truncatedText = 'Thi ...';
    expect(text.getByText(truncatedText)).toBeTruthy();
  });

  it('renders a heading', () => {
    const { container } = getComponent('heading');
    expect(container.querySelector('h1')).toBeTruthy();
  });
});
