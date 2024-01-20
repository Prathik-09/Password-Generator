const upperdataset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerdataset="abcdefghijklmnopqrstuvwxyz";
const numberdataset="1234567890";
const symboldataset="!,.@#$%^&*()-_+=}]{[;:?/><";

let pbox=document.getElementById("passbox");
let lower=document.getElementById("a");
let upper=document.getElementById("b");
let number=document.getElementById("c");
let symbol=document.getElementById("d");
let plength=document.getElementById("pwlength");
//This function is to generate the random data
const generaterandom=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)];   
}
//This function is to select the user desired data
const passwordgenerate=(pass="")=>{
    if(upper.checked){
        pass+=generaterandom(upperdataset);
    }
    if(lower.checked){
        pass+=generaterandom(lowerdataset);
    }
    if(number.checked){
        pass+=generaterandom(numberdataset);
    }
    if(symbol.checked){
        pass+=generaterandom(symboldataset);
    }
    if(pass.length<plength.value){
        return passwordgenerate(pass);
    }    
    pbox.innerText=truncatestring(pass,plength.value);  
}
document.getElementById("btn").addEventListener(
    "click",
    function(){
        passwordgenerate();
    }
)
//this function stops the recursive call at the users desire length of password
function truncatestring(str,num){
    if(str.length>num){
        return str.slice(0,num);
    }
    else{
        return str;
    }
}
