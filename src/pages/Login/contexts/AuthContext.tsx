import * as React from 'react';

const DEFAULT_USER_AUTH = { id: 0, email: '' };

type UserAuth = {
  id: number;
  email: string;
};

interface AuthContextInterface {
  auth: UserAuth;
  setAuth: (userAuth: UserAuth) => void;
}

export const authContext = React.createContext<AuthContextInterface>({
  auth: DEFAULT_USER_AUTH,
  setAuth: () => {},
});

const useAuthHandler = (initialState: UserAuth) => {
  const [auth, setAuth] = React.useState(initialState);

  return {
    auth,
    setAuth,
  };
};

const { Provider } = authContext;

type PropTypes = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<PropTypes> = (props: PropTypes) => {
  const { auth, setAuth } = useAuthHandler(DEFAULT_USER_AUTH);

  return <Provider value={{ auth, setAuth }}>{props.children}</Provider>;
};

export default AuthProvider;
