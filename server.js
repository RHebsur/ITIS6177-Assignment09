const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/', function(req,res){
        res.send("Try http://137.184.24.101:3000/say?keyword=Hello to test AWS lamdba function!");
});

app.get('/say', function(req,res) {
	paramKeywordMessage = req.query.keyword;
	axios.get('https://ho9dck7hc9.execute-api.us-east-1.amazonaws.com/default/myFunction?keyword='+paramKeywordMessage)
	.then(response =>{
			res.statusCode = 200;
			res.send(response.data);
	})
	.catch(err=>{
			res.statusCode = 400;
			res.send(err);
	});
});

app.listen(port, () => {
	console.log(`Sever running at http://137.184.24.101:${port}`);
});
