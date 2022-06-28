//function to remove the the add definition button when it is clicked
//takes element as a parameter
function vanish(element){
    element.remove();
}

//func to change the text to say "Logout" when clicking the "login" button
//uses the .innerText property which changes the inner text of the element passed to this function to "Logout"
function logInOut(element){
    //checks the value of the inner text. if the value Login is true then change the inner text to "Logout"
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }
    //if the value is anything other than "Login", in this case it would be "Logout", change the inner text to "Login"
    else{
        element.innerText = "Login";
    }
}

