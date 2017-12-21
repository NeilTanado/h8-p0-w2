console.log ('Tugas 1');

function shoutOut() {
    return ('Halo,Function!');
}
console.log(shoutOut());

console.log ('Tugas 2');

var num1=5;
var num2=6;

function CalculateMultiply(num1,num2) {
  return num1*num2
}

var hasilperkalian= CalculateMultiply(num1,num2);
console.log(hasilperkalian);

console.log('Tugas 3')

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function prossessSentence (name,age,address,hobby){
  return 'nama saya '+name+ ' ,umur saya '+age+' tahun, alamat saya di '+address+' dan saya mempunyai hobi '+hobby+'.'
};

var fullsentence = prossessSentence (name,age,address,hobby);
console.log(fullsentence);
