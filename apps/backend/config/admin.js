module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f8f04e6dd9cda763622357c319a9c0fb'),
  },
});
