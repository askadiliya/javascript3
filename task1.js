let letters = ["a", "b", "c"];
let word = "Koda";

let result = "";

for (let i = 0; i < letters.length; i++) {
  result += letters[i];
}


for (let i = 0; i < word.length; i++) {
  result += word[i];
}

console.log(result);


// join() untuk menggabungkan elemen-elemen array menjadi satu string
let alphabet = ["a", "b", "c"];
let keyword = "Koda";

for (let i = 0; i < keyword.length; i++) {
  alphabet.push(keyword[i]);
}

let hasil = alphabet.join("");
console.log(hasil);

