const dis=document.getElementById("dis");
function appendToDisplay(input){
    dis.value += input;
}
function allclear(){
    dis.value="";
}
function power(input){
    
}
function clear(input){
     
}
function Calculate(){
    try{
        dis.value=eval(dis.value);
    }
    catch(error){
        dis.value="Error";
    }

}