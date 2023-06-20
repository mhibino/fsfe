const http = require('http');

http.createServer(function (req, res) {
	res.write('Hello fullstack!');
	res.end();
}).listen(3000);

console.log('Server is running at port 3000');
