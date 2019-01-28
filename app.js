let names =['Qasim','a']
let age=12;
let xy=0.3;

let displayName = (...name) => { 
        //in will return index of will return value of index in for loop
        console.log(name);
}
displayName("Qasim","Ali");
let displayName2 = (nameParameter) => console.log(nameParameter);
//displayName2("Qasim");
let sum = () => {return 1+2;}
//console.log(sum());

let duplicateNames=[...names];//spread operator
console.log(duplicateNames);
let checkVal = (v) => {
    if(v)
    {
        console.log("If");
    }
    else{
        console.log("else");
    }
}
checkVal(false);
let showValue = (v1,v2,v3) =>{
    
    console.log(v1);
    setTimeout(()=>{
        console.log(v2);
    },3000);
    console.log(v3);
    
}
showValue("first","second","third");