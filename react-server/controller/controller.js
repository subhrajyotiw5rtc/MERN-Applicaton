var mongoJs=require('mongojs');
var dateTime = require('node-datetime');
var crypto = require("crypto");
var config=require('../config/config.js');
var database='mern-crud';
var collections=['books','items'];
var db=mongoJs(config.url+database, collections);
db.on('connect', function () {
    console.log('database connected')
});
exports.getUserData=function(req,res){
	db.items.find({},function(err,docs){
		if (!err) {
			if (docs) {
				res.json(docs);
			}
		}
	})
}
exports.userDataSubmit=function(req,res){
	console.log('req',req.body);
	var data={
		name:req.body.item
	}
	db.items.insert(data,function(err,docs){
		if (!err) {
			if (docs) {
				res.json('Item added successfully');
			}
		}else{
			res.json('unable to save to database');
		}
	})
}
exports.userDataEdit=function(req,res){
	//console.log('param',req.params.id);
	db.items.findOne({'_id': db.ObjectId(req.params.id)},function(err,docs){
		res.json(docs);
	})
}
exports.userDataUpdate=function(req,res){
	//console.log('req',req.body,req.params.id);
	db.items.update({'_id': db.ObjectId(req.params.id)},{$set:{name:req.body.item}},function(err,docs){
		if (!err) {
			if (docs) {
				res.json('Update complete');
			}
		}else{
			res.json('Update complete');
		}
	})
}
exports.userDataDelete=function(req,res){
	db.items.remove({'_id': db.ObjectId(req.params.id)},function(err,docs){
		if (!err) {
			if (docs) {
				res.json('Successfully removed');
			}
		}
	})
}
