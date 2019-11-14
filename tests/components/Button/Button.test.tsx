import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Button, {
  Type,
  IconPosition,
  Size,
} from '../../../src/components/Button';

afterEach(cleanup);

describe('Button', () => {
  const getComponent = (
    type: Type = 'main',
    onClick: () => void,
    iconPosition?: IconPosition,
    size?: Size,
  ) =>
    render(
      <Button
        id="1"
        name="button1"
        label="Button Label"
        onClick={onClick}
        type={type}
        disabled={false}
        iconPosition={iconPosition}
        size={size}
      />,
    );

  it('renders without crashing', () => {
    expect(getComponent('main', () => {})).toMatchSnapshot();
  });

  it('calls onClick prop on button click', () => {
    let clickCount = 0;

    const addClick = () => {
      clickCount += 1;
    };

    const { getByText } = getComponent('main', addClick);
    const node = getByText('Button Label');

    fireEvent.click(node);
    expect(clickCount).toBe(1);
  });

  it('renders a button with a left icon', () => {
    const { getByText } = getComponent('main', () => {}, 'left');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button main left-icon regular-size',
    );
  });

  it('renders a button with a right icon', () => {
    const { getByText } = getComponent('main', () => {}, 'right');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button main right-icon regular-size',
    );
  });

  it('renders a button with small size', () => {
    const { getByText } = getComponent('main', () => {}, undefined, 'small');
    const node = getByText('Button Label');
    expect(node).toHaveProperty('className', 'button main  small-size');
  });

  it('renders a button with small size and a left icon', () => {
    const { getByText } = getComponent('main', () => {}, 'left', 'small');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button main left-icon small-size',
    );
  });

  it('renders a button with small size and a right icon', () => {
    const { getByText } = getComponent('main', () => {}, 'right', 'small');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button main right-icon small-size',
    );
  });

  it('renders a secondary button', () => {
    const { getByText } = getComponent('secondary', () => {});
    const node = getByText('Button Label');
    expect(node).toHaveProperty('className', 'button secondary  regular-size');
  });

  it('renders a secondary button with a left icon', () => {
    const { getByText } = getComponent('secondary', () => {}, 'left');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button secondary left-icon regular-size',
    );
  });

  it('renders a secondary button with a right icon', () => {
    const { getByText } = getComponent('secondary', () => {}, 'right');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button secondary right-icon regular-size',
    );
  });

  it('renders a secondary button with small size', () => {
    const { getByText } = getComponent(
      'secondary',
      () => {},
      undefined,
      'small',
    );
    const node = getByText('Button Label');
    expect(node).toHaveProperty('className', 'button secondary  small-size');
  });

  it('renders a secondary button with small size and a left icon', () => {
    const { getByText } = getComponent('secondary', () => {}, 'left', 'small');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button secondary left-icon small-size',
    );
  });

  it('renders a secondary button with small size and a right icon', () => {
    const { getByText } = getComponent('secondary', () => {}, 'right', 'small');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button secondary right-icon small-size',
    );
  });

  it('renders a ghost button', () => {
    const { getByText } = getComponent('ghost', () => {});
    const node = getByText('Button Label');
    expect(node).toHaveProperty('className', 'button ghost  regular-size');
  });

  it('renders a ghost button with a left icon', () => {
    const { getByText } = getComponent('ghost', () => {}, 'left');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button ghost left-icon regular-size',
    );
  });

  it('renders a ghost button with a right icon', () => {
    const { getByText } = getComponent('ghost', () => {}, 'right');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button ghost right-icon regular-size',
    );
  });

  it('renders a ghost button with small size', () => {
    const { getByText } = getComponent('ghost', () => {}, undefined, 'small');
    const node = getByText('Button Label');
    expect(node).toHaveProperty('className', 'button ghost  small-size');
  });

  it('renders a ghost button with small size and a left icon', () => {
    const { getByText } = getComponent('ghost', () => {}, 'left', 'small');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button ghost left-icon small-size',
    );
  });

  it('renders a ghost button with small size and a right icon', () => {
    const { getByText } = getComponent('ghost', () => {}, 'right', 'small');
    const node = getByText('Button Label');
    expect(node).toHaveProperty(
      'className',
      'button ghost right-icon small-size',
    );
  });
});
