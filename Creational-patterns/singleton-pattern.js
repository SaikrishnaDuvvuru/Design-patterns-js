// Single-ton pattern is a design pattern that restricts the instantiation of a class to one object. 
// This is useful when exactly one object is needed to coordinate actions across the system.

class Logger {
    constructor() {
        if (Logger.instance) {
            throw new Error ("already we have one instance created")
        }

        this.logs = [];
        Logger.instance = this;
    }

    getLogs(message) {
        let newDate = new Date().toISOString();
         this.logs.push({message, newDate});
         return this;
    }

    static getInstance() {
        if (Logger.instance) {
            return Logger.instance;
            // throw new Error ("We have an instance")
        }
        else {
            return new Logger();
        }
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

console.log(logger1 === logger2) // As Logger class have single instance, both logger1 and logger2 are same

console.log(logger1.getLogs("user-logged-in"))
console.log(logger1.getLogs("calling-api"))
console.log(logger1.getLogs("getting-results"))
console.log(logger1.getLogs("logged-out"))


// Use Cases:

// Database Connection
// Logging System
// Configuration Management
// Thread Pool Management
// Cache Management
// Application Settings/Preferences
// Network Connection Manager
// Event Dispatcher
// Resource Manager (e.g., File System Access)
