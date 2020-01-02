import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory, createLocation } from 'history';
import Login from '../../../src/pages/Login';

describe('Login', () => {
  const getComponent = () => {
    const history = createMemoryHistory();
    const path = `/route/:id`;

    const match = {
      isExact: false,
      path,
      url: path.replace(':id', '1'),
      params: { id: '1' },
    };

    const location = createLocation(match.url);

    return render(
      <Login history={history} location={location} match={match} />,
    );
  };
  it('renders without crashing', () => {
    const login = getComponent();
    expect(login).toMatchSnapshot();
  });
});
