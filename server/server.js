const path = require("path")
const { exec } = require("child_process");
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
		           
		           exec("python image.py", (error, stdout, stderr) => {
				       if (error) {
					               console.log(`error: ${error.message}`);
					               return;
					           }
				       if (stderr) {
					               console.log(`stderr: ${stderr}`);
					               return;
					           }
				       console.log(`stdout: ${stdout}`);
			   });
		           res.redirect('/getfile');

		        } catch(error) {
				          console.log(error);
				           res.send(400);
				    }
});
app.get('/getfile', (req, res) => {
	res.sendFile(path.join(__dirname, "final.pdf"));


});


app.listen(port, ()=> {});
