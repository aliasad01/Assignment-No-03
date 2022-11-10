let fact = document.getElementById("inputext");

let calculate=(number)=>{
    fact.value+=number;


}

let result=()=>{
    try{
        fact.value=eval(fact.value)
    }
    catch(err){
        alert("Enter the valid input");

    }
}
function clr(){
    fact.value=" ";
}
function del(){
    fact.value=fact.value.slice(0,-1);
}