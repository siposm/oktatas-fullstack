let developers = []

async function downloadAndDisplay() {
    const response = await fetch('http://localhost:5112/developer')
    const devs = await response.json()
    console.log(devs)

    document.querySelector('#devs').innerHTML = ''
    developers = []

    devs.map(x => {
        developers.push(x)

        let tr = document.createElement('tr')
        let tdID = document.createElement('td')
        let tdName = document.createElement('td')
        let tdJob = document.createElement('td')
        let tdSalary = document.createElement('td')
        let tdIsActive = document.createElement('td')
        let tdActions = document.createElement('td')

        tdID.innerHTML =  x.id
        tdName.innerHTML = x.name
        tdJob.innerHTML = x.job
        tdSalary.innerHTML = x.salary
        tdIsActive.innerHTML = x.isActive == true ? '&check;' : '×'
        
        tr.appendChild(tdID)
        tr.appendChild(tdName)
        tr.appendChild(tdJob)
        tr.appendChild(tdSalary)
        tr.appendChild(tdIsActive)
        tr.appendChild(tdActions)

        let btnUpdate = document.createElement('button')
        btnUpdate.classList.add('btn')
        btnUpdate.classList.add('btn-sm')
        btnUpdate.classList.add('btn-warning')
        btnUpdate.classList.add('mx-2')
        btnUpdate.innerHTML = 'Update'
        btnUpdate.idParameter = x.id
        btnUpdate.addEventListener('click', updateLog)
        tdActions.appendChild(btnUpdate)

        let btnDel = document.createElement('button')
        btnDel.classList.add('btn')
        btnDel.classList.add('btn-sm')
        btnDel.classList.add('btn-danger')
        btnDel.classList.add('mx-2')
        btnDel.innerHTML = 'Delete'
        btnDel.idParameter = x.id
        btnDel.addEventListener('click', deleteLog)
        tdActions.appendChild(btnDel)

        document.querySelector('#devs').appendChild(tr)
    })
}

function updateLog(event) {
    console.log(event.target.idParameter)

    let toUpdate = developers.find(x => x.id === event.target.idParameter)
    
    document.querySelector('#dev-id').value = toUpdate.id
    document.querySelector('#dev-name').value = toUpdate.name
    document.querySelector('#dev-salary').value = toUpdate.salary
    document.querySelector('#dev-job').value = toUpdate.job
    document.querySelector('#dev-isActive').value = toUpdate.isActive
}

function deleteLog(event) {
    console.log(event.target.idParameter)

    fetch('http://localhost:5112/developer/' + event.target.idParameter, {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json', },
        body: null
    })
    .then(resp => {
        console.log('Response: ', resp)
        if (resp.status === 200) {
            downloadAndDisplay()
        }
    })
}

function reset() {
    document.querySelector('#dev-id').value = ''
    document.querySelector('#dev-name').value = ''
    document.querySelector('#dev-salary').value = ''
    document.querySelector('#dev-job').value = ''
    document.querySelector('#dev-isActive').value = ''
}

function addTemp() {
    document.querySelector('#create-dev-name').value = 'Test Person Name'
    document.querySelector('#create-dev-salary').value = 123456
    document.querySelector('#create-dev-job').value = 100
    document.querySelector('#create-dev-isActive').value = true
}


function createDeveloper() {
    let devname = document.querySelector('#create-dev-name').value
    let devsalary = document.querySelector('#create-dev-salary').value
    let devjob = document.querySelector('#create-dev-job').value
    let devisActive = document.querySelector('#create-dev-isActive').value
    
    fetch('http://localhost:5112/developer/', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', },
        body: JSON.stringify({
            name: devname,
            salary: Number(devsalary),
            job: Number(devjob),
            isActive: devisActive === 'true' ? true : false
        })
    })
    .then(resp => {
        console.log('Response: ', resp)
        if (resp.status === 200) {
            downloadAndDisplay()
        }
    })
    .catch(error => console.log(error))
}

function updateDeveloper() {
    let devid = document.querySelector('#dev-id').value
    let devname = document.querySelector('#dev-name').value
    let devsal = document.querySelector('#dev-salary').value
    let devjob = document.querySelector('#dev-job').value
    let devIsActive = document.querySelector('#dev-isActive').value

    let options = {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json', },
        body: JSON.stringify({
            id: devid,
            name: devname,
            salary: Number(devsal),
            job: Number(devjob),
            isActive: devIsActive === 'true' ? true : false
        })
    }

    fetch('http://localhost:5112/developer', options)
    .then(resp => {
        console.log('Response: ', resp)
        if (resp.status === 200) {
            downloadAndDisplay()
        }
    })
    .catch(error => console.log(error))
}


downloadAndDisplay()