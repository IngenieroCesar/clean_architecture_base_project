require('dotenv').config();

const config = {
    dev : process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    CORS: process.env.CORS,
};

module.exports = { config }
