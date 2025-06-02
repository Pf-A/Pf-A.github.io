 // SuperLogger
 // a console.log modification that adds a timestamp and log level.

 function superlog(message) {
        const timestamp = new Date().toISOString();
        const logLevel = 'INFO';
        console.log(`[${timestamp}] [${logLevel}] ${message}`);
 }

 function supererror(message) {
        const timestamp = new Date().toISOString();
        const logLevel = 'ERROR';
        console.error(`[${timestamp}] [${logLevel}] ${message}`);
 }

 function superwarn(message) {
        const timestamp = new Date().toISOString();
        const logLevel = 'WARN';
        console.warn(`[${timestamp}] [${logLevel}] ${message}`);
}

 function superdebug(message) {
            const timestamp = new Date().toISOString();
            const logLevel = 'DEBUG';
            console.debug(`[${timestamp}] [${logLevel}] ${message}`);
}
function superclear() {
    console.clear();
    console.log('Console cleared.');
}

function superLoggerTest() {
    superlog('This is a log message.');
    supererror('This is an error message.');
    superwarn('This is a warning message.');
    superdebug('This is a debug message.');
}

function superLoggerAutoRun() {
    console.log('SuperLogger is installed.');
    console.log('Use superlog(), supererror(), superwarn(), and superdebug() for logging.');
}

superLoggerAutoRun();
