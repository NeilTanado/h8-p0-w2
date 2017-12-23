var pertanyaan = [
  [
    'Fisika',
    'Gaya adalah sesuatu yang mengubah kedudukan atau bentuk benda. ?',
    'benar',
    'salah',
    'benar',
  ],
  [
    'Matematika',
    'N 25% dari 44 adalah kurang dari 12',
    'benar',
    'salah',
    'benar',
  ],
  [
    'soal PPKN',
    'UUD 1945 telah diamandemen sebanyak 4 kali',
    'benar',
    'salah',
    'salah',
  ],
  [
    'PPKN',
    'UUD 1945 tidak boleh dirubah substansinya',
    'benar',
    'salah',
    'salah',
  ],
  [
    'Agama',
    'Al-awal artinya adalah Zat yang pertama, jadi Allah telah ada sebelum segala sesuatu ada, dan tidak ada sesuatupun yang mendahului keberadaannya ini adalah sifat maha awal Allah SWT adalah benar.',
    'benar',
    'salah',
    'benar',
  ],
];

var key = ['Tema', 'Quiz', 'A', 'B'];

const kuis = () => {
  let jumlahBenar = 0
  for (var i = 0; i < pertanyaan.length; i++) {
    for (var j = 0; j < pertanyaan[i].length - 1; j++) {
      console.log(`${key[j]} : ${pertanyaan[i][j]}`);
    }
  var games = prompt(pertanyaan[i].slice(0,-1),'isi benar/salah')
    if (pertanyaan[i][pertanyaan[i].length - 1] === games) {
      console.log('Benar');
      jumlahBenar += 1
    } else {
      console.log('Salah');
    }
    console.log(' ');
  }
  alert(`Total Score ${jumlahBenar *  10 / pertanyaan.length}`)
};




kuis();
