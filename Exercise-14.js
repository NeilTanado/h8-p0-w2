const dataHandling2 =(input)=>{
input.splice(1,1,'Roman Alamsyah Elsharawy');
input.splice(4,4, 'Pria','SMA International Metro')
console.log (input)
var baru = input.slice(3,4)
console.log(baru)
var pisah = baru.toString().split('/').reverse()
console.log(pisah)
console.log(pisah.join('-'))
var bulan = pisah[1]
switch(bulan){
  case '01':console.log('Januari');break;
  case '02':console.log('Februari');break;
  case '03':console.log('Maret');break;
  case '04':console.log('April');break;
  case '05':console.log('Mei');break;
  case '06':console.log('Juni');break;
  case '07':console.log('Juli');break;
  case '08':console.log('Agustus');break;
  case '09':console.log('September');break;
  case '10':console.log('Oktober');break;
  case '11':console.log('November');break;
  case '12':console.log('Desember');break;
  console.log(bulan)
}
var potong= input[1].slice(0,14)
console.log(potong)
}
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

dataHandling2(input)
