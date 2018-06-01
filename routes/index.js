var express = require('express');
var router = express.Router();
var url = require('url');
var fs = require('fs');
var mysql  = require('mysql');

var EventEmitter=require('events').EventEmitter;
var emitter=new EventEmitter();

/* GET home page. */
router.get('/', function(req, res) {

	let pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'yuedong'
	});
	pool.getConnection(function (err, connection) {
		connection.query('select * from home', function (err, result) {
			if (err) {
				throw err;
				res.send('5');//5数据库连接出错
			} else {
				res.send(result);
				return;
			}
		});

		connection.release();
	});
});

router.get('/goodTopic', function(req, res) {

	let pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'yuedong'
	});
	pool.getConnection(function (err, connection) {
		connection.query('select * from topic order by topicID desc limit 5', function (err, result) {
			if (err) {
				throw err;
				res.send('5');//5数据库连接出错
			} else {
				res.send(result);
				return;
			}
		});

		connection.release();
	});
});
//后台管理的index页面
router.get('/index/admin', function(req, res) {

	let pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'yuedong'
	});
	
	pool.getConnection(function (err, connection) {
		let countArr=[];
		connection.query('select count(*) from userInfo',function(err,result){
			if(err) throw err;
			else{
				let userCount = result[0]['count(*)'];
				countArr.push(userCount);
				connection.query('select count(*) from vanue',function(err,result){
					if(err) throw err;
					else{
						let vanueCount = result[0]['count(*)'];
						countArr.push(vanueCount);
						connection.query('select count(*) from activity',function(err,result){
							let actCount = result[0]['count(*)'];
							countArr.push(actCount);
							res.send(countArr);
						})
					}
				})
			}
		});

		connection.release();
	});
});

//后台管理获取管理员信息
router.get('/administrator', function(req, res) {

	let pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'yuedong'
	});
	
	pool.getConnection(function (err, connection) {
		let adminArr=[];
		connection.query('select * from useradmin',function(err,result){
			if(err) throw err;
			else{
				console.log(result)	
				for(var i=0;i<result.length;i++){
					var obj = {};
					obj.username = result[i].username;
					obj.password = result[i].password;
					obj.class = result[i].class;
					adminArr.push(obj);
				}
				res.send(adminArr)
			}
		});

		connection.release();
	});
});





module.exports = router;
