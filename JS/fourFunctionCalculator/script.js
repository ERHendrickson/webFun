// //display the number of the number button pressed
// let display = document.querySelector("#display");
// var evaluate = '';
// var number = '';


// function press(value){
//     number += value;
//     if(display.innerText == 0){
//         display.innerText = value;
//     }
//     else{
//         display.innerText += value;
//     }

//     console.log("display = " + display.innerText);
//     console.log("number = " + number);
//     console.log("evaluate = "  + evaluate);
//     return number
// }

// //clear the display
// function clr(){
//     number = '';
//     display.innerText = 0;
//     evaluate = display.innerText;
//     console.log("display = " + display.innerText);
//     console.log("evaluate = "  + evaluate);
// }

// //set operator up for calculation
// function setOP(operator){
//     var tempNum = number;
//     display.innerText = tempNum
//     number = "";
//     number += operator
    
// }

// //calculate equation number in display + operator + number pushed
// function calculate(){
//     let equals = eval(evaluate);
//     display.innerText = equals;

//     return equals

// }

//display the number

let display = document.querySelector('#display');
let number = '';

// console.log(display.innerText)
//define a function which displays the value of the button clicked
//when the button is pressed it should display the number. when another number is pressed it should add that number to the end of the number in string fassion
function press(num){
    //console.log(number)
    if(number == 0){
        display.innerText = num;
    }
    else{
        display.innerText += num;
    }
    number += num;
    //console.log(number)
}

//defines a function which clears the display innerText back to 0. it should also clear all number values and operators stored on calculator
function clr(){
    number = '';
    display.innerText = '0';
    console.log('calculator cleared')
}

//defines a function which adds the operator to the number. this should not be displayed in the display.innerText but stored in the string number
//pressing an operator should store the value of the string tempNum and clear the value in number so that when a number button is pressed again the display shows a new number.
function setOP(operator){
    tempNum = number+operator;
    number = '';
    //console.log("number = " + number, "tempNumber " +tempNum)
    return tempNum
}

//function wich takes tempNum (the number with the operator) and adds number to the end of the string tempNum (eg. 'number+operator+number') and evaluates this string using the eval() method.
//the fucntion should also reset number to '' so that when press is called again the calc knows its a new number.
function calculate(){
    console.log('****new calc****')
    let calc = eval(tempNum+number);
    display.innerText = calc;
    console.log('calculating' + tempNum + number);
    number = '';
    console.log('number is ' + number,
                'tempNum is ' + tempNum,
                'calc is ' + calc);
}