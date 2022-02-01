module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4d23a5a4056fe9c1cc120a9b81ded577'),
  },
});
