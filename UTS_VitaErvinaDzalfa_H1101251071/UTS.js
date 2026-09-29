const form = document.getElementById('InformasiLagu');
const inputJudul = document.getElementById('nama');
const inputPenyanyi = document.getElementById('penyanyi');
const inputGenre = document.getElementById('genre');
const btnReset = document.getElementById('btnReset');
const btnCariLagu = document.getElementById('btnCari');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nilaiJudul = inputJudul.value;
    const nilaiPenyanyi = inputPenyanyi.value;
    const nilaiGenre = inputGenre.value;

    if (nilaiJudul === '' && nilaiPenyanyi === '' && nilaiGenre === '') {
        alert('Gagal! Semua kolom data wajib diisi.');
        return;
    }

    alert(`Berhasil! Data telah disimpan.\nNama: ${nilaiJudul}\nEvent: ${nilaiGenre}`);
});

