var http = require('http');
var url = require('url');

function onRequest(request,response){

    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();

}
function start(){
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
};


exports.start = start 