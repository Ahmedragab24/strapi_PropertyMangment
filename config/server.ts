// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });


module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), 
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://strapipropertymangment-production.up.railway.app'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
