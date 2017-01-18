const stringy = require('./stringBuilder');

var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var recurseString = function() {
    rl.question('Enter a word to be reversed (or :q to quit) ', (answer) => {
        if(answer == ':q') {
            console.log('Bye!');
            return rl.close();
        } else {
            var temp = stringy(answer);
            temp.reverse();
            console.log(temp);
            recurseString();
        }
    });
};

recurseString();
