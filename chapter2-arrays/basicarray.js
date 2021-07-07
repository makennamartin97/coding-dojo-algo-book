// pushfront
// Given an array and an additional value, ​insert this value ​at the
// beginning of the array. Do this without using any built-in array methods.

function pushfront(arr, val){
    arr.push(0)
    for(let i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = val;
    return arr

}

console.log(pushfront([1,2,3,4],9)) //[ 9, 1, 2, 3, 4 ]

console.log(pushfront([1,2,3,4,5],1)) //[ 1, 1, 2, 3, 4, 5 ]

// popfront
// Given an array, ​remove and return the value ​at the beginning of the array.
// Do this without using any built-in array methods except ​pop()​.
function popfront(arr){
    let temp = arr[0]
    for(let i = 0;i < arr.length-1; i++){
        arr[i] = arr[i+1]
    }
    arr.pop()
    console.log(arr)
    return temp
}
console.log(popfront([0,1,2,3,4])) // [ 1, 2, 3, 4 ], 0
console.log(popfront([6,5,4,3])) // [ 5, 4, 3 ], 6

// pushfront
// Given array and an additional value, insert this value at the beginning
// of the array. Do this without using any built-in array methods.

function pushfront(arr, val){
    // rather than .push..
    arr[arr.length] = val
    // for loop starting at the end to swap to the front
    for(let i = arr.length-1; i>0; i--){
        let front = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = front
    }
    return arr
}
console.log(pushfront([1,2,3,4,5],0)) // [ 0, 1, 2, 3, 4, 5 ]