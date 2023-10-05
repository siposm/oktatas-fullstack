const students = [
    {
        name: 'John Doe',
        age: 45,
        subjects: [
            { credit: 5, name: 'Fullstack development' },
            { credit: 2, name: 'Frontend development' },
            { credit: 8, name: 'Linear algebra' }
        ]
    },
    {
        name: 'Steve Jobs',
        age: 21,
        subjects: [
            { credit: 5, name: 'Fullstack development' },
            { credit: 2, name: 'Frontend development' },
            { credit: 8, name: 'Linear algebra' }
        ]
    },
    {
        name: 'Ran Dom',
        age: 22,
        subjects: [
            { credit: 5, name: 'Maths' },
            { credit: 5, name: 'Java programming' },
            { credit: 2, name: 'PE' },
            { credit: 4, name: 'C# programming' },
            { credit: 8, name: 'Linear algebra' }
        ]
    },
]

console.log(students)

let max = mostSubjectNumber()
mostCreditValue(max)

function mostSubjectNumber() {
    let max = 0
    for (let i = 1; i < students.length; i++) {
        if(students[max].subjects.length < students[i].subjects.length)
            max = i
    }
    console.log('MAX subject number: ' + students[max].name)
    return max
}

function mostCreditValue(max) {
    let sum = 0
    students[max].subjects.forEach(element => {
        sum += element.credit
    })
    console.log('credit: ' + sum)
}

let youngest = students.reduce((x,y) => {
    if (x.age > y.age) {
        return y
    }
    else return x
})

console.log('youngest: ' + youngest.name)

students[0].subjects.push({ credit: 40, name: '1_NEW_SUBJ_' })
students[0].subjects.push({ credit: 50, name: '2_NEW_SUBJ_' })
students[0].subjects.push({ credit: 60, name: '3_NEW_SUBJ_' })

console.log(students[0])

// students[2].subjects.splice(1,1)
let indexof = students[2].subjects.map(m => m.name).indexOf('PE')
students[2].subjects.splice(indexof , 1)

console.log(students[2])

console.log(students[2].subjects.map(m => m.name))