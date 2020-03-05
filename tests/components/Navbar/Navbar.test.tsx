import React from 'react';
import { render } from '@testing-library/react';
import Navbar from '../../../src/components/Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const navbar = render(<Navbar />);
    return expect(navbar!).toMatchSnapshot();
  });
});
