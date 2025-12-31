// fetch dengan async-await
const url = "https://jsonplaceholder.typicode.com/users";
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  const emails = data.map((user) => user.email.toLowerCase());
  console.log(`fetch dengan async-await ${emails}`);
}
getData();

// fetch dengan then-catch
fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error("Gagal mengambil data");
    }
    return res.json();
  })
  .then((data) => {
    const emailList = data.map((user) => user.email.toLowerCase());
    console.log(`fetch dengan then-catch ${emailList}`);
  })
  .catch((err) => {
    console.error("Terjadi error:", err.message);
  });


// tolowerCase manual
const chars = {
  A: "a", B: "b", C: "c", D: "d", E: "e", F: "f", G: "g",
  H: "h", I: "i", J: "j", K: "k", L: "l", M: "m",
  N: "n", O: "o", P: "p", Q: "q", R: "r", S: "s",
  T: "t", U: "u", V: "v", W: "w", X: "x", Y: "y", Z: "z"
};


function toLowerManual(text) {
  let converted = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (chars[char]) {
      converted += chars[char];
    } else {
      converted += char;
    }
  }

  return converted;
}


fetch(url)
  .then(res => {
    if (!res.ok) {
        throw new Error("Gagal mengambil data");
    }
    return res.json();
  })
  .then(data => {
    const emailList = [];

    for (let i = 0; i < data.length; i++) {
      const email = data[i].email;
      emailList.push(toLowerManual(email));
    }

    console.log(emailList);
  })
  .catch(err => {
    throw new Error("Gagal mengambil data");
  });
