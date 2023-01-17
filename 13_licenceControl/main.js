const submitBtn = document.querySelector(".btn");
var tarih = new Date().getFullYear();
// console.log(tarih.getFullYear());
submitBtn.addEventListener("click", function Check() {
  const uName = document.querySelector("#userName").value;
  const uBirthDate = Number(document.querySelector("#userBirthDate").value);
  var uAge = 0;
  uAge = tarih - uBirthDate;
  if (uAge >= 18) {
    document.querySelector(".text").textContent = `${uName}, ${uAge} yaşındasınız ve ehliyet alabilirsiniz.`;
  } else {
    document.querySelector(".text").textContent = `${uName}, ${uAge} yaşındasınız ve ehliyet alamazsınız.`;
  }
 
});
