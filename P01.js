// Bir satirlik yorum yazmak istediginizde bu yapidaki gibi kullanim gerekir

/*
Burada ise birden fazla satira ait yorum için kullanim mevcuttur.
*/

                    // consol.log Kullaimi
/*
bir variable'in degerini yazdirmak istedigimizde consol.log kullanimini gerceklestiririz.
*/

console.log("Murat");
console.log('Akar');

// String icin cift tirnak veya tek tirnak kullanimi bir degisiklik yaratmaz. Ikiside aynidir.

// Ne kadar bosluk oldugunun hicbir onemi yoktur.Bosluk icin log birakmak gerekir
console.log('');
console.log('Merhaba Dünya');
console.log("==========================================================")
                            // DEGİSKEN YAZDİRMA
let name = 'John Doe'
console.log(name); // Ustunu cizmesinin sebebi data turunden kaynakli.Ileride gorulecek
console.log("--------------------------")

let sayi1 = 20;
let sayi2 = 30;

console.log(sayi1+sayi2); // 50
console.log('sayi1' + 'sayi2'); // sayi1sayi2

// console.log(sayi1sayi2); ReferenceError: sayi1sayi2 is not defined ==> hatasi verir.

console.log(20+30); // 50
console.log('30' + '20') // 3020
name = 'Murat Akar';
console.log('Sn. ' + name + ' Hosgeldiniz' );
console.log("-----------------------------")

// \n: alt satira gecme
console.log('Wise Quarter\nHave a nice Day');
// \t: bir tab bosluk birakma
console.log('Murat AKAR\t\tWise Quarter'); // Murat AKAR              Wise Quarter

console.log('Hello World\n"Hello World"');




