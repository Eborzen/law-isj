const express = require('express');
const cors  = require('cors');
const { codepenal, codeproc, constitution } = require('./api');
const HandleErrors = require('./utils/error-handler')


module.exports = async (app) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    //default path redirection
    app.use("/", (req, res) =>{
        res.send("Hello world");
    });

    //api
    codepenal(app);
    codeproc(app);
    constitution(app);

    // error handling
    app.use(HandleErrors);
    
}