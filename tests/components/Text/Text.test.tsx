import React from 'react';
import { render } from '@testing-library/react';
import Text, { Type } from '../../../src/components/Text';

describe('Text', () => {
  const value = 'This is a text value';

  const getComponent = (
    type: Type = 'body-content',
    maxLength?: number,
    wrapperClassName?: string,
    isBold?: boolean,
    isSmall?: boolean,
  ) =>
    render(
      <Text
        type={type}
        value={value}
        maxLength={maxLength}
        wrapperClassName={wrapperClassName}
        isBold={isBold}
        isSmall={isSmall}
      />,
    );

  it('renders without crashing', () => {
    expect(getComponent()).toMatchSnapshot();
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

  it('renders a heading', () => {
    const { container } = getComponent('heading');
    expect(container.querySelector('h1')).toBeTruthy();
  });

  it('renders a title', () => {
    const { getByText } = getComponent('title');
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'title');
  });

  it('renders a body-content', () => {
    const { getByText } = getComponent();
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'body-content');
  });

  it('renders a body-content-big', () => {
    const { getByText } = getComponent('body-content-big');
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'body-content-big');
  });

  it('renders a body-content bold', () => {
    const { getByText } = getComponent(
      'body-content',
      undefined,
      undefined,
      true,
    );
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'body-content bold');
  });

  it('renders a caption', () => {
    const { getByText } = getComponent('caption');
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'caption');
  });

  it('renders a caption bold', () => {
    const { getByText } = getComponent('caption', undefined, undefined, true);
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'caption bold');
  });

  it('renders a label-cta', () => {
    const { getByText } = getComponent('label-cta');
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'label-cta');
  });

  it('renders a label-button', () => {
    const { getByText } = getComponent('label-button');
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'label-button');
  });

  it('renders a label-button small', () => {
    const { getByText } = getComponent(
      'label-button',
      undefined,
      undefined,
      undefined,
      true,
    );
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'label-button small');
  });

  it('renders a label-link', () => {
    const { getByText } = getComponent('label-link');
    const node = getByText(value);
    expect(node).toHaveProperty('className', 'label-link');
  });

  it('truncates the text after maxLength and adds ...', () => {
    const text = getComponent('body-content', 3);
    const truncatedText = 'Thi ...';
    expect(text.getByText(truncatedText)).toBeTruthy();
  });
});
