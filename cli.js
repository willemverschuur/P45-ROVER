'use strict';


console.log('\x1b[35m%s\x1b[0m - %s', 'Rover Simulation', 'v0.0.1 - command line interface\n\n');
console.log("usage - node cli.js [filename]\n");
console.log("without a paramter the application will accept command line input\n\n");


// open file
var instructions = null;

if (process.argv.length > 2)
{
    var filename = process.argv[2];
    try {

        console.log('\x1b[35m%s\x1b[0m - %s', 'File', 'Reading instructions from file  \n\n');
        var fs = require('fs');
        var instructions = fs.readFileSync(filename, 'utf8').trim();

    }
    catch (e) {

        console.log(e);
        console.log('\x1b[31m%s\x1b[0m - %s', 'Error', 'cannot open file');
        process.exit(1);

    }
}


else
{
    instructions = [];
    var readline = require('readline-sync');
    var line = null;
    while (line = readline.question("Please enter instruction: ").trim()) instructions.push(line);
    instructions = instructions.join("\n");
}



var roversimulation = require('./lib/roversimulation.js');
roversimulation.processInstructions(instructions);
console.log(roversimulation._output);
console.log(roversimulation._exceptions);

