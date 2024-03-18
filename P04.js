let name = 'Murat';
var age = 33;
var occupation = 'Tester';
var maas = '1000';

console.log(typeof name); // Variable'nin data turunu yazdirir.
console.log(typeof age); // number
let prim = maas*0.1;
let sayiMaas = Number(maas); // Data casting islemi ayni sekilde yapiliyor.

let metinYas = String(age);
console.log('----------');
console.log(typeof metinYas); // String
console.log(maas+prim) // 1000100
console.log(sayiMaas+prim); // 1100



