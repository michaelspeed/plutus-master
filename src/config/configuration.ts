export default () => ({
  endpoints: {
    auth: 'https://plutus-authentication-q32wjds34a-as.a.run.app',
  },
  token: 'plutus',
  exclusions: {
    gql: [],
    rest: [
      '/authentication/login'
    ],
  },
});
