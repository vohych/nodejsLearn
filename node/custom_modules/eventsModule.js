const EventsEmitter = require('events');

class Logger extends EventsEmitter {
    log(mesage) {
        this.emit('message', `${mesage} ${Date.now()}`)
    }
}


const logger = new Logger();

logger.on('message', data => {

    console.log(data)

})

logger.log('Hellow ^)')