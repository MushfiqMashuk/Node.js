const EventEmitter = require("events");

class LowMemory extends EventEmitter {

    memoryAlert(){

        console.log("This event will fire if the memory is low!")

        setTimeout(()=>{
            this.emit("lowMemory", "HARD DISK NO-03");
        }, 2000);
    }
}

module.exports = LowMemory;
