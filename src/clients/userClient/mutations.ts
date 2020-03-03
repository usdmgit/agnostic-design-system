import gql from 'graphql-tag';

export const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      ... on User {
        id
        firstName
        lastName
        companyName
        jobTitle
        email
        token
      }
    }
  }
`;

export default {
  SIGN_IN_MUTATION,
};
