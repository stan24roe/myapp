var express = require('express')
var app = express()
var path = require('path');

app.use(express.static(path.join(__dirname,"public")));

let port = Number(process.env.PORT || 5000 );
app.listen(port,()=>{
	console.log("port" + port);
});