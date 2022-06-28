//1.Print odds 1-20
function odds1to20(){
    for(var i = 1; i <= 20; i +=2){
        console.log(i)
    }
}
//test
// odds1to20()

//2.Decreasing Multiples of 3
function decMultiof3(){
    for(var i = 100; i > 0; i--){
        if(i % 3 == 0){
            console.log(i)
        }
    }
}
//test
// decMultiof3()

//3.Print the sequence
function printSeq(){
    for(var i = 4; i > -4; i-= 1.5){
        console.log(i)
    }
}
//test
// printSeq()

//4.Sigma
function sigma(){
    var sum = 0
    for(var i = 1; i <= 100; i++){
        sum += i
    }
    console.log(sum)
}
//test
// sigma()

//5.
function Factorial(number){
    var product = 1
    for(var i = 1; i <= number; i++){
        product = product * i
    }
    console.log(product)
}
//test
//Factorial(12)