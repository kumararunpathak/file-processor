const { setupApp } = require('./src/app');
const config = require('./config.json');

setupApp(config).then(app => {
  app.listen(config.port, () => {
    const bind = `http://localhost:${config.port}`;
    console.log(`Server started at ${bind}`);
  });
});
