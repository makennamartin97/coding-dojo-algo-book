// Binary Search
// Given a sorted array and a value, return whether that value is present in
// the array. Do not sequentially iterate the entire array. Instead, ‘divide
// and conquer’, taking advantage of the fact that the array is sorted.

function binarysearch(arr, val){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = Math.floor(start + end)/2;
        if(val == arr[mid]) return true
        else if(val < arr[mid]){
            end = mid-1
        }
        else{
            start = mid+1
        }
    }
    return false
}
console.log(binarysearch([1,2,3,4,5,6,7],6)) //true
console.log(binarysearch([1,2,3,4,5,6,7],8)) //false
console.log(binarysearch([1,2,3,4,5,6,7],3)) //true