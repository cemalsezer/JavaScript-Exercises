function exam(){
    var first = document.querySelector("#first").value;
    var second = document.querySelector("#second").value;
    var thirth = document.querySelector("#thirth").value;
    
    var s1 = Number(first);
    var s2 = Number(second);
    var s3 = Number(thirth);
    var ort = 0;
     ort = (s1+s2+s3)/3
    
    
    if(ort>=50){
        document.querySelector("#sonuc").innerHTML=`Puan ortalamanız ${ort}, tebrikler`;
    }
    else{
        document.querySelector("#sonuc").innerHTML=`Puan ortalamanız ${ort}, başaramadın`;
    }
}
