var express = require('express'),
    app = express();

app.use(express.static(__dirname, '/'));

app.listen(3000);

console.log('Express listening on port 3000');
