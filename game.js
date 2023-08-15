const yargs = require ('yargs/yargs')
const { hideBin }=require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
var currentdate = new Date();


console.log(currentdate)
console.log(argv)
