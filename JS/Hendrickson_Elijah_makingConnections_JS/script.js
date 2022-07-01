//function which removes user from connection requests and decrements the number of connection requests
function removeUser(id){
    //console.log("rem con")
    var user = document.querySelector(id);
    user.remove();
}


function dec(ele){
    //console.log("dec con")
    var count = document.querySelector(ele)
    var reqCount = count.innerText;
    //console.log(reqCount)
    reqCount --;
    //console.log(reqCount)
    count.innerText = reqCount;
    if(count.innerText == 0){
        count.remove();
    }
}

var connects = document.querySelector('#connects')

function addCon(){
    var conNum = connects.innerText;
    conNum ++;
    connects.innerText = conNum;
}

var nameArray = ['Elijah Hendrickson', 'Billy Butcher', 'Mothers Milk', 'Hughie Campbell', 'Frenchie']

function nameSwap(id){
    //console.log('hi')
    var name = document.querySelector(id);
    console.log(name)
    name.innerText = nameArray[Math.floor(Math.random() * (nameArray.length - 1))]
    //console.log(name)
    //console.log(Math.floor(Math.random() * (nameArray.length - 1)))
}