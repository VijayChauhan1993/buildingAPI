const getMovies = function (req, res, next) {
    res.send('Wait for the movies to be available.')
    next();
}

module.exports = getMovies;