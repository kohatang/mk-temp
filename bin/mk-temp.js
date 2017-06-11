#!/usr/bin/env node

'use strict';

const program = require('commander');
const fs = require('fs');

let dirPath = process.cwd();
program
  .version('0.0.1')
  .option('-d, --directory', 'Make a directory')
  .option('-l, --length <n>', 'Length of random string')
  .arguments('<dir>')
  .action((dir) => {
    dirPath = dir;
  })
  .parse(process.argv);

let length = 5;
if (program.length) {
  length = program.length;
}
let str = makeRandomString(length);

while (fs.existsSync(str)) {
  str = makeRandomString(length);
}

if (program.directory) {
  fs.mkdirSync(dirPath + '/' + str);
  console.log('Make a directory with ' + str);
} else {
  fs.writeFile(dirPath + '/' + str, '', err => {
    if (err) {
      throw err;
    }
    console.log('Make a file with ' + str);
  });
}

/**
 * Make a random string
 * @param length
 * @returns {string}
 */
function makeRandomString(length) {
  const c = 'abcdefghijklmnopqrstuvwxyz0123456789';

  let str = '';
  for (let i = 0; i < length; i++) {
    str += c[Math.floor(Math.random() * c.length)];
  }
  return str;
}
