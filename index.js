if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/React-prod.js');
} else {
    module.exports = require('./cjs/React-dev.js');
}
