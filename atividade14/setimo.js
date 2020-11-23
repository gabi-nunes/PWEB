var http= require('http');
var server = http.createServer(function(req,res) {
    var opcao= req.url;

if(opcao=='/historia'){
    
    res.end("<html><body>historia da fatec</body></html>")
}
else if(opcao=='/sursos'){
    
    res.end("<html><body>cursos</body></html>")
}
else if(opcao=='/professor'){
    
    res.end("<html><body>professor</body></html>")
}
else
res.end("<html><body>site da fatec</body></html>")  
});
server.listen(3000);