const form = document.getElementById('form-with-post');

form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
    e.preventDefault()
    const firstName = document.getElementById('nombre');
    const lastName = document.getElementById('apellido');
    const date = document.getElementById('fecha-nacimiento');

    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        date: date.value
    }

    const URL = 'https://jsonplaceholder.typicode.com/users';
    const params = {
        method: 'POST',
        body: JSON.stringify(user)
    }

    const response = await fetch(URL, params);

    if (!response.ok) throw new Error(`Status code: ${response.status}`);

    const data = await response.json();

    const newUser = {
        ...data,
        ...user
    }

    console.log(newUser)
    console.log('Data cargada al servidor exitosamente')
}



