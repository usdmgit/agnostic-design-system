import usersClient from './usersClient';
import { SIGN_IN_MUTATION } from './mutations';
import { User } from './models';

const login = async (email: string, password: string): Promise<User | null> => {
  let user = null;
  try {
    const { data } = await usersClient.mutate({
      mutation: SIGN_IN_MUTATION,
      variables: {
        email: email.toLowerCase(),
        password,
      },
    });

    if (data && data.signIn && data.signIn.token) {
      user = data.signIn;
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return Promise.resolve(user);
};

export default {
  login,
};
