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
//normFunction()

// Anonymous
let anonymousFunction = function () {
    console.log("anonymous Function");
}
//anonymousFunction()

// Arrow
const arrowFunction = () => {
    console.log("arrow Function Function");
}
//arrowFunction()

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
//conditional();

// ternary
let ternary = () => {
    let number = 5;
    let result = (number > 0) ? "pozitif" : "negatif";
    console.log(result);
}
//ternary();

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
//conditional2();



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
//conditional3();


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
//conditional4();

//////////////////////////////////////////////////////////////////
// Loop

// iterative for
const loop1 = () => {
    let sum = 0;
    for (let i = 1; i <= 9; i++) {
        document.writeln(i);
        sum += i;
    }
    document.writeln("Sonuç: " + sum)
}
//loop1()
// for(;;){}
//document.writeln("<br/>------------<br/>"); 

// while
const loop2 = () => {
    let sum = 0;

    let i = 1;
    while (i <= 9) {
        document.writeln(i);
        sum += i;
        i = i + 1;
    }
    document.writeln("Sonuç: " + sum)
}
//loop2()
// while(true){}
//document.writeln("<br/>------------"); 

// do-while
//document.writeln("<br/>------------<br/>"); 

// while
const loop3 = () => {
    let sum = 0;
    let i = 1;
    do {
        document.writeln(i);
        sum += i;
        i = i + 1;
    }
    while (i <= 9);
    document.writeln("Sonuç: " + sum)
}
//loop3()
// while(true){}
//document.writeln("<br/>------------"); 

////////////////////////////////////////////////////////////////////// 
const str = () => {
    let value = "js ÖĞReniyorum js ";
    console.log(value);
    console.log(value.length);
    console.log(value.trim().length);

    console.log(value.toLowerCase());
    console.log(value.toUpperCase());

    console.log(value.concat("INC"));

    console.log(value.indexOf("js"));
    console.log(value.lastIndexOf("js"));

    console.log(value.charAt(1));

    console.log(value.substring(3));
    console.log(value.substring(0, 3));

    console.log(value.replace(value, "yeni değer"));

    console.log(value.startsWith("j"));
    console.log(value.endsWith(" "));
}
//str()

//////////////////////////////////////////////////////////////////
// Dizi
let array1 = () => {
    let data = [4, 5, 1, 3, 6, 7, 2, 8];
    data[8] = 9;
    console.log(data);
    console.log(data[0]);
    console.log(data[8 - 1]);
    console.log(data[data.length - 1]);

    // Iterative For
    for (let i = 0; i < data.length; i++) {
        document.writeln(data[i]);
    }

    document.writeln("<br/>------------<br/>");
    // for Of
    data.push(44);
    data.unshift(23);
    data.pop();
    data.shift();
    for (let temp of data) {
        document.writeln(temp);
    }

    //data.sort();
    //data.reverse();
    data.sort().reverse();
    document.writeln("<br/>------------<br/>");
    for (let temp in data) {
        // document.writeln(temp+" => "+data[temp]+"<br/>");
        document.writeln(`${temp} => ${data[temp]} <br/>`);
    }

    document.writeln("<br/>------------<br/>");
    let result1 = data.toString();
    document.writeln(result1.concat(" 999"));

    document.writeln("<br/>------------<br/>");
    let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result2 = data2.splice(5, 3);
    document.writeln(result2)
}
//array1()
// iterative for
// forin
// forof

let randomArray = () => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
        arr[i] = Math.floor(Math.random() * 9 + 1);
    }
    //console.log(arr);
    return arr;
}
// randomArray()

const mapForFilter = () => {

    // forEach
    // map
    // filter

    let array = randomArray();
    console.log(array);

    array.filter((value, number, array) => {
        return value % 2 == 0
    }).forEach((value, number, array) => {
        console.log(`${number} => ${value}`);
    })
    console.log("-------------");
    array.map((value, number, array) => {
        return value += 10;
    }).forEach((value, number, array) => {
        console.log(`${number} => ${value}`);
    })
    console.log("-------------");

    array.filter((value, number, array) => {
        return value % 2 == 0;
    }).map((value, number, array) => {
        return value += 10;
    }).forEach((value, number, array) => {
        console.log(`${number} => ${value}`);
    })
}
//mapForFilter();

//////////////////////////////////////////////////////////////////
let dataTry=()=>{
 // try-catch
try {
    alertx("deneme");
} catch (err) {
    console.error(err);
    //console.error(err.name);
    //console.error(err.message);
} finally{
    console.log("db.close");
    // throw "Hata var bilerek oluşturdum"
}

console.log("son satır");   
}
//dataTry();


//////////////////////////////////////////////////////////////////
// LocalStorage
const localData=()=>{
    localStorage.setItem("unique_name","MErhabalaar")
}
// localData();

const getlocalData=()=>{
    const data=localStorage.getItem("unique_name")
    alert(data)
}
// getlocalData();

//////////////////////////////////////////////////////////////////
// setInterval(()=>{},2000) 
let data4=()=>{
    setInterval(()=>{
        console.log("set Interval");
    },1000) 
}

let data5=()=>{
    setTimeout(()=>{
        console.log("set Time out");
    },1000) 
}

// data5()
// data4()
///////////////////////////////////////////////////////////// 
// Event
const sendData=()=>{
    alert("çalıştı")
}

//////////////////////////////////////////////////////////////////
// D-O-M
let domManipulation=()=>{
    // alert("dom");
    let data= document.getElementById("param_id");
    //let data= document.getElementsByClassName("param_class")[0];

    //let data= document.querySelector("#param_id");
    //let data= document.querySelector(".param_class");
    
    data.innerHTML=`<b><mark>Değiştirdi</mark></b>`;
    data.innerText=`<b><mark>Değiştirdi</mark></b>`;
    data.style.color=`red`;
    data.style.backgroundColor=`black`;
    data.style.padding=`2rem`;
    data.style.marginTop=`2rem`;
}
// innerHTML
// innerText
// style

//////////////////////////////////////////////////////////////////
// Object

// Event-Listeners
// document.getElementById("id44").addEventListeners("onclick",()=>{})
////////////////////////////////////////////////////////////////////
// Form input Handling && jQuery

// callback, promise, asyn-await

////////////////////////////////////////////////////////////////////
// ÖDEV
// Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ? (prompt)
// let number1,number,sum=0;
// number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
// number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
// console.log(number1+number2);
// Örnek-2
/*
    Kullanıcıdan aldığımız sayıyı dereceden fahrenhayt'a çeviren JS kodu yazınız ?
    Formül: (derece*9/5)+32
*/
// let degree=0,fahranhayt=0;
// degree=Number(prompt("Lütfen Dereceyi giriniz"));
// fahranhayt=(degree*9/5)+32;
// console.log(fahranhayt);


// Örnek-3
// y=3x+4k ==> 1.dereceden 2 bilinmeyenli denklem algoritma JS kodu yazınız ?
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
// x=2 k=3 y=? (y=18)
// let x=0,y=0,k=0;
// x=Number(prompt("Lütfen X giriniz"));
// k=Number(prompt("Lütfen K giriniz"));
// y=3*x+4*k;
// console.log("Y sonucu:"+y);

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
// console.log(4+3*2*(3/3-1*6+9/1+(3/3)));


//// MATH ÖDEVİ
// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// s2-) Bu sayılardan en büyüğü nedir ? (max)
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))

// Örnek: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9 (Math.abs)
// 2-yukarı yuvarlama yapsın  6.0 (Math.ceil)
// 3-karesini alsın 36.00 (Math.pow(sayı,2))
// 4-çıkan sayının karekökü alsın (Math.sqrt(sayı))
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

// ÖDEV:
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)


// Şimdiki zamanın saatine göre hesaplama yapan switch-case ile  JS code yazınız.
// (Dikkat: arrow function ile yazınız) Zaman için new Date().getHours() ile alabilirsiniz


//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32
//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))



//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım


// ********** ÖNEMLi ******************
// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma
