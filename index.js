//Stock Market Portfolio

const express = require('express'),
    path = require('path'),
    app = express(),
    exphbs = require('express-handlebars'),
    PORT = process.env.PORT || 5000; //use the port available in the cloud, or just usee port 5000 on the computer

//setup for middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "Hello, these are other stuffs";
//set handlebars routes
app.get('/', function (req, res) {
    res.render('home', {
        stuff: otherstuff
    });
});

//set static folder for the app to point at html
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT, () => console.log("Server is listening on port " + PORT));