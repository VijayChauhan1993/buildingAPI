const { Router } = require('express');
const { getLogin, getSignUp} = require('../controllers');
const router = Router();

router
    .get('/login',getLogin)
    .get('/signup',getSignUp)
    .post('/login')
    .post('/signup');

module.exports = router;
