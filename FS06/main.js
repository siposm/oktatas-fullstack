const students = [
    {
        name: 'John Doe',
        age: 45,
        vipStatus: true,
        subjects: [
            { credit: 5, name: 'Fullstack development' },
            { credit: 2, name: 'Frontend development' },
            { credit: 8, name: 'Linear algebra' }
        ]
    },
    {
        name: 'Steve Jobs',
        age: 21,
        vipStatus: false,
        subjects: [
            { credit: 5, name: 'Fullstack development' },
            { credit: 2, name: 'Frontend development' },
            { credit: 8, name: 'Linear algebra' }
        ]
    },
    {
        name: 'Ran Dom',
        age: 22,
        vipStatus: true,
        subjects: [
            { credit: 5, name: 'Maths' },
            { credit: 5, name: 'Java programming' },
            { credit: 2, name: 'PE' },
            { credit: 4, name: 'C# programming' },
            { credit: 8, name: 'Linear algebra' }
        ]
    },
]

let ul = document.createElement('ul')

for (let i = 0; i < students.length; i++) {
    
    let li = document.createElement('li')
    li.innerHTML = students[i].name + ' - ' + students[i].age
    ul.appendChild(li)

    let ol = document.createElement('ol')
    students[i].subjects.forEach(sub => {
        let li2 = document.createElement('li')
        li2.innerHTML = sub.name + ' - ' + sub.credit
        ol.appendChild(li2)
    })
    li.appendChild(ol)
}

document.querySelector('.div1').appendChild(ul)


// *********************


// students.map(s => s.name).forEach(studName => {
students.forEach(stud => {
    let p = document.createElement('p')//.innerHTML = "ALMA" <-- NEM MEGY egybevonva
    p.innerHTML = stud.name
    
    if(stud.vipStatus) {
        p.classList.add('vip-student')
        p.innerHTML += '*'
    }

    document.querySelector('.div2').appendChild(p)
})


removeDuplicates(students.map(s => s.subjects).flat()).forEach(subject => {
    let p = document.createElement('p')
    p.classList.add('marked-subject')
    p.innerHTML = subject
    document.querySelector('.div3').appendChild(p)
})

function removeDuplicates(arr) { 
    return [...new Set(arr.map(s => s.name))]
} 



// *********************



console.log(document.querySelector('.div3').childNodes[2]);


document.querySelector('.div3')
    .childNodes[2]
    .classList.remove('marked-subject')

document.querySelector('.div3')
    .childNodes[4]
    .classList.remove('marked-subject')