/*
Kitap urununde KDV orani : 0 
Temzlik urununde KDV orani : 8
Gida urunlerinde KDV orani : 1 
Teknoloji urunlerinde KDV orani : 18

Bir markete giren Murat;
1 adet Java kitabi(280TL), 2 adet CamSiL(100TL), 1 adet Usb aliyor(180TL).
Fatura tutarini hesaplayan kodu yazin.
*/

var camSilFiyat = 100 + 100*0.08;
var javaKitapFiyat = 280;
var usbFiyat = 180 + 180 * 0.18;

console.log('Toplam fatura tutari : ' + (camSilFiyat+javaKitapFiyat+usbFiyat));
