// var arr2dd = [[2, 5, 8], [3, 6, 1], [5, 7, 7]];

// function isPresented2d(arr2d, value){
//     for (let i = 0; i < arr2d.length; i++) {

//         let subArr = arr2d[i];
//         for (let j = 0; j < subArr.length; j++) {
//             console.log(arr2d[i][j] == value)
//         }
//     }
// }

// console.log(isPresented2d(arr2dd, 1));


// flatten array
//given a 2d array return a new array containg just the values from inside the sub-arrays
function flatten(arr2d){
    var flat = [];
    for (let i = 0; i < arr2d.length; i++) {
        for (let j = 0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
            
        }
        
    }
    return flat;
}

var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7] ]);
console.log(result);