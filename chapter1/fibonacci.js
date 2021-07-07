// Implement the Fibonacci function, a famous mathematical equation that
// generates a numerical sequence such that each number is the sum of
// the previous two. The Fibonacci numbers at index 0 and 1, coincidentally,
// have values of 0 and 1. Your function should accept an argument of which
// Fibonacci number.
// Ex: ​fibonacci(2)​ = 1, ​fibonacci(3)​ = 2, ​fibonacci(4)​ = 3, ​fibonacci(5)​ = 5, etc.

function Fibonacci(num){
    if(num == 0 || num == 1){
        return num
    }
    else{
        return Fibonacci(num-2) + Fibonacci(num-1)
    }
}
console.log(Fibonacci(5)) //5
console.log(Fibonacci(2)) //1
console.log(Fibonacci(3)) //2
console.log(Fibonacci(4)) //3
console.log(Fibonacci(7)) //13

