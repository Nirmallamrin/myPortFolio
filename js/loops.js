//for loop

let start=parseInt(prompt("Enter the start number:"));
let end=parseInt(prompt("Enter the end number"));

console.log(`even numbers between ${start} and ${end}`);

for(let i=start;i<end;i++){
   if(i%2 ===1){
    console.log("even number",i)
   }
}

//for in

let person={
     name:"lamrin",
     age:23
};
console.log("person details")
for(let key in  person){
    if(person.hasOwnProperty(key)){
        console.log(`${key}:${person[key]}`);
    }
}