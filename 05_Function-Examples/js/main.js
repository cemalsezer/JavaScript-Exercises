function numberCheck(){
    let responseNumber= Number(document.getElementById("response").value);
    if(responseNumber%2==0)
    {
        document.getElementById("text").innerHTML="Num Even";
    }
    else{
        document.getElementById("text").innerHTML="Num Odd";
    }
    // document.getElementById("text").innerHTML=`${responseNumber}`;
}