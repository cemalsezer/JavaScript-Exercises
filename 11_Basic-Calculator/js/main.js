function calculate(){
    var n1= document.querySelector("#firstNumber").value;
    var n2= document.querySelector("#secondNumber").value;
    var choise = document.querySelector("#choise").value;


    var numberFirst=Number(n1);
    var numberSecond=Number(n2);

    // if(choise=="topla"){
    //     document.querySelector(".sonuc").innerHTML=` Toplama işlemininin sonucu:${numberFirst+numberSecınd}`
    // }

    switch(choise){
        case "topla":
            document.querySelector(".sonuc").innerHTML=` Toplama işlemininin sonucu:${numberFirst+numberSecond}`;
            break;
        case "cikart":
            document.querySelector(".sonuc").innerHTML=`Çıkartma işleminin sonucu:${numberFirst-numberSecond}`;
            break;
        case "carp":
            document.querySelector(".sonuc").innerHTML=`Çarpma işleminin sonucu:${numberFirst*numberSecond}`;
            break;
        case "bol":
            document.querySelector(".sonuc").innerHTML=`Bölme işleminin sonucu:${numberFirst/numberSecond}`;
            break;

        default:
            document.querySelector(".sonuc").innerHTML="Hatalı giriş yaptınız.";
            
        
    }
}