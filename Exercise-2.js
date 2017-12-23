var nama='';
var peran='';

if(peran ==''){
  console.log('Halo ' + nama + ' Pilih peranmu untuk memulai game');
}
else {
  if(peran =='ksatria'){
  console.log('Selamat datang di Dunia Proxytia ,' + nama + '!');
  console.log('halo ' + peran +' ' + nama + ', kamu dapat menyerang dengan senjatamu!');}
  else{
    if(peran =='tabib'){
    console.log('Selamat datang di Dunia Proxytia ,' + nama + '!');
    console.log('halo ' + peran +' ' + nama + ', kamu akan membantu temanmu yang terluka.');}
    else{
    if(peran =='penyihir'){
    console.log('Selamat datang di Dunia Proxytia ,' + nama + '!');
    console.log('halo ' + peran +' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!'); }
    }
    }
  }
