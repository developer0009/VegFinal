const express = require('express');
const compression = require('compression');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(compression());

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log("hello is it started yo pls")
    console.log("Server started at " + port);
});