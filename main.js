// var tahsin = 32;
// document.write(tahsin)

// var x = 10;
// document.write(x++ ,"<br>");
// document.write(++x ,"<br>");
// document.write(x-- ,"<br>");
// document.write(x ,"<br>");
// document.write(--x);
// document.write("Demo<br>Text!");

// var userName;
// userName = "tahsin"
// userName = true;
// userName = 0;
// userName = .5;
// document.write(typeof(userName) ,"<br>");
// userName = null;
// var non34Name = 89;
// document.write(typeof(non34Name));

// var x = 12;
// var y = 9;
// var z;

// if (x>y && x===y){
//    z = true;
// }
// else{
//     z = false;
// }
// console.log(z)

// var select = document.querySelector("select");
// var pera = document.querySelector("p");


// select.addEventListener('change', setWheather);

// function setWheather() {
//     var choice = select.value;
//     // if (choice === "sunny"){
//     //     pera.textContent = 'It is sunny and nice weather today.';
//     // }
//     // else if(choice === 'rainy') {
//     //     pera.textContent ='It is rainy and nice weather.';
//     // }
//     // else if(choice === 'overcast'){
//     //     pera.textContent ='It is not nice weather.'
//     // }
//     // else{
//     //     pera.textContent = "";
//     // }
//     switch (choice) {
//         case "sunny":
//         pera.textContent = "It is sunny and fine weather";
//         break;
//         case "rainy":
//             pera.textContent = "It is a rainy and muddy day";
//             break;
//         case "overcast" :
//             pera.textContent ="It is disgusting day";
//             break;
//         default:
//             pera.textContent = "";
//     }
        

// }
// let contacts = ['jerry:24', "tom:45",'perry:78',"iby:56"];
// const pera = document.querySelector('p')
// const input = document.querySelector("input")
// const button = document.querySelector('button')

// button.addEventListener('click', function() {
//     let tasnim = input.value.toLowerCase();
//     input.value ="";
//     input.focus();
//     let i;
//     for(i= 0; i< contacts.leangth; i++) {
//         let spliteContact = contacts[i].split(':');
//         if(spliteContact[0].toLowerCase() === tasnim){
//             pera.textContent = spliteContact[0] + "\'s number is" + spliteContact[1] + ".";

//         }else if(i === contacts.lenght -1){
//             pera.textContent = "contact not found.";
//         }
//     }
// });

// while (condition) {
    //code run here
    // final-expression
// }
//
  
//initializer
//do{
    // code to run 
    //final-expression
// }while(condition)

// let i =0;
// let j = 12
// while (i<= j) {
//     document.write(i+1,"<br>");
//     i++;
// }

const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';
const para = document.querySelector('p');
let i = 0;

do{
    if(i === cats.length - 1){
        info +="and" + cats[i] + ".";
    }else{
        info += cats[i] + ",";
    }
    i++;
}while(i < cats.length);
console.log(i);