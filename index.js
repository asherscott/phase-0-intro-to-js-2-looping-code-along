// Code your solutions in this file
function writeCards(array) {
    let thk = [];
    for(const ele in array) {
        thk[ele] = `Thank you, ${array[ele]}, for the wonderful surprise gift!`;
    }
    return thk;
}

function countDown(num) {
    let num1 = num;
    for(let i = 0; i <= num; i++) {
        console.log(num1);
        num1 = num1 - 1;
    }
}