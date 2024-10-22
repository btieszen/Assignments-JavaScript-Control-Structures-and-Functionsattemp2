const deposit = 0;
const withdraw = 50;
const balance = 2000;

console.log('')
console.log('Welcome to your banking')

//deposit
if (deposit >0,withdraw <=0){
   
function depositedFunction(a, b) {
    return a + b;
}
let sum = depositedFunction(deposit, balance);
console.log("The deposit amount is: ",deposit);
console.log("The balance after depoit is :", sum);

//withdraw
}else
if (withdraw >0,deposit<=0){
    function withdrawFunction(a, b) {
        return a - b;
    }
    let sum1 = withdrawFunction(balance, withdraw);
    console.log("The withdraw amount is: ",withdraw);
    console.log("The balance after withdraw is :", sum1);

//total balance
}

function totalFunction(a, b, c) {
    return (a + b) - c;
}
let sumTotal = totalFunction(balance, deposit, withdraw);

console.log("The total balance is :", sumTotal);