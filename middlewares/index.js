const morgan = require('morgan');

const middleware = function (app) {
    app.use((req,res, next) => {
        console.log(req.ip);
        next();
    });
    app.use(morgan('dev'));
}

module.exports = middleware;

