let person = [
  { nama: "", wait: "" },
  { nama: "y", wait: 4 },
  { nama: "z", wait: 3 },
  { nama: "a", wait: 2 },
  { nama: "b", wait: 9 },
];

function queue(data) {
  let index = 0;

  function start() {
    return new Promise((resolve, reject) => {
      const current = data[index];

      // jika data habis
      if (!current) {
        return resolve("Semua antrian selesai");
      }

      // ❗ validasi nama
      if (!current.nama || current.nama.trim() === "") {
        return reject(`nama tidak boleh kosong (index ${index})`);
      }

      // ❗ validasi wait
      if (!current.wait || isNaN(current.wait)) {
        return reject(`wait tidak valid (index ${index})`);
      }

      console.log("Menunggu antrian...");

      setTimeout(() => {
        console.log(`pesanan ${current.nama} sudah siap`);
        index++;
        resolve(start()); // lanjut ke antrian berikutnya
      }, Number(current.wait) * 1000);
    });
  }

  return start();
}

queue(person)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
