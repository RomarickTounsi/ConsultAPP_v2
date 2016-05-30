
/* Test connection */

var application_root = __dirname,
    express = require("express"),
    bodyParser = require('body-parser');

//var convert = require('./models/convertJSON');
var insertData = require('./models/InsertData');
var research = require('./models/ResearchData');

var app = express();
app.use(bodyParser.json());

app.get('/api/consultant', function(req, res){
    res.sendStatus(200);   
});
app.post('/api/consultant', insertData.insert);

app.listen(3000);
console.log('Server running on port 3000');



