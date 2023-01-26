// Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static('./dist/ngCalculator'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/ng-calculator'}),
);

// Start the app
app.listen(process.env.PORT || 8080);