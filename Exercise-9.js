console.log('Tugas 1')

var name = 'Joko'
var pembilang = 20;
var penyebut = 2;
var hasil = (pembilang/penyebut);

console.log ('halo '+name+', '+pembilang+' dibagi '+penyebut+' adalah sama dengan '+hasil);

console.log('Tugas 2')

var alas = 4;
var tinggi= 5;
var luassegitiga=(alas*tinggi)/2;
console.log ('luas segitiga: ' +luassegitiga);


console.log('Tugas 3')

var tahun = 1789

if(tahun%4===0){
 console.log(tahun+' adalah tahun kabisat');
}
else {if(tahun%100===1){
  console.log(tahun + ' adalah tahun kabisat')
}
else{if(tahun%400===0){
  console.log(tahun + ' adalah tahun kabisat')
}
else{console.log(tahun +' adalah bukan tahun kabisat')}
}
}
