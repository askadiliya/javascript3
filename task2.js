// 1. concat() untuk menggabungkan 2 array ataulebih, concat() tidak merubah nilai array tapi mngembalikan array baru
// contoh

const novel = ["putri iklan","putri duyung", "hitam putih"]
const majalah = ["Nuansa", "bobo"]
const komik = ["naruto", "doraemon"]
const buku = novel.concat(majalah,komik)
console.log(buku)

// 2. push() - Menambahkan data ke akhir array dan mengembalikan panjang array baru
// contoh
let buah = ["apel", "pisang"];
buah.push("mangga");
console.log(buah);

// 3. pop() menghapus element terakhir pada array. merubah panjang array
// contoh
let brand = ["apel", "pisang", "mangga"];
brand.pop();
console.log(brand);

// contoh
let riwayat = ["Home", "Produk", "Detail", "Checkout"];
if (riwayat.length > 3) {
  riwayat.pop();
}
console.log(riwayat);

// 4. shift() Menghapus data pertama array. Merubah panjang array
// contoh
let antrian = ["Andi", "Budi", "Cici"];
let dilayani = antrian.shift();

console.log("Dilayani:", dilayani);
console.log("Sisa antrian:", antrian);

// 5. unshift() Menambahkan data ke awal array dan menghasilkan panjang array baru
// contoh

let notifikasi = ["Pesan lama", "Pesan sebelumnya"];
notifikasi.unshift("Pesan baru");
console.log(notifikasi);

// 6. map()  Mengolah data array menjadi array baru
// contoh
let users = [
  { nama: "Andi", umur: 20 },
  { nama: "Budi", umur: 22 }
];
let daftarNama = users.map(user => user.nama);
console.log(daftarNama);


// 7. forEach()mengeksekusi fungsi yang disediakan sekali untuk setiap elemen array.
// contoh
let angka = [10, 20, 30, 40];
let total = 0;

angka.forEach(function(item) {
  total += item;
});

console.log("Total:", total);
// 8. filter() untuk menyaring data dan menghasilkan array baru berdasarkan kondisi tertentu
//contoh

let mahasiswa = [
  { nama: "Ani", nilai: 80 },
  { nama: "Budi", nilai: 60 },
  { nama: "Cici", nilai: 90 }
];

let lulus = mahasiswa.filter(item => item.nilai >= 75);
console.log(lulus);

// 9. includes() berguna mengecek apakah suatu nilai ada di dalam data. menghasilkan output true atau false
let kalimat = "Saya belajar JavaScript";
console.log(kalimat.includes("Java"));
console.log(kalimat.includes("Python"));

// 10. slice() digunakan untuk mengambil sebagian data dari array atau string dan menghasilkan data baru tanpa mengubah data asli.
let number = [5, 10, 15, 20, 25];
let tigaPertama = number.slice(0, 3);
console.log(tigaPertama);


