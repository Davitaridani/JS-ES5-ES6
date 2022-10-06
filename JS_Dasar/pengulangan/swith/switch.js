var buah = prompt('Buah yang aku suka :');

switch (buah) {
    case 'semangka':
    case 'nanas':
        alert('Aku SUKA Buah ' + buah + '');
        break;
    case 'apukat':
        alert('Aku TIDAK SUKA Buah ' + buah + '');
        break;
    case 'jeruk':
    case 'salak':
        alert('Aku SUKA Buah ' + buah + '');
        break;
    case 'mangis':
        alert('Aku TIDAK SUKA Buah ' + buah + '');
        break;
    case 'duren':
        alert('Aku SUKA Buah ' + buah + '');
        break;
    default:
        alert('Anda tidak memasukan nama buah dgn benar');
        break;
}