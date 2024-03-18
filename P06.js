// OBJECTS

var ogrenci = { 

    isim : 'tarik',
    soyIsim : 'yigit',
    age : 19,
    isHeStudent : true,
    school : 'Istanbul Teknik Universitesi' 

};

console.log('Ogrenci Adi Soyadi : '+ ogrenci.isim + " " + ogrenci.soyIsim + 
            '\nOgrenci Yasi : ' + ogrenci.age + 
            '\nOgrenci Kaydi Var mi ? : ' + ogrenci.isHeStudent +
            '\nOkulu : ' + ogrenci.school);

ogrenci.isim = 'Esma Sena';
ogrenci.age = 14;
ogrenci.school = 'Galatasaray Lisesi';

console.log('');
console.log('');
console.log('Ogrenci Adi Soyadi : '+ ogrenci.isim + " " + ogrenci.soyIsim + 
            '\nOgrenci Yasi : ' + ogrenci.age + 
            '\nOgrenci Kaydi Var mi ? : ' + ogrenci.isHeStudent +
            '\nOkulu : ' + ogrenci.school);