const { Router } = require('express');
const {getMovies} = require('../controllers')

const router = Router();

router.get('/movies/:page', getMovies); //getMovies is the handler function to be defined later.

module.exports = router;

