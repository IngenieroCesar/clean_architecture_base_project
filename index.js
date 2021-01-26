const express = require('express');
const app = express();
//
const { config } = require('./config/index');

const router = require('./routes/index');
router(app);


app.listen(config.port, function () {
  console.log('Example app listening on http://localhost:' + config.port);
});