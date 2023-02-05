const mongoose = require("mongoose");
const MONGODB_CONFIG = require('./config/mongodb.config');

function connectMongoDB() {
    const MONGO_ENDPOINT = 'mongodb://' + MONGODB_CONFIG['DB_URL'] + ":" + MONGODB_CONFIG['PORT'] + "/" + MONGODB_CONFIG['DB_NAME'];
    const connect = mongoose.connect(MONGO_ENDPOINT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    connect.then((db) => {
        console.log('Connected to DB : [ ' + MONGO_ENDPOINT + ' ]');
    }, (err) => {
        console.error(err);
    });
}

module.exports = connectMongoDB;