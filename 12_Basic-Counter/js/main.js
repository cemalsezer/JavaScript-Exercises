var sayac=document.querySelector("#sayac").value;

var s1=Number(sayac);

function art(){
    document.querySelector("#sayac").innerHTML=`${s1+=1}`;
}

function az(){
    document.querySelector("#sayac").innerHTML=`${s1-=1}`;
}