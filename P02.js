                            // VARİABLES AND CONSTANTS
let name = 'Murat'; // Sadece tanimlandigi scope icerisinde kullanilabilir.
console.log('isim : ' + name); 

var firstName = 'Damra'; // Global bir degisken
console.log('isim : ' +firstName);

const pi = 3.14;
console.log('pi sayisi : ' + pi);

name = 'Tarik';
firstName = 'Sena';
var age = 14;
// pi = 3; Assignment to constant variable. ==> Deger atamasi yapilamayacagi icin hata verir.

console.log('Yeni isim1 : ' + name);
console.log('Yeni firstName : ' + firstName);
// console.log('Yeni pi : ' + pi);
console.log('yas : ' + age);

/*
    - Degisken isimleri a..z ve A...Z gibi harflerle baslayabilir.
    - _ veya $ isaretide kullanilabilir.
    - Rakamla baslayamaz fakat icinde rakam kullanilabilir.
    - Isimler case sensitive'dir. myname, Myname, myName birbirinden farkli degiskenlere
    karsilik gelir. Bu nedenle camelCase yazim metodolojisi tercih edilir.   
    - if, for, while, else gibi anahtar kelimeler degisken adi yapilamaz.                     
*/



