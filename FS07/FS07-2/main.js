let todos = [
    // { content: 'buy milk', priority: 3 },
    // { content: 'go out', priority: 10 },
    // { content: 'train', priority: 6 },
]

// seed
// todos.forEach(element => {
//     let p = document.createElement('p')
//     p.innerHTML = element.content + " (" + element.priority + ")"
//     p.addEventListener('click', markCompleted)
//     let collection = document.querySelector('#todos')
//     collection.appendChild(p)
// })

function load() {
    let temp = JSON.parse(localStorage.getItem('todos')) // deserialization
    temp.forEach(element => {
        let p = document.createElement('p')
        p.innerHTML = element.content + " (" + element.priority + ")"
        p.addEventListener('click', markCompleted)
        let collection = document.querySelector('#todos')
        collection.appendChild(p)
        todos.push({ content: element.content, priority: element.priority })
    })
}

function save() {
    localStorage.setItem('todos', JSON.stringify(todos)) // serialization
    console.log(localStorage)
}




function markCompleted(e) {
    let x = e.target
    x.classList.toggle('completed')
}

function addTodo() {
    // create element by value
    let content = document.querySelector('#todo-content').value
    let priority = document.querySelector('#todo-priority').value
    let p = document.createElement('p')
    p.innerHTML = content + " ("+priority+")"

    // add event listener
    p.addEventListener('click', markCompleted)
    
    // add to parent
    let collection = document.querySelector('#todos')
    collection.appendChild(p)
    
    // reset
    document.querySelector('#todo-content').value = ''
    document.querySelector('#todo-priority').value = ''

    // add to array
    todos.push({ content: content, priority: priority })
}