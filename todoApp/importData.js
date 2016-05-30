var csv = require('ya-csv');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var mongoclient = new MongoClient(new Server('localhost', 8080, {'native_parser' : true}));

var reader = csv.createCsvFileReader('Consultant.csv', {columnsFromHeader:true,'separator':   ','});
reader.addListener('data', function(data){
var nameHolder = data.name;
//I have no issue getting the needed variables from my csv file
mongoclient.db(nameHolder).collection('assets').update({assetId:data.assetId,name:data.name},{upsert:true},function(err,updated){if(err){console.log(err)}});

reader.addListener('end', function(data){
console.log("done");
});