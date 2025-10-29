console.log(" Halo dari script.js! File berhasil terhubung. ");

// Memilih elemen input (sumber data)
const inputNamaResep = document.querySelector('#recipe-name');

// Memilih elemen pratinjau (target perubahan)
const judulPratinjau = document.querySelector('#preview-title');

// Uji coba di console
console.log(inputNamaResep);
console.log(judulPratinjau);

inputNamaResep.addEventListener('input', function() {
    console.log(inputNamaResep.value);
});

inputNamaResep.addEventListener('input', function() {
    // 1. Ambil nilai yang ada di input
    const teksInputan = inputNamaResep.value;
    
    // 2. Setel teks pratinjau = teks inputan
    judulPratinjau.textContent = teksInputan;
});

inputNamaResep.addEventListener('input', function() {
    const teksInputan = inputNamaResep.value;
    
    if (teksInputan === "") {
        // Jika kosong, tampilkan teks placeholder
        judulPratinjau.textContent = "Judul Resep Akan Muncul Di Sini";
    } else {
        // Jika ada isi, tampilkan isinya
        judulPratinjau.textContent = teksInputan;
    }
});

const inputWaktuPersiapan = document.querySelector('#prep-time');
const waktuPratinjau = document.querySelector('#preview-time');

inputWaktuPersiapan.addEventListener('input', function() {
    const waktuInputan = inputWaktuPersiapan.value;
    
    if (waktuInputan === "" || waktuInputan === "0") {
        waktuPratinjau.textContent = "-- menit";
    } else {
        waktuPratinjau.textContent = waktuInputan + " menit";
    }
});

const inputDeskripsi = document.querySelector('#description');
const deskripsiPratinjau = document.querySelector('#preview-desc');

inputDeskripsi.addEventListener('input', function() {
    const deskripsiInputan = inputDeskripsi.value;
    
    if (deskripsiInputan === "") {
        deskripsiPratinjau.textContent = "Deskripsi resep Anda akan muncul di sini...";
    } else {
        deskripsiPratinjau.textContent = deskripsiInputan;
    }
});

const inputKesulitan = document.querySelector('#difficulty');
const kesulitanMeter = document.querySelector('#preview-difficulty');
const kesulitanText = document.querySelector('#preview-difficulty-text');

inputKesulitan.addEventListener('input', function() {
    const nilaiKesulitan = inputKesulitan.value;

    // Update nilai meter
    kesulitanMeter.setAttribute('value', nilaiKesulitan);
    
    // Ubah teks deskriptif sesuai tingkat kesulitan
    let textKesulitan = "";
    switch(nilaiKesulitan) {
        case "1":
            textKesulitan = "Sangat Mudah";
            break;
        case "2":
            textKesulitan = "Mudah";
            break;
        case "3":
            textKesulitan = "Sedang";
            break;
        case "4":
            textKesulitan = "Sulit";
            break;
        case "5":
            textKesulitan = "Sangat Sulit";
            break;
    }

    kesulitanText.textContent = textKesulitan;
});

const inputBahanBahan = document.querySelector('#ingredients');
const bahanPratinjau = document.querySelector('#preview-ingredients-list');

inputBahanBahan.addEventListener('input', function() {
    const bahanInputan = inputBahanBahan.value;
    
    if (bahanInputan === "") {
        bahanPratinjau.innerHTML = '<li>Bahan-bahan akan muncul di sini...</li>';
    } else {
        // Split berdasarkan enter (newline)
        const bahanArray = bahanInputan
            .split('\n')
            .filter(bahan => bahan.trim() !== '');
        
        // Buat HTML list
        let htmlList = '';
        bahanArray.forEach(bahan => {
            const bahanBersih = bahan.trim().replace(/^-\s*/, '');
            htmlList += `<li>${bahanBersih}</li>`;
        });
        
        bahanPratinjau.innerHTML = htmlList;
    }
});
