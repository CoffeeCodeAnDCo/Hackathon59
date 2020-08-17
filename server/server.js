var express = require('express');
var multer  = require('multer')
var storage = multer.diskStorage({
	    destination: function(req, file, cb) {
		    
		            cb(null, __dirname+'/pictures');
		         },
	    filename: function (req, file, cb) {
		            cb(null , file.originalname);
		        }
});

var upload = multer({ storage: storage })
var app = express();

app.post('/', upload.array('file', 12), function (req, res, next) {
	    console.log(req.files)
	    res.send("done");
});
app.listen(8080);
