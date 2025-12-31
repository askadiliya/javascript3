const url = "https://jsonplaceholder.typicode.com/users"

async function getData(){
    const res = await fetch(url)
    const data = await res.json()
    const emails = data.map(user => user.email.toLowerCase())
    console.log(emails)
}
getData()