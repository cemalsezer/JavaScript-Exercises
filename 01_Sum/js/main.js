/* example - 1 */
let numFirst = 1;
let numSecond= 2;
let sum = numFirst+numSecond;
alert(sum);

/* example - 2 */
let sum=0;
let numFirst= Number(prompt("First Number:"));
let numSecond= Number(prompt("Second Number:"));
sum= numFirst+numSecond
document.write("Sum: ",sum);

/* example - 3 */
function sum(){
    var numFirst =Number(document.getElementById("numFirst").value);
    var numSecond =Number(document.getElementById("numSecond").value);
    var sum = numFirst+ numSecond; 
   document.getElementById("text").innerHTML=`Sum: ${sum}`;
}

