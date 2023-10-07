// Hozzunk létre input mezőket, ahova felhasználói adatokat lehet beírni (név, életkor, iskola neve) és egy gombra kattintva, kiíródik egy üdvözlő üzenet a konzolra. Használjunk ehhez click eseményt és eseménykezelő függvényt.

function hello() {
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let school = document.querySelector('#school').value

    console.log(name, age, school)

    let x = document.querySelector('#output')
    let p = document.createElement('p')
    p.innerHTML = "Hello dear " + name + "!"
    x.appendChild(p)

    // reset back to empty
    document.querySelector('#name').value = ''
    document.querySelector('#age').value = ''
    document.querySelector('#school').value = ''
}

// Használjuk az eseményobjektumot annak felderítésére, hogy milyen elemen klikkeltünk.

function markCompleted(e) {
    let x = e.target
    x.classList.toggle('completed')
}

function addTodo() {
    // create element by value
    let content = document.querySelector('#todo-content').value
    let p = document.createElement('p')
    p.innerHTML = content
    let collection = document.querySelector('#todos')
    
    // add event listener
    p.addEventListener('click', markCompleted)
    
    // add to parent
    collection.appendChild(p)
    
    // reset
    document.querySelector('#todo-content').value = ''
}