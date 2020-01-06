import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory, createLocation } from 'history';
import Login from '.';

type UserAuth = {
  id: number;
  email: string;
};

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

const callback = (user: UserAuth) => {
  alert(`Logged in as ${user.email}`);
};

stories.add(
  'Login Page',
  () => (
    <div>
      <Login
        routeProps={{
          history: { ...history },
          location: { ...location },
          match: { ...match },
        }}
        callback={callback}
      />
    </div>
  ),
  {
    order: 1,
    info: `
    The \`Login\` component is designed to work with react router routes.  It validates the user and executes a callback function with a parameter of the following type:

    type UserAuth = {
      id: number;
      email: string;
    };

    The \`Login\` component use the \`history\`, \`location\` and \`match\` props from React Router.  These props are used to handle the browse history,
    and it uses the location to redirect the user to a specific page after the user is authenticated.

    Once the user is validated, it executes the callback function provided by the caller. 

    Usage instructions:
    
        import { Login as LoginComponent, UserAuth } from '@codelitt/ay-design-library';

        const onValidate = (user: UserAuth) => {
          // handle the user after it's validated.  In this case, it's being set in a context
          auth.setAuth({ id: user.id, email: user.email });
        };
    
        <LoginComponent
        routeProps={{
          history: { ...history },
          location: { ...location },
          match: { ...match },
        }}
        callback={onValidate}
      />
        `,
  },
);
