//practice
//swaping wrong
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);

//swaping correct
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

var start = 0;
var end = 12;

//simple while loop
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

//revers an array
var arrOne = ["a", "b", "c", "d", "e"];
var count = 1;
var arrTwo =[]
while(arrOne.length >= count){
    arrTwo.push(arrOne[arrOne.length - count]);
    console.log(arrTwo);
    count++;
    //console.log(count)
}