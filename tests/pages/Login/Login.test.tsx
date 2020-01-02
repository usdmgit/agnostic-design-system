import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory, createLocation } from 'history';
import Login from '../../../src/pages/Login';

describe('Login', () => {
  const getComponent = (callback: () => void) => {
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
      <Login
        routeProps={{
          history: { ...history },
          location: { ...location },
          match: { ...match },
        }}
        callback={callback}
      />,
    );
  };
  it('renders without crashing', () => {
    const callback = () => {};
    const login = getComponent(callback);
    expect(login).toMatchSnapshot();
  });
});
