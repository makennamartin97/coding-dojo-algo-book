// Generate Coin Change
// Implement ​generateCoinChange(cents)​ that accepts a parameter for the 
// number of cents, and computes how to represent that amount with the
// smallest number of coins. Console.log the result.

function coinchange(cents){
    // starting with a quarter, let's see how many quarters can fit into the amt given
    console.log("Quarters:" + Math.trunc(cents/25));
    // now we update the amount to the REMAINDER, bc we want to know how much is left rather how many times it goes into 
    cents = cents%25;
    console.log("Dimes:"+ Math.trunc(cents/10));
    cents = cents%10;
    console.log("Nickels:"+Math.trunc(cents/5));
    cents = cents%5
    console.log("Pennies:"+ Math.trunc(cents/1));
    cents = cents%1
    return cents

}
var cents = 84
console.log(coinchange(cents))

// creating a more efficient and less repetitive solution
function coinchange2(cents){
    let vals = [25,10,5,1]
    let coins = ["Quarters", "Dimes", "Nickels","Pennies"]
    for(let i = 0; i<coins.length;i++){
        //printing how many of the coin and truncating the decimal
        console.log(coins[i] + ':' + Math.trunc(cents/vals[i]))
        //adjusting the amount left
        cents = cents%vals[i]
    }
    return cents
}
console.log(coinchange2(84))
// Quarters:3
// Dimes:0
// Nickels:1
// Pennies:4
// 0