const express = require('express');
const port = 8000;
//const bodyParser = require('body-parser')
const app = express();

//app.use(bodyParser.urlencoded());
//app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));




app.listen(port, (error) => {
    if (error) { console.log('Something Wrong with server', error) }
    else { console.log('Server is listening on port ' + port) }
})