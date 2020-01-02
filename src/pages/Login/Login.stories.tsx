import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory, createLocation } from 'history';
import Login from '.';

const stories = storiesOf('Pages|Login', module);
const history = createMemoryHistory();
const path = `/route/:id`;

const match = {
  isExact: false,
  path,
  url: path.replace(':id', '1'),
  params: { id: '1' },
};

const location = createLocation(match.url);
location.state = { from: { pathname: '/' } };

stories.add(
  'Login Page',
  () => (
    <div>
      <Login history={history} location={location} match={match} />
    </div>
  ),
  {
    order: 2,
  },
);
