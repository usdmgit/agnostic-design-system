import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Container from '../../../../src/components/Grid/Container';

afterEach(cleanup);

describe('Container', () => {
  it('renders without crashing', () => {
    const container = render(<Container />);
    return expect(container!).toMatchSnapshot();
  });

  it('renders children components', () => {
    const text = 'Avison Young';
    const container = render(
      <Container>
        <p>{text}</p>
      </Container>,
    );
    return expect(container!.findByDisplayValue(text)).toBeTruthy();
  });
});
