let total = 0;

let numberArray = process.argv.slice(2)

numberArray.forEach((num) => {
    total += parseInt(num)
});

console.log(total);
