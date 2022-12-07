var consumerA={
    firstName:"Cemal",
    secondName:"Sezer",
    id:"1923",
    limit:5000,
    x_limit:1000
}
var consumerB={
    firstName:"İrem",
    secondName:"Yalçın",
    id:"1925",
    limit:3000,
    x_limit:2000
}

function paraCek(hesap,miktar){
    if(hesap.limit>=miktar){
        hesap.limit-=miktar;
        console.log("Çekim işlemi başarılı")
    }
    else{
        var sum = hesap.limit+hesap.x_limit;
        if(sum>=miktar){
            if(confirm("Çekim işlemi için bakiye yetersiz, ek hesaptan çekmek ister misiniz?"))
            {
                var limit=hesap.limit;
                var ekLimit=miktar-limit;
                hesap.limit=0;
                hesap.x_limit=hesap.x_limit-ekLimit;
                console.log("Çekim işlemi başarılı")
            }
            else{
                console.log(`${hesap.id}'no lu hesabınızda ${miktar} bulunmamaktadir`)
            }
        }
        else{
            console.log("Bakiye yetersiz")
        }
    }

}

paraCek(consumerA,5000)
paraCek(consumerA,1000)