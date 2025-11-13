# 💡 Laporan Praktikum — Formulir Pengiriman Resep

## 👤 Identitas Mahasiswa
**Nama:** Farhan Ridwan Badhawi  
**NIM:** 45224210037  
**Mata Kuliah:** Desain Web

#### 🧩 Struktur Utama
- `<form>` untuk menginput data resep.
- `<article>` sebagai pratinjau hasil input (judul, deskripsi, bahan, video).
- `<section id="inspirasi-resep">` untuk menampilkan inspirasi resep dari API.

#### 📋 Elemen Formulir
Formulir berisi:
- **Nama Resep** (`<input type="text">`)
- **Waktu Persiapan** (`<input type="number">`)
- **Deskripsi Resep** (`<textarea>`)
- **Bahan-bahan** (`<textarea>`)
- **Tingkat Kesulitan** (`<input type="range">` + `<meter>`)
- **Kategori Resep** (`<datalist>` untuk pilihan otomatis)
- **Tombol Kirim** (`<button>`)

#### 📋 Structur HTML
</article>
<hr>
<section id="inspirasi-resep">
    <h2>Inspirasi Resep Lainnya</h2>
    <p id="loading-indicator">Memuat resep...</p>
    <p id="error-message" style="display: none; color: red;"></p>
    <div id="resep-container">
        </div>
</section>

#### 🎞️ Elemen Multimedia
- **Gambar** ditampilkan menggunakan `<figure>` dan `<picture>`.
- **Video Tutorial** menggunakan `<video>` dengan subtitle Bahasa Indonesia (`<track>`).

#### 🧠 Elemen Semantik
Menggunakan elemen modern HTML5:
- `<fieldset>` dan `<legend>` → untuk mengelompokkan form
- `<details>` dan `<summary>` → untuk info gizi yang bisa dibuka/tutup
- `<meter>` → indikator tingkat kesulitan
- `<article>` dan `<section>` → struktur semantik halaman

---

### 2️⃣ **CSS (style.css)**
File `style.css` mengatur tampilan agar responsif, rapi, dan menarik.

.resep-container {
    display: grid;
    /* Gunakan CSS Grid untuk membuat layout kartu yang responsif */
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}
.kartu-resep {
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    overflow: hidden; /* Agar gambar tidak keluar dari radius */
}
.kartu-resep img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}
.kartu-resep h3 {
    font-size: 1.2rem;
    padding: 1rem;
}
#### 🎨 Desain Dasar
- Warna utama: merah tua (`#8f0d0d`)
- Font: `'Maiandra GD'`, `'Segoe UI'`, dan sans-serif
- Menggunakan **Flexbox** untuk layout dua kolom

#### 📐 structur JS
Langkah 4: Logika script.js (Inti Praktikum)
Buka file script.js Anda. Hapus kode console.log lama. Anda boleh membiarkan kode live preview dari praktikum lalu. Tambahkan kode baru di bawahnya.
Pilih Elemen: Pilih elemen-elemen baru yang kita buat.
// ... (kode lama Anda) ...

// --- BAGIAN KODE BARU UNTUK AJAX ---

// Pilih elemen-elemen baru
const containerInspirasi = document.querySelector('#resep-container');
const loadingIndicator = document.querySelector('#loading-indicator');
const errorMessage = document.querySelector('#error-message');

// URL API (Ambil 12 resep dari kategori "Seafood")
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

Buat Fungsi Asinkron: Buat fungsi async untuk mengambil dan menampilkan data.
async function muatInspirasiResep() {
  try {
    // 1. Tampilkan loading, sembunyikan error
    loadingIndicator.style.display = 'block';
    errorMessage.style.display = 'none';

    // 2. Ambil data dari API
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Gagal mengambil data dari server.');
    }

    // 3. Ubah data menjadi JSON
    const data = await response.json();
    const resepArray = data.meals; // Ini adalah array berisi resep

    // 4. Sembunyikan loading
    loadingIndicator.style.display = 'none';

    // 5. Panggil fungsi untuk menampilkan data
    tampilkanResep(resepArray);

  } catch (error) {
    // 6. Tangani jika terjadi error
    console.error('Terjadi kesalahan:', error);
    loadingIndicator.style.display = 'none';
    errorMessage.textContent = 'Gagal memuat resep. Coba lagi nanti.';
    errorMessage.style.display = 'block';
  }
}
Buat Fungsi Manipulasi DOM (Looping & Creation):
function tampilkanResep(resepArray) {
  // Bersihkan kontainer (jika ada data lama)
  containerInspirasi.innerHTML = '';

  // Loop (ulangi) untuk setiap resep di dalam array
  resepArray.forEach(resep => {
    // 1. Buat elemen-elemen HTML baru
    const kartuDiv = document.createElement('div');
    kartuDiv.className = 'kartu-resep'; // Beri kelas CSS

    const gambar = document.createElement('img');
    gambar.src = resep.strMealThumb; // Ambil URL gambar dari API
    gambar.alt = resep.strMeal;

    const judul = document.createElement('h3');
    judul.textContent = resep.strMeal; // Ambil nama resep dari API

    // 2. Susun elemen-elemen tersebut
    kartuDiv.appendChild(gambar);
    kartuDiv.appendChild(judul);

    // 3. Masukkan kartu yang sudah jadi ke dalam kontainer di halaman
    containerInspirasi.appendChild(kartuDiv);
  });
}

Jalankan Fungsi: Terakhir, panggil fungsi utama tadi agar berjalan saat halaman dimuat.
muatInspirasiResep();


