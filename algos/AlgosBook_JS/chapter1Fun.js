//sigma
/*Implement a function sigma(num) that, given a
number, returns the sum of all positive integers
from 1 up to number (inclusive). Ex.: sigma(3)
= 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).*/ 

function sigma(num){
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
        
    }
    return sum
}
//test
// console.log(sigma(20));

//factorial
/*Write a function factorial(num) that, given a
number, returns the product (multiplication) of all
positive integers from 1 up to number (inclusive).
For example, factorial(3) = 6 (or 1 * 2 * 3);
factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).*/

function factorial(num){
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i
        console.log(product)
    }
    return product
}
//test
// console.log(factorial(10))

//Threes and Fives
/*Create function ThreesFives() that adds each value from 100 and 4000000 (inclusive) if that value
is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
*/
function threesFives(){
    let sum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if(i % 3 == 0 && i % 5 != 0){
            sum+= i
            // console.log(sum)
        }
        else if(i % 5 == 0 && i != 0){
            sum+=i
            //console.log(sum)
        }
    }
    return sum
}
//test
// console.log(threesFives());

function betterThreesFives(start, end){
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if(i % 3 == 0 && i % 5 != 0){
            sum+= i
        }
        else if(i % 5 == 0 && i != 0){
            sum+=i
        }
        
    }
    return sum
}
//test
//console.log(betterThreesFives(100, 4000000))

//Generate Coin Change
/* Implement generateCoinChange(cents) that accepts a parameter for the number of cents, and
computes how to represent that amount with the smallest number of coins. Console.log the result.
*/ 
function generateCoinChange(cents){
    let dollars = 0;
    let fiftyCent = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    
    while(cents > 0){
        if(cents >= 100){
            dollars ++
            cents -= 100
        }
        else if(cents >= 50){
            fiftyCent ++
            cents -50
        }
        else if(cents >= 25){
            quarter ++
            cents -= 25
        }
        else if(cents >= 10){
            dime ++
            cents -= 10
            }
        else if(cents >= 5){
            nickel++
            cents -= 5
        }
        else{
            penny = cents
            cents -= cents
        }
    
    }
    let purse = ["dollars(s) = " + dollars, "fiftyCent(s) = " + fiftyCent, "quarter(s) = " + quarter, "dime(s) = " + dime, "nickel(s) = " + nickel, "penny(ies) = " + penny];
    console.log(purse);
}
//test
//generateCoinChange(34521);

//Statistics to Doubles
/*Implement a ‘die’ that randomly returns an
integer between 1 and 6 inclusive. Roll a pair of
these dice, tracking the statistics until doubles
are rolled. Display the number of rolls, min, max,
and average.
*/

//function to represent a die
function die(){
    let roll = Math.ceil(Math.random() * 6);
    return roll
}

// console.log(dieOne());
//track the die roll with another die in an array
// let stats = [];
// stats.push(die(), die());
// console.log("###### new roll######");
// console.log(stats);

//given the number of rolls as a parameter display the number of times doubles are hit
function statisticsToDboules(rolls){
    let doubles = 0;
    //give a varible to represent the minimum amount of rolls it took to get doubles
    let min = 0;
    let rollNumber = 0;
    var max = 0;
    //run this until you hit doubles
    for (let i = 1; i <= rolls; i++) {
        rollNumber ++
        let d1 = die();
        let d2 = die();
        if(d1 == d2){
            doubles ++
            if(min == 0 || min > rollNumber){
                min = rollNumber;
            }
            if(max < rollNumber){
                max = rollNumber;
            }
            rollNumber = 0
        }
        // console.log(d1, d2)
        
    }
    var avg = rolls / doubles;
    console.log("num of rolls = " + rolls + '|',"num of doubles = " + doubles + '|',"min = " + min + '|', "max = " + max + '|', "avg = " + avg + '|')
    
}

// statisticsToDboules(100000000)

//Sum to one digit
/*Implement a function sumToOne(num) that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
*/

//example!!! 425345 = 4+2+5+3+4+5 = 23 (not a single digit) 2+3 = 5
function sumToOneDigit(num){
    //must apart the number in that each digit is recognized as its own number
    let assEnd = 0;
    while(num > 9){
        console.log(num);
        //each interation will give the didgit in the 10s place until number is less than 10 in wich case all digits will be added together.
        assEnd += num % 10
        console.log(assEnd)
        num = Math.floor(num / 10)
    }
    console.log(assEnd);
}

console.log(sumToOneDigit(432))