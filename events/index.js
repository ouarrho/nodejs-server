const e = require('events');

class Emitter extends e {}

const emitter = new Emitter();

emitter.on('event', () => console.log('event fired!'));

emitter.emit('event');
