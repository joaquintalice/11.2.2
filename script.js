document.addEventListener('DOMContentLoaded', main);

const form = document.getElementById('form-with-post');
// console.log(form)

function main() {
    getUsers()
}

const formData = form.addEventListener('submit', () => {
    console.log(formData)
})

console.log(formData)

const URL = 'https://jsonplaceholder.typicode.com/users';
const params = {
    method: 'POST',
    body: formData
}

console.log(params.body)

async function getUsers() {

    const response = await fetch(URL)

    // console.log(response)

    const data = await response.json();

    // console.log(data)

    return data
}

async function insertUser(dataToInsert) {

    const response = await fetch(URL, params);
    console.log(response)
    const data = await response.json()
    console.log(data)


}