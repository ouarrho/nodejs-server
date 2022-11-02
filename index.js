const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, data) => {
                if (err) throw err;

                res.writeHead(200, { 'Content-Type': 'text/html' });

                res.end(data);
            }
        );
    } else if (req.url === '/api/users/') {
        const users = [
            { id: 1, name: 'oualid' },
            { id: 2, name: 'ouarrho' },
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
    let filePath = path.join(
        __dirname,
        'public',
        req.url === '/' ? 'index.html' : req.url
    );

    let extname = path.extname(filePath);

    let contentType = 'text/html';
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }
    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'),
                    (err, data) => {
                        res.writeHead(200, { 'Content-Type': 'text.html' });
                        res.end(data, 'utf8');
                    }
                );
            } else {
                res.writeHead(500);

                res.end('Server Error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });

            res.end(data, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});
