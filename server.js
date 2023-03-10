// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/ng-calculator'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + 'dist/ng-calculator/index.html'));
});

// Start the app
app.listen(process.env.PORT || 8080);