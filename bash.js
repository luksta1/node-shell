let commands = require('./commands');

let done = (output) => {
    process.stdout.write(output + '\n');
    process.stdout.write("prompt > ");
}

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
    var cmd = data.toString().trim().split(' '); // remove the newline
    if (cmd[0] === 'date') {
        let date = new Date();
        console.log(date);
    } else if (cmd[0] === 'echo') {
        let string = cmd.slice(1).join(' ');
        commands.echo(string, done);
    } else {
        commands[cmd[0]](cmd.slice(1)[0], done);
    }
});