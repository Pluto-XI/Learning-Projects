

async function getPerson(input) {
    try {
    const person = await axios.get(`https://swapi.dev/api/people/${input}/`)
    console.log(person);
    return person.data.name;
    } catch (e) {
        return 'No person :(';
    }
}

const button = document.querySelector('button');
const list = document.querySelector('#list');
let select = document.querySelector("#person"); 

async function printPerson() {
    const data = await getPerson(person);
    const text = document.createElement('li');
    text.append(data);
    list.append(text);
}

let person = 1;

button.addEventListener('click', printPerson);
select.addEventListener('change', () => {
    person = parseInt(select.value);
})
