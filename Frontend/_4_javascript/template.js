// single comment
/* multiple comment */

// console.log("console");
// console.warn("console");
// console.error("console");
// window.console.info("console");

// // window.alert("deneme44")
// // alert("deneme55")

// /////////////////////////////////////////////////////////////////
// var dataValue=14;
// console.log(dataValue);

// var dataValue44=44;
// console.log(dataValue44);

// var _dataValue44=44;
// console.log(_dataValue44);

// var $_dataValue44=44;
// console.log($_dataValue44);

// // var `~&444$_dataValue44=44;


// var data=99;
// console.log( typeof data);

// var data="Kelime";
// console.log( typeof data);

// var data=3>1;
// console.log( typeof data);

// // hoisting
// data=56566;
// var data ;
// console.log(data);

/////////////////////////////////////////////////////////////////
// var globalVariable="String-1"
// console.log(globalVariable);

// var globalVariable="String-2"
// console.log(globalVariable);

// let localVariable=true;
//  localVariable=false;

//  const localVariable1=true;

/////////////////////////////////////////////////////////////////
// Operatorler
// + - * / % ! &&=VE ||=VEYA
// x++ ,  ++x , x-- , --x
// x++;
// x=x+1;
// x+=1;

///////////////////////////////////////////////////////////////// 
// // let userData=prompt("Lütfen adınızı giriniz ");
// // console.log(userData);


// // Infinity
// console.log(4/0);

// // NaN
// console.log(4/"asd");

// // undefined
// let data;
// console.log(data);
// ///////////////////////////////////////////////////////////////// 

// // Cast
// console.log(4+4);
// console.log(4+ Number("4"));
// console.log(4+ parseInt("4"));
// console.log(4+ String(4));

// // Math
// console.log(Math.min(2,1,-500,6,900));
// console.log(Math.max(2,1,-500,6,900));
// console.log(Math.abs(-500));
// console.log(Math.sqrt(16));
// console.log(Math.pow(2,5));

// console.log(Math.floor(2.9));
// console.log(Math.ceil(2.1));
// console.log(Math.round(5.4));
// console.log(Math.round(5.5));

// console.log((Math.random()*9+1).toFixed(3));
// console.log(Math.floor((Math.random()*9+1).toFixed(3)) );

// console.log(Math.sin(-1));

///////////////////////////////////////////////////////////////// 
// Function 
// 1
// function returnsuzParametresiz(){
//     console.log("returnsuz Parametresiz");
// }
// returnsuzParametresiz();

// // 2
// function returnsuzParametreli(uname){
//     console.log("returnsuz Parametreli "+uname);
// }
// returnsuzParametreli("Hamit.")


// // 3
// function returnluParametresiz(){
//    return "returnlu Parametresiz";
// }
// const data3= returnluParametresiz();
// console.log(data3);


// // 4
// function returnluParametreli(uname,usurname){
//     return "returnlu Parametreli "+uname+usurname;
//  }
//  const data4= returnluParametreli("Hamit", "Mızrak");
//  console.log(data4);

///////////////////////////////////////////////////////////////// 

// (()=>{
//     console.log("Immedia Arrow Function");
// })()

// Function
function normFunction() {
    console.log("norm Function");
}
normFunction()

// Anonymous
let anonymousFunction = function () {
    console.log("anonymous Function");
}
anonymousFunction()

// Arrow
const arrowFunction = () => {
    console.log("arrow Function Function");
}
arrowFunction()

// Immedia Function
// (function(){
//     console.log("Immedia Anonymous Function");

// })()

// (()=>{
//     console.log("Immedia Arrow Function");

// })()


//////////////////////////////////////////////////////////////////
// Conditional

// if else
let conditional = () => {
    let number = 5;
    if (number > 0) {
        console.log("pozitif");
    } else {
        console.log("negatif");
    }
}
conditional();

// ternary
let ternary = () => {
    let number = 5;
    let result = (number > 0) ? "pozitif" : "negatif";
    console.log(result);
}
ternary();

// if elseif else
let conditional2 = () => {
    let number = 0;
    if (number > 0) {
        console.log("pozitif");
    } else if (number === Number("0")) {
        console.log("Sıfır");
    } else {
        console.log("negatif");
    }
}
conditional2();



// if elseif else
let conditional3 = () => {
    let number = 5;
    if (number === 1) {
        console.log("sayı 1");
    } else if (number === 2) {
        console.log("sayı 2");
    } else if (number === 3) {
        console.log("sayı 3");
    } else if (number === 4) {
        console.log("sayı 4");
    } else if (number === 5) {
        console.log("sayı 5");
    } else {
        console.log("1<=X<=5 dışında bir sayıdır");
    }
}
conditional3();


// switch case
let conditional4 = () => {
    let number = 5;

    switch (number) {
        case 1:
            console.log("sayı 1");
            break;
        case 2:
            console.log("sayı 2");
            break;
        case 3:
            console.log("sayı 3");
            break;
        case 4:
            console.log("sayı 4");
            break;
        case 5:
            console.log("sayı 5");
            break;
        default:
            console.log("1<=X<=5 dışında bir sayıdır");
            break;
    }
}
conditional4();

//////////////////////////////////////////////////////////////////
// Loop
// iterative for
// while
// do-while

//////////////////////////////////////////////////////////////////
// Dizi
// iterative for
// forin
// forof
// forEach
// map
// filter
// fill

//////////////////////////////////////////////////////////////////
// Object

//////////////////////////////////////////////////////////////////
// Event
// LocalStorage
// setInterval(()=>{},2000) setTimeOut(()=>{},3000)

//////////////////////////////////////////////////////////////////
// DOM
// Listeners
////////////////////////////////////////////////////////////////////
// Form input Handling && jQuery

// callback, promise, asyn-await