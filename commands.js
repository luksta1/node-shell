let fs = require('fs');
let request = require('request');

let pwd = (arg, done) => {
    done(process.argv[1]);
}

let ls = (arg, done) => {
    let output = '';
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            output += file.toString() + "\n";
        })
        done(output);
    });
}

let echo = (string) => {
    console.log(string);
    process.stdout.write("prompt > ");
}

let cat = (arg, done) => {
    let output = '';
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        output = data.toString() + "\n";
        done(output)
    });
}

let head = (arg, done) => {
    let output = '';
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        let fileContentArr = data.toString() + "\n";
        output = fileContentArr.split('\n').slice(0, 5).join('\n');
        done(output)
    });
}

let tail = (arg, done) => {
    let output = '';
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        let fileContentArr = data.toString() + "\n";
        output = fileContentArr.split('\n').slice(-5).join('\n');
        done(output)
    });
}

let sort = (arg, done) => {
    let output = '';
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        let fileContentArr = data.toString() + "\n";
        fileContentArr = fileContentArr.split('\n');
        let sortedContentArr = [];
        fileContentArr.forEach(function(line) {
            sortedContentArr.push(line.trim());
        });
        output = sortedContentArr.sort().join('\n');
        done(output)
    });
}

let wc = (arg, done) => {
    let output = '';
    fs.readFile(arg, (err, data) => {
        if (err) throw err;
        let fileContentArr = data.toString() + "\n";
        fileContentArr = fileContentArr.split('\n');
        let numberOfLines = fileContentArr.length;
        output = numberOfLines.toString() + '\n';
        done(output)
    });
}

let uniq = (arg, done) => {
    let output = '';
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
        output = uniqArr.join('\n');
        done(output)
    });
}

let curl = (arg) => {
    request('http://' + arg, function(error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
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
    uniq,
    curl
};