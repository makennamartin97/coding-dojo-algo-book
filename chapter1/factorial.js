// Write a function ​factorial(num)​ that, given a number, returns the product
// (multiplication) of all positive integers from 1 up to number (inclusive).
// For example, ​factorial(3)​ = 6 (or 1 * 2 * 3); 
// factorial(5)​ = 120 (or 1 * 2 * 3 * 4 * 5)


//for loop solution
function factorial(num){
    let product = 1
    for(let i = 1; i <= num; i++){
        product*=i
    }
    return product

    
}
console.log(factorial(3)) //6
console.log(factorial(5)) //120

//recursive
function recursivefact(num){
    if(num < 0){
        return -1
    }
    else if(num == 0){
        return 1
    }
    else{
        return num * recursivefact(num-1)
    }
}
console.log(recursivefact(3)) //6
console.log(recursivefact(4)) //24
console.log(recursivefact(5)) //120
