

//Ehliyet yaşını hesaplama
let yil=new Date();
let x = yil.getFullYear();
function ehliyetHesapla(dogumYili){
  
    return x - dogumYili;
}
let dogYil=prompt("Doğum yılını gir:");

let an1 = ehliyetHesapla(dogYil);

if(an1>=18){
    console.log(`Yaşınız: ${an1} ehliyete müsaittir.` );
}
else{
    console.log(`Yaşınız: ${an1} ehliyete müsait değildir.`);
}
