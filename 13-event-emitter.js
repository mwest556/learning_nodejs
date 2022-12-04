const EventEmitter = require('events')

// option 1; extend the class >>> custom
// option 2; emit and listen for event by creating the instance >>> simple

const customEmitter = new EventEmitter()
// on >>> listen for an event
//emit >>> emits an event
 
customEmitter.on('response', {name, id} => {
    console.log(`data received user ${name} with id:${id}`)
})
customEmitter.on('response', () =>{
    console.log('some other logic here')
})
customEmitter.emit('response', 'john', 34)