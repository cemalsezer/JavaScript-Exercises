//Print numbers 10-100
for (let i = 10; i < 100; i++) {
    console.log(i);
}

//EXAMPLE 2
let num=10;
while(num<100){
console.log(num);
num+=5; 
}


//EXAMPLE 3
var userName="quest";
var userPassword="1923";
var logControl=false;

while(logControl==false){
     var responseName = prompt("Enter to Name");  
     var responsePass = prompt("Enter to Password");  
        if((userName==responseName)&&(userPassword==responsePass)){
            alert("Login successful"); 
            logControl=true;
        }
        else{
            alert("Name or Password False")
        }
}
