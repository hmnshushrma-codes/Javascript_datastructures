const number = 500;

function reverseInt(num) {
    if (num === 0) return 0;
    const stringInt = Math.abs(num).toString().split('').reverse().join('');
    return parseInt(stringInt) * Math.sign(num);
}
console.log(reverseInt(number));