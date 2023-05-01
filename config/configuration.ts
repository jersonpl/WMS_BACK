export default () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3001,
  database: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
});
