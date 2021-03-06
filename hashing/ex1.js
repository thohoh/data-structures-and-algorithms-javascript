// ex#1 Use linear probing to create a simple dictionary to store the definitions of words.
// Your program should have two parts. The first part reads a text file that contains a
// list of words and definitions and stores them in a hash table. The second part of the
// program allows a user to enter a word and see the definition of that word.

var fs = require('fs'),
    table = require('./hashtable'),
    table = new table(),
    rl = require("readline"),
    prompts = rl.createInterface(process.stdin, process.stdout);

/**
 *  Customizing original Hashtable class
 */
table.keys = new Array(137);
table.values = [];

table.put = function (key, value) {
  var pos = this.betterHash(key);
  if (this.keys[pos] == undefined) {
    this.keys[pos] = key;
    this.values[pos] = value;
  }
  else {
    while (this.keys[pos] != undefined) {
      pos++;
    }
    this.keys[pos] = key;
    this.values[pos] = value;
  }
};

table.get = function (key) {
  var pos = this.betterHash(key);
  if (this.keys[pos] == undefined) {
    return undefined;
  }

  while (this.keys[pos] != key) {
    pos++;
  }

  return this.values[pos];
};
/* End */


words = fs.readFileSync('words.txt', 'utf8').split('\n');
words.length = words.length - 1;

putWords(words);

function putWords (words) {
  for (var i = 0; i < words.length; i++) {
    var split = words[i].split(' ');
    table.put(split[0], split[1]);
  }
}

// Prompting user for words
prompts.question("Type word : ", function (input) {
    var translate = table.get(input);
    console.log('Word was : ' + input + ' ---> ' + translate);
    process.exit();
});


