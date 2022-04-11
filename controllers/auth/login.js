// const logger = require('../../configuration/logger')

getLogin = function (req, res, next) {
    res.send('Welcome to the Login Page');
    // logger.info('hello');
};

const getSignUp = function (req, res, next) {
    res.send('Welcome to the Sign Up Page');
};

module.exports = {getLogin, getSignUp};