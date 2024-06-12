let text = "";
let i = 0;

console.log("i = "+i);
console.log(i < 10);
console.log("text = "+text);

while (i < 10) {
  text += "<br>The number is " + i;
  i++;


 // if (i == 4) {continue;}
 // if (i == 7) {break;}

  console.log("i = "+i);
  console.log(i < 10);
  console.log("text = "+text);
  

}
document.getElementById("demo").innerHTML = text;