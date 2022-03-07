function findFac(){
    let result=1;
   var factorials= Number(document.getElementById("factorial").value);
    for(let i=2;i<=factorials;i++){
        result*=i;
    }
    document.getElementById("text").innerHTML=`Factorial Result: ${result}`;
}