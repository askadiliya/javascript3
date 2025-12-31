const data =[
    {
        name : "Aska",
        wait : 5
    },
     {
        name : "Diliyan",
        wait : 4
    },
    {
        name : "Perkasa",
        wait : 3
    },
    {
        name : "Nuam",
        wait : 2
    },
    {
        name : "Pijar",
        wait : 1
    }
]

console.log("Antrian dimulai...");

let totalDelay = 0;

for (let i = 0; i < data.length; i++) {
    totalDelay += data[i].wait * 1000;

    setTimeout(() => {
        console.log(`Antrian ke-${i + 1}: ${data[i].name} dipanggil`);
    }, totalDelay);
}