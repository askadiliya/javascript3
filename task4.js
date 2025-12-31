const data =[
    {
        name : "Aska",
        wait : 5
    },
     {
        name : "Diliyan",
        wait : 10
    },
    {
        name : "Perkasa",
        wait : 15
    },
    {
        name : "Nuam",
        wait : 20
    },
    {
        name : "Pijar",
        wait : 25
    }
]

console.log("Antrian dimulai...");

for (let i = 0; i < data.length; i++) {
    setTimeout(() => {
        console.log(
            `Antrian ke-${i + 1}: ${data[i].name} dipanggil `
        );
    }, data[i].wait * 1000);
}