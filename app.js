const express = require('express');

const app = express();

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

module.exports = app;