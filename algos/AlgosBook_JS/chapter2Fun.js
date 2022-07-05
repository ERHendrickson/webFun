//reverse array
let array = [1,2,3,4,5]
function revArr(arr){
    let tempArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        tempArr.push(arr[i])
    }
    return tempArr
}

// console.log(revArr(array))

//remove negatives
function removeNegatives(arr){
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>0){
            tempArr.push(arr[i])
        }
        
    }
    return tempArr
}
let arrOne = [1,-25,576,-3,2,-1,3,-6,12]
console.log(removeNegatives(arrOne))




//skyline heights
/*You are given an array with heights of consecutive buildings in the city. For example, [-1,7,3] would
represent three buildings: first is actually below street level, second is seven stories high, and third is
three stories high (but hidden behind the seven-story onbe). You are situated at street level. Return an
array containing heights of the buildings you can see, in order. Given [1,-1,7,3] return [1,7].
*/ 

//traverse throught the array. add values in the array to a new array if and only if it is larger than the largest value up to that point
function skyline(arr){
    let hi = 0
    let sight = []
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i]>=hi){
            sight.push(arr[i])
            hi = arr[i]
        }
        
    }
    return sight
    
}
let ranArray = [1,-1,7,3, 81, 34,1,5,6,2,325,21,1]
// console.log(skyline(ranArray))