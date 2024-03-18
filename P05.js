// Concatenation : Iki farkli veriyi birlestirmek icin kullanilir.

var firstName = 'Esma Sena';
let surName = 'Yigit';
var fullName = firstName + surName;
console.log(fullName); // Esma SenaYigit
var fullName = firstName +" "+ surName;
console.log(fullName); // Esma Sena Yigit


// Interpolation : Bir ifadenin icerisine dinamik ogeler eklemek icin kullanilir
// Ekleme isleminde `` (ters tirnak silmenin solunda) ifadesi kullanilir.

var age = 14;

console.log(`Hi. My Name is ${fullName} and i am ${age} years old`);
// Hi. My Name is Esma Sena Yigit and i am 14 years old
// ${} ogesinin icerisine dinamik ogeler yerlestirilebilir.
