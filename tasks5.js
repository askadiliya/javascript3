const data = [
  { name: "Aska", wait: 5 },
  { name: "Diliyan", wait: 4 },
  { name: "Perkasa", wait: 3 },
  { name: "Nuam", wait: 2 },
  { name: "Pijar", wait: 1 },
];

console.log("Antrian dimulai...");

function antrian(item, index) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Antrian ke-${index + 1}: ${item.name} dipanggil`);
      resolve();
    }, item.wait * 1000);
  });
}


data.reduce((promiseSebelumnya, item, index) => {
  return promiseSebelumnya.then(() => {
    return antrian(item, index);
  });
}, Promise.resolve())
.then(() => {
  console.log("Semua antrian selesai");
})

