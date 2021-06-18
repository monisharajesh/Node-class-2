//var express = require ('express'); 
//const app = express.Application= express();
/*app.get('/', function(req,res){
    res.send('Hello World!');
});
app.listen(3000,function(){
    console.log('App is listening on port 3000!');
});*/

const http = require('http');
const fs = require ('fs');

var server = http.createServer(function (req,res) {
  fs.readFile(_dirname + '/data.txt', function(err,data)  {
      res.send(data);
  }) 
})
server.listen (8000,function(){
    console.log('App is listening on port 3000!');
}); 
