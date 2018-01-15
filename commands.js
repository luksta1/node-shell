let fs = require('fs');
let request = require('request');

let pwd = (arg) => {
    process.stdout.write(process.argv[1]);
    process.stdout.write("prompt > ");
}

let ls = (arg) => {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
            process.stdout.write("prompt > ");
        })
    });
}

let echo = (string) => {
    console.log(string);
}

let cat = (arg) => {
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        process.stdout.write(data.toString() + "\n");
        process.stdout.write("prompt > ");
    });
}

let head = (arg) => {
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        let fileContentArr = data.toString() + "\n";
        process.stdout.write(fileContentArr.split('\n').slice(0, 5).join('\n'));
        process.stdout.write("prompt > ");
    });
}

let tail = (arg) => {
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        let fileContentArr = data.toString() + "\n";
        process.stdout.write(fileContentArr.split('\n').slice(-5).join('\n'));
        process.stdout.write("prompt > ");
    });
}

let sort = (arg) => {
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        let fileContentArr = data.toString() + "\n";
        fileContentArr = fileContentArr.split('\n');
        let sortedContentArr = [];
        fileContentArr.forEach(function(line) {
            sortedContentArr.push(line.trim());
        });
        process.stdout.write(sortedContentArr.sort().join('\n'))
        process.stdout.write("prompt > ");
    });
}

let wc = (arg) => {
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        let fileContentArr = data.toString() + "\n";
        fileContentArr = fileContentArr.split('\n');
        let numberOfLines = fileContentArr.length;
        process.stdout.write(numberOfLines.toString() + '\n')
        process.stdout.write("prompt > ");
    });
}

let uniq = (arg) => {
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        let fileContentArr = data.toString() + "\n";
        fileContentArr = fileContentArr.split('\n');
        let uniqArr = [];
        fileContentArr.forEach(function(line) {
            if (uniqArr.indexOf(line) === -1) {
                uniqArr.push(line);
            }
        });
        process.stdout.write(uniqArr.join('\n'))
        process.stdout.write("prompt > ");
    });
}
module.exports = {
    pwd,
    ls,
    echo,
    cat,
    head,
    tail,
    sort,
    wc,
    uniq
};