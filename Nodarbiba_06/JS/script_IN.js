const cars = ["BMW", "Volvo", "Mini"];
console.log(cars[0]);

const person = {fname:"John", lname:"Doe", age:25}; 
console.log(person["fname"]);

console.log(Object.keys(person));

let text = "";
for (let x in person) {
  console.log(x);
  text += person[x] + " ";
}


document.getElementById("demo4").innerHTML = text;

text = "";
for (let x in cars) {
  console.log(x);
  text += cars[x] + " ";
}

document.getElementById("demo5").innerHTML = text;