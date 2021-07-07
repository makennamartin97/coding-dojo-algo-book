// Generate Coin Change
// Implement ​generateCoinChange(cents)​ that accepts a parameter for the 
// number of cents, and computes how to represent that amount with the
// smallest number of coins. Console.log the result.

function generateCoinChange(cents)​{
    let coins = [25, 10, 5, 1]
    let result = []
    let i = 0;
    while(cents > 0 && cents - coins[i] > 0){
        if(cents - coins[i] >= 0){
            cents = cents - coins[i]
            result.push(coins[i])
            continue
        }
        i++
        
    }
    console.log(result)

}
console.log(generateCoinChange(84))