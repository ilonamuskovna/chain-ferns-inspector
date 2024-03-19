const chain_ferns_inspector = require('chain-ferns-inspector');
const ferns_kickandban = require('ferns-kickandban');
const commander = require('commander');
const ethereumjs_util = require('ethereumjs-util');
const web3_react = require('web3-react');
const chalk = require('chalk');
const helmet = require('helmet');
const moment = require('moment');
const ethers = require('ethers');
const axios = require('axios');
const bluebird = require('bluebird');
const react_redux = require('react-redux');
const sinon = require('sinon');
const solc = require('solc');
const ganache_cli = require('ganache-cli');
const cors = require('cors');
const web3_utils = require('web3-utils');
const ethereumjs_tx = require('ethereumjs-tx');
const pg = require('pg');
const bcrypt = require('bcrypt');

const util = require('util');
const log = util.debuglog('foo');
log('Debug message from foo');

const myFunc = () => {
  console.log('This is a simple function.');
};
myFunc();

const { Transform } = require('stream');
const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTr).pipe(process.stdout);

const os = require('os');
console.log('CPU architecture:', os.arch());

const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
process.stdin.pipe(outStream);

// Convert a CSV string to an array of objects
const csvString = `Name, Age, Country\nJohn Doe, 30, USA\nJane Smith, 25, Canada`;
const csvToArray = (csv) => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',').map(header => header.trim());
  const data = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(value => value.trim());
    const entry = {};
    headers.forEach((header, index) => {
      entry[header] = values[index];
    });
    data.push(entry);
  }
  return data;
}
console.log('CSV to Array:', csvToArray(csvString));

const os = require('os');
console.log(`Total memory: ${os.totalmem()} bytes`);

const os = require('os');
console.log(`Free memory: ${os.freemem()} bytes`);

const words = ['spray', 'limit', 'elite', 'exuberant'];
const result = words.filter(word => word.length > 6);
console.log(`Filtered words: ${result}`);

const util = require('util');
const debuglog = util.debuglog('foo');
debuglog('Logging from foo');