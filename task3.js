const students = ["Mikael", "Sarah", "Mikaya", "Budi", "Mamika", "murdiyanti", "yani", "muryanti"]

const isNameMatch = (nama, keyword) => {
  return nama.toLowerCase().includes(keyword.toLowerCase())
}


const searchStudent = (keyword, callback) => {
  const hasil = []

  for (let i = 0; i < students.length; i++) {
    if (isNameMatch(students[i], keyword)) {
      hasil.push(students[i])
    }
  }

  callback(hasil)
}

const showResults = (hasil) => {
  console.log("Nama ditemukan:");
  hasil.forEach((nama, i) => console.log(`${i + 1}. ${nama}`));
  console.log("Jumlah:", hasil.length)
}

searchStudent("a", showResults)
