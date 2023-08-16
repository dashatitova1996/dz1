const nums = process.argv.slice(2).map(n => +n)
const sum = nums.reduce((acc, cur)=> acc + cur, 0)
var primer = 55;
var condition = Number(nums);
if (condition == primer){
    console.log('Верно')
}
if (condition > primer){
    console.log('Меньше')
}
if (condition < primer){
    console.log('Больше')
}
