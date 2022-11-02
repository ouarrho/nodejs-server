const e = require('events');
const uuid = require('uuid');

class Logger extends e {
    log(msg) {
        this.emit('called', { id: uuid.v4(), msg });
    }
}

module.exports = Logger;
