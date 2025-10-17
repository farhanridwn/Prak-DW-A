Praktikum HTML5 Lanjutan - Struktur, Semantik, dan Interaktivitas Bawaan
Tujuan Praktikum (Hasil Pembelajaran)
Di akhir sesi praktikum ini, Anda diharapkan mampu:

Mengimplementasikan tag-tag semantik HTML5 lanjutan ( <figure>, <time>, <details>, dll.) secara tepat.
Memanfaatkan input type dan validasi atribut berupa HTML5 untuk menciptakan pengalaman pengguna yang lebih baik tanpa JavaScript.
Mengintegrasikan media ( <video>) secara native beserta fitur aksesibilitasnya ( <track>).
Membiasakan diri untuk Merujuk pada dokumentasi teknis (MDN) untuk memahami atribut dan elemen perilaku yang kurang umum.
Studi Kasus: Halaman Pengiriman Resep "Dapur Koding"
Kita akan membangun kerangka (cetak biru) untuk halaman pengiriman resep. Fokus kami 100% pada struktur dan fungsionalitas bawaan HTML.

Persiapan
Buat file baru bernama praktikum4.html.
Buat dasar struktur HTML (boilerplate) dengan <!DOCTYPE html>, <html>, <head>, dan <body>.
Pastikan di dalam <head>ada meta charset dan viewport , serta <title>yang sesuai.
Buka tab baru di browser Anda dan arahkan ke MDN Web Docs .
Kodepraktikum4.html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Praktikum 4 - Pengiriman Resep</title>
</head>
<body>
    <h1>Formulir Pengiriman Resep Baru</h1>
    <form action="/submit-recipe" method="post">
        <fieldset>
            <legend>Informasi Dasar Resep</legend>

            <p>
                <label for="recipe-name">Nama Resep:</label><br>
                <input type="text" id="recipe-name" name="recipe_name" required maxlength="80">
            </p>
            <p>
                <label for="prep-time">Waktu Persiapan (menit):</label><br>
                <input type="number" id="prep-time" name="prep_time" min="5" placeholder="Contoh: 45">
            </p>
        </fieldset>

        <fieldset>
            <legend>Detail Tambahan</legend>
            <p>
                <label for="difficulty">Tingkat Kesulitan (1-5):</label><br>
                <input type="range" id="difficulty" name="difficulty" min="1" max="5" step="1" value="3">
            </p>
            <p>
                <label for="recipe-category">Kategori Resep:</label><br>
                <input list="categories" id="recipe-category" name="recipe_category" placeholder="Pilih atau ketik...">
                <datalist id="categories">
                    <option value="Makanan Pembuka"></option>
                    <option value="Makanan Utama"></option>
                    <option value="Hidangan Penutup"></option>
                    <option value="Minuman"></option>
                </datalist>
            </p>
        </fieldset>

        <button type="submit">Kirim Resep</button>
    </form>

    <hr>
    <h2>Pratinjau Halaman Resep</h2>

    <article>
        <header>
            <h1>Judul Resep Akan Muncul Di Sini</h1>
            <p>Waktu persiapan: <time datetime="PT45M">45 menit</time></p>
        </header>

        <figure>
            <img src="placeholder.jpg" alt="Gambar hidangan utama resep" width="600">
            <figcaption>Deskripsi singkat atau caption untuk gambar.</figcaption>
        </figure>

        <p>
            Deskripsi lengkap tentang resep akan ada di sini. Bahan rahasia kami adalah 
            <mark>bumbu spesial</mark> yang membuat semuanya lezat.
        </p>

        <details>
            <summary>Tampilkan Informasi Gizi</summary>
            <ul>
                <li>Kalori: 350kcal</li>
                <li>Protein: 20g</li>
                <li>Karbohidrat: 30g</li>
            </ul>
        </details>

        <h3>Video Tutorial</h3>
        <video controls width="600">
            <source src="video.mp4" type="video/mp4">
            Maaf, browser Anda tidak mendukung pemutaran video.
            <track
                label="Bahasa Indonesia"
                kind="subtitles"
                srclang="id"
                src="subtitles.vtt"
                default>
        </video>

        <footer>
            <p>Tingkat Kesulitan: <meter min="0" max="5" value="3" title="3 dari 5">3/5</meter></p>
        </footer>
    </article>

    <p><small>Catatan: file `placeholder.jpg`, `video.mp4`, dan `subtitles.vtt` harus berada di folder yang sama.</small></p>
</body>
</html>
