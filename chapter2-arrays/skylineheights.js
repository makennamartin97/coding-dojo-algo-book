// Skyline Heights
// You are given an array with heights of consecutive buildings in the city.
// For example, ​[-1,7,3]​ would represent three buildings: first is actually
// below street level, second is seven stories high, and third is three stories
// high (but hidden behind the seven-story onbe). You are situated at street
// level. Return an array containing heights of the buildings you can see, in
// order. Given ​[1,-1,7,3]​ return ​[1,7]​.

function skylineheights(arr){
    let result = []
    if(arr[0]> 0){
        var max = arr[0]
        result.push(arr[0])
    }
    for(let i = 1; i < arr.length; i++){
        
        if(arr[i]> max){
            max = arr[i]
            result.push(arr[i])
        }

    }
    return result

}
console.log(skylineheights([1,-1,7,3])) // [ 1, 7 ]
console.log(skylineheights([1,-1,7,3,4])) // [ 1, 7 ]
console.log(skylineheights([1,-1,7,3,4,8,2,6])) // [ 1, 7, 8]