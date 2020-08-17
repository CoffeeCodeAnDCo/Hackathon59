var express = require('express');
var multer = require('multer');
const app = express();
const port = 8080;
var storage = multer.diskStorage({
	    destination: function(req, file, cb) {
		    
		            cb(null, __dirname+'/pictures');
		         },
	    filename: function (req, file, cb) {
		            cb(null , file.originalname);
		        }
});
var upload = multer({ storage: storage });
app.post('/', upload.array('file', 12) , (req, res) =>{
	    try {
		           console.log(req.files);
		           res.send("done");
		        } catch(error) {
				          console.log(error);
				           res.send(400);
				    }
});


app.listen(port, ()=> {});
