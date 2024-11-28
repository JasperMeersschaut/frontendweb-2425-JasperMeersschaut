export default {
  log: {
    level: 'info',
    disabled: false,
  },  cors: {
    origins: ['http://localhost:5173'], 
    maxAge: 3 * 60 * 60,
  },
  auth: {
    maxDelay: 500,
    jwt: {
      audience: 'budget.hogent.be',
      issuer: 'budget.hogent.be',
      expirationInterval: 60 * 60, // s (1 hour)
      secret:
        'eenveeltemoeilijksecretdatniemandooitzalradenandersisdesitegehacked',
    },
    argon: {
      hashLength: 32,
      timeCost: 6,
      memoryCost: 2 ** 17,
    },
  },
};
