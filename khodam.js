document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('checkButton').addEventListener('click', function() {
      const name = document.getElementById('name').value.trim();
      const result = document.getElementById('result');
  
      if (name) {
        const khodam = checkKhodam();
        result.innerHTML = `Khodam Anda Adalah: <strong>${khodam}</strong>`;
      } else {
        result.innerHTML = '<span style="color: red;">Silahkan Masukkan Nama Anda!</span>';
      }
    });
  });
  
  const khodams = [
    'Khodam Gajah Putih', 'Khodam Kucing Emas', 'Khodam Harimau Hitam', 
    'Khodam Rimba', 'Khodam Gunung Tua', 'Khodam Naga Kuning', 
    'Khodam Ratu Laut Selatan', 'Khodam Lembu Hitam', 'Khodam Jenglot', 
    'Khodam Langit Biru', 'Khodam Bulan Purnama', 'Khodam Api Merah', 
    'Khodam Rimba Raya', 'Khodam Gunung Merapi', 'Khodam Angin Barat', 
    'Khodam Laut Merah', 'Khodam Satria', 'Khodam Alam Gaib', 'Khodam Kuda Jantan'
  ];
  
  function checkKhodam() {
    const index = Math.floor(Math.random() * khodams.length);
    return khodams[index];
  }
  