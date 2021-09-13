/*#Author: janura@amazon.com , Octank US NodeJS IMG*/

//ECS Wallet app code
'use strict';
const ecsport = 80;
var AWS = require("aws-sdk");
var myConfig = new AWS.Config();
const request = require('request');
var http = require('http');
var https = require('https');
var express = require('express');
myConfig.update({ region: "us-east-2" });


/*const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');*/

var app = express();
AWS.config.region = 'us-east-2';


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//HOMEPAGE
app.get('/', function(req, res) {
	console.log('GET Slash function called...');
	console.log('ENVIRONMENT VARIABLE: TOMATOURL value is ', process.env.TOMATOURL);
	console.log('ENVIRONMENT VARIABLE: SERVERWORLDURL value is ', process.env.SERVERWORLDURL);
	let url = process.env.ECSWALLETXYZURL;
	res.render('index', {url: url});
    console.log('Calling Serverside from OTANKUSNODEjs container.... '); 
		var urlside = 'http://serverworldlocal.ecswallet.xyz:8080/';
		request.get(urlside, (error, response, body) => {
    
   let bodyresp = JSON.parse(body);
   
   console.log('Msg from OactankUS container - SERVERSIDEcar Availability Zone is ', bodyresp.ServerSideAZ);
   
 
  
});
 
});


app.listen(ecsport, function () {
    console.log('Octacnk US NODE JS IMage listening on port ', ecsport);
});


