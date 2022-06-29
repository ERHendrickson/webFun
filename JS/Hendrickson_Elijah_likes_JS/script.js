
function smash(id){
    
    // the variable count refers to the document.querySelector. when this func is inkvoked it uses the argument passed to it in this case the object <span>NUM</span> where NUM is a string which represents the amount of likes this user has recieved.
    var count = document.querySelector(id);
    //we can select the text of this object by using the built in .innerText element which represents the rendered text of the node (in this case the var count) and give it a name -> liked. since this is a rendering of text it needs to be converted to a Number which is a primitive wrapper object. other examples of wrapper objects include String() and Boolean()
    var liked = Number(count.innerText);
    liked ++;
    count.innerText = liked;

}