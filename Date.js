const yargs = require ('yargs/yargs')
const { hideBin }=require('yargs/helpers')
const argv = yargs(process.argv.slice(2)).argv;
console.log(argv);
var date = new Date();
if (argv.current =="month"){
    console.log(date.getMonth()+2)
} else if (argv.current == "year") {
    console.log(date.getFullYear())
} else if (argv.current == "date") {
    console.log(date.getDate())
} else {
    console.log(date)
}
