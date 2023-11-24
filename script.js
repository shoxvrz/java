// let restaurant = "Soy";
// let servicefee = 0.2;
// let cost = 1000;
// const name = "Shoxruz"
// if( cost >= 500 && cost <= 1000 ){
//     alert(`Salom ${name}, ${restaurant} restaurantidagi shot qimmat + ${cost * servicefee}`)
// } else if( cost >= 200 && cost <= 500){
//     alert(`Salom ${name}, ${restaurant} restaurantidagi shot o'rtacha ${cost * servicefee}`)
// }
// else{
//     alert(`Salom ${name}, ${restaurant} restaurantidagi shot arzon ${cost * servicefee}`)
// }

// const language = 'Uzbek';

// switch(language){
//     case 'Uzbek';
//     alert("salom")
//     break;
//     case "Russian":
//         alert('Privet');
//         break;
//     default:
//             alert("xayr");
// }

const day = 9;

// switch(day){
//     case 1:
//         alert("Dushanba");
//         break;
//     case 2:
//         alert("Seshanba")
//             break;

//         default:
//          alert("Otdix");
//          break;
//     }

// alert(new Date{}.getDay);
// const month = new Date().getMonth() + 1;

// switch (month) {
//   case 1:
//     alert("Yanvar va bu Qish");
//     break;
//   case 2:
//     alert("Fevral va bu Qish");
//     break;
//   case 3:
//     alert("Mart va bu Bahor");
//     break;
//   case 4:
//     alert("Aprel va bu Bahor");
//     break;
//   case 5:
//     alert("May va bu Bahor");
//     break;
//   case 6:
//     alert("Iyun va bu Yoz");
//     break;
//   case 7:
//     alert("Iyul va bu Yoz");
//     break;
//   case 8:
//     alert("Avgust va bu Yoz");
//     break;
//   case 9:
//     alert("Sentabr va bu Kuz");
//     break;
//   case 10:
//     alert("Oktabr va bu Kuz");
//     break;
//   case 11:
//     alert("Noyabr va bu Kuz");
//     break;
//   case 12:
//     alert("Dekabr va bu Qish");
//     break;

//   default:
//     alert("Men bilmayman");
//     break;
// }
const dob = prompt("When you threwn out by your Mum");
const year = new Date().getFullYear();
const age = year - dob;


if(age <= 5){
    alert("You must go to the kindergarden");
}else if(age >= 5){
    alert("You must go the the scool");
}
