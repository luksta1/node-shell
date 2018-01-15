let commands = require('./commands');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
    var cmd = data.toString().trim().split(' '); // remove the newline
    if (cmd[0] === 'pwd') {
        commands.pwd();
    }
    if (cmd[0] === 'date') {
        let date = new Date();
        console.log(date);
    }
    if (cmd[0] === 'ls') {
        commands.ls();
    }
    if (cmd[0] === 'echo') {
        let string = cmd.slice(1).join(' ');
        commands.echo(string);
    }
    if (cmd[0] === 'cat') {
        let fileName = cmd.slice(1)[0];
        commands.cat(fileName)
    }
    if (cmd[0] === 'head') {
        let fileName = cmd.slice(1)[0];
        commands.head(fileName);
    }
    if (cmd[0] === 'tail') {
        let fileName = cmd.slice(1)[0];
        commands.tail(fileName);
    }
    if (cmd[0] === 'sort') {
        let fileName = cmd.slice(1)[0];
        commands.sort(fileName);
    }
    if (cmd[0] === 'wc') {
        let fileName = cmd.slice(1)[0];
        commands.wc(fileName);
    }
    if (cmd[0] === 'uniq') {
        let fileName = cmd.slice(1)[0];
        commands.uniq(fileName);
    }
});