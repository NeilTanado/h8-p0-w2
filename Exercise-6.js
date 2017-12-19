for(var deret = 1; deret <= 100; deret ++){
  if(deret%2===0){
    console.log('Counter '+deret +' Genap');
  }else{console.log('Counter '+ deret + ' Ganjil');}}

console.log('PENGULANGAN 1')
for(var deret = 1; deret <= 100; deret +=2){
  if(deret%3===0){
    console.log('counter '+ deret + ' merupakan kelipatan dari 3');
  }else{console.log('Counter'+ deret);}}

console.log('PENGULANGAN 2')
for(var deret = 1; deret <= 100; deret +=5){
  if(deret%6===0){
    console.log('counter '+ deret + ' merupakan kelipatan dari 6');
  }else{console.log('Counter'+ deret);}}
  
console.log('PENGULANGAN 3')
for(var deret = 1; deret <= 100; deret +=9){
  if(deret%10===0){
    console.log('counter '+ deret + ' merupakan kelipatan dari 10');
  }else{console.log('Counter'+ deret);}}