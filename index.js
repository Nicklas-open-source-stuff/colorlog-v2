var colorerror = "\x1b[31m";
var colorwarn = "\x1b[33m";
var colorinfo = "\x1b[34m";
var colornormal = "\x1b[32m";

var reset = "\x1b[0m";

// var infoLog = console.info;
// var normalLog = console.log;
// var errorLog = console.error;
// var warnLog = console.warn;
var colorLog = {
    error: function(colorLogs){
        var applycolor = colorerror + colorLogs + reset
        console.log(applycolor)
    },
    warn: function(colorLogs){
        var applycolor = colorwarn + colorLogs + reset
        console.log(applycolor)
    },
    info: function(colorLogs){
        var applycolor = colorinfo + colorLogs + reset
        console.log(applycolor)
    },
    log: function(colorLogs){
        var applycolor = colornormal + colorLogs + reset
        console.log(applycolor)
    }
}
    module.exports = colorLogs;