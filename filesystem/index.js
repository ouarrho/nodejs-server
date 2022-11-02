const fs = require('fs');

fs.readFile(__dirname + '/hello/index.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
