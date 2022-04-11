const authRouter = require('./auth.js')
const movieRouter = require('./movie');

const routes = function (app) {
    app.use('/auth', authRouter);
    app.use(movieRouter);

    app.get('/', (req, res, next) => {
        res.json({
            message: "Welcome to the Homepage.",
            status: 200
        })
    });
    
    app.get('/user/:id', (req, res, next) => {
        console.log(req.params);
        console.log(req.query);
        res.send("Welcome to the Userpage.")
    });
}

module.exports = routes;