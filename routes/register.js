var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var method = require('./method.js');


router.post('/', function (req, res) {
	console.log(req.body);

	//获得用户名和密码
	var userName = req.body.userName;
	var password = req.body.password;

	//定义将要返回给客户端的数据
	var resData = '1';//1代表注册成功

	//定义数据库连接池
	var pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'yuedong'
	});

	pool.getConnection(function (err, connection) {
		//查询所有信息
		var sql = 'select * from userInfo';
		//用exist判断用户名是否已经存在
		var exist = false;
		connection.query(sql, function (err, result) {
			if (err) {
				console.log('查询错误', err.message);
				res.send('5');//5链接数据库出错
				return;
			}
			console.log('完成查询');
			for (var i = 0; i < result.length; i++) {
				var user = result[i].userName;
				if (userName == user) {
					console.log('重名');
					exist = true;
					res.send('0');
					return;
				}
			}
			if (!exist) {
				// 		//插入注册的用户信息到userInfo表
				var ins = 'INSERT INTO userInfo (userID,userName, password,telNumber,mail,signature,avatar) VALUES ("' + method.getNowFormatDate() + '","' + userName + '","' + password + '","' + null + '","' + null + '","' + null + '","' + null + '") ';
				console.log(ins)
				connection.query(ins, function (err, result) {
					if (err) {
						console.log('插入错误', err.message);
						return;
					}
					console.log('插入成功')
					res.send('1');
					return;
				});
			}
			connection.release();
		});
	});
});

module.exports = router;
