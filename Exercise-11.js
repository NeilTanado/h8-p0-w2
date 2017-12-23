var nama = '';
var peran = 'ksatria';
var tahunLahir = 1991;
var umur = 2017 - tahunLahir;
var playerHealth = tahunLahir * Math.random();
var monsterHealth = tahunLahir * Math.random();
var kodeMonster = Math.floor(Math.pow(100, Math.random()));

if(nama===''){
(nama='KACUNG')
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
  }}
else{
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
}

for (var index = 1; index <= tahunLahir; index++) {
  if (index % umur === 0) {
    console.log(peran + ' ' + nama + ' menyerang monster!');
      monsterHealth -= umur;
  } else {
    if (index % kodeMonster === 0) {
      console.log('monster menyerang ' + peran + ' ' + nama + '!');
      playerHealth -= kodeMonster;
      } else {
        if (index % umur === 0 && index % kodeMonster === 0) {
        console.log('Health keduanya bertambah')
        playerHealth += kodeMonster;
        monsterHealth += umur;
        } else {
            if (playerHealth > kodeMonster) {
              console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
                } else {
                console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');
                }
            }
        }
    }
}
