// fs and http
const fs = require('fs');
const http = require('http');
// my scripts
const blog = require('./blog');
const contacts = require('./contacts');


// header, nav, footer
// use sync, and do it before you create server
const header = fs.readFileSync('templates/header.html')
const nav = fs.readFileSync('templates/nav.html')
const footer = fs.readFileSync('templates/footer.html')


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    let content = `<h1>Hello!</h1> <h2>It is ${new Date()}</h2>`;
    
    if(req.url === '/blog') {
        content = blog();
    } else if(req.url === '/contact'){
        content = contacts.getContacts(2);
    }
    
    res.end(header + nav + content + footer);
});

server.listen(3000, () => {
    console.log('Server listening at port 3000');
})

