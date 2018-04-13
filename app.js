//配置服务相关内容
//配置node  web框架express
const express = require('express')
const port = 8081
const app = express()
//配置mongodb数据库相关内容
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mongotest";

const http = require('http')
const homePage = `
<html>
<head>
   <meta charset="utf-8">
<script type='text/javascript' src='http://123.207.214.20/reviveads/www/delivery/spcjs.php?id=6'></script>

</head>
<body>
<script type='text/javascript'><!--// <![CDATA[
    OA_show(29);
// ]]> --></script><noscript><a target='_blank' href='http://123.207.214.20/reviveads/www/delivery/ck.php?n=4ef9bc4'><img border='0' alt='' src='http://123.207.214.20/reviveads/www/delivery/avw.php?zoneid=30&amp;n=4ef9bc4' /></a></noscript>
<script type='text/javascript'><!--// <![CDATA[
    OA_show(30);
// ]]> --></script><noscript><a target='_blank' href='http://123.207.214.20/reviveads/www/delivery/ck.php?n=c7c985a'><img border='0' alt='' src='http://123.207.214.20/reviveads/www/delivery/avw.php?zoneid=30&amp;n=c7c985a' /></a></noscript>
<script type='text/javascript'><!--// <![CDATA[
    OA_show(32);
// ]]> --></script><noscript><a target='_blank' href='http://123.207.214.20/reviveads/www/delivery/ck.php?n=52f5674'><img border='0' alt='' src='http://123.207.214.20/reviveads/www/delivery/avw.php?zoneid=32&amp;n=52f5674' /></a></noscript>
</body>
</html>
`


app.get('/',function(req,res){
	res.send(homePage)
	// MongoClient.connect(url, function (err, client) {  
       
 //        if (err) {  
 //            console.log("数据库连接失败");  
 //            return;  
 //        }  
 //        console.log("数据库连接成功");  
      
 //        var db = client.db("mongoTest");  
 //        db.collection("user").insertOne({  
 //            "username": "jmin呀",  
 //            "age": 23,  
 //            "sex": "男"  
 //        }, function (err, result) {  
 //            if (err) {  
 //                res.send("插入数据失败");  
 //                return;  
 //            }  
 //            console.log(result)
 //            db.close();  
 //            res.end();  
 //        })  
 //    });  
})
.listen(port,()=>{
 	console.log('Server Running At '+port)
})


// app.post('/api/user',function(req,res){
// 	console.log(req.query)

// 	let userName = req.query.userName
// 	let passWord = req.query.passWord

// 	res.send('保存数据成功');

// 	let data = [{"userName":'zhoulianyi',"passWord":'zly200571'}]

	
// })