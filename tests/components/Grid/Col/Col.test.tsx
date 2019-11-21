import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Col from '../../../../src/components/Grid/Col';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

describe('Col', () => {
  it('renders without crashing', () => {
    const col = render(<Col />);
    return expect(col!).toMatchSnapshot();
  });

  it('renders children components', () => {
    const text = 'Avison Young';
    const col = render(
      <Col>
        <p>{text}</p>
      </Col>,
    );
    return expect(col!.findByDisplayValue(text)).toBeTruthy();
  });

  describe('when using responsive columns', () => {
    const getCol = () => {
      const { container } = render(<Col xs={4} sm={4} md={3} lg={1} />);

      return container.firstChild;
    };

    it('adds the xs class', () => {
      expect(getCol()).toHaveClass('ay-col-xs-4');
    });

    it('adds the sm class', () => {
      expect(getCol()).toHaveClass('ay-col-sm-4');
    });

    it('adds the md class', () => {
      expect(getCol()).toHaveClass('ay-col-md-3');
    });

    it('adds the lg class', () => {
      expect(getCol()).toHaveClass('ay-col-lg-1');
    });
  });
});
