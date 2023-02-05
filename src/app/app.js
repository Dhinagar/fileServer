const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const SERVER_CONFIG = require('./config/server.config');
const USER_ROUTES = require('./routes/user.routes');
const FILE_ROUTES = require('./routes/file.routes');
const CONNECT_MONGO = require('./connection.mongodb');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

CONNECT_MONGO();

/**
 * Un comment below lines to Allow CORS in local server
 */
app.options('*', cors());
app.use(cors());

app.use('/user', USER_ROUTES);
app.use('/file', FILE_ROUTES);

app.listen(SERVER_CONFIG['PORT'], () => console.log('Application Running'));