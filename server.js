const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' ) {
        res.setHeader("Content-Type", 'text/html')
        res.write('<h1> I am Sejawal Ali </h1> ');
        res.end();
    }

    if (req.url === '/about' ) {
        res.write('I am MERN dev');
        res.end();
    }

    if (req.url === '/contact' ) {
        res.setHeader("Content-Type", 'text/plain')
        res.write('Have a project? then contact');
        res.end();
    }
})

const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Listening on Port ${PORT}`);
    
})
