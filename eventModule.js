const LowMemory = require('./memoryLow');

const lowMemory = new LowMemory();

lowMemory.addListener("lowMemory", (diskNo) => console.log(`Low memory on ${diskNo}`)); // Listened the event 

lowMemory.memoryAlert(); // Triggered or raised the event