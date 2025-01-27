# Workshop #3

## Feladat: Adatfeldolgozás JavaScript programozáson keresztül

A feladat egy komplex adathalmaz feldolgozása JavaScript segítségével, ezek megjelenítése majd különböző számítások elvégzése.

A fájlok létrehozásakor a következő mappastruktúrát alkalmazza:

    root
    ├── index.html
    ├── app.js
    └── style.css (ha szükséges)

### Adatok betöltése

A legalul található adathalmazt (`developers.json`) töltse be az `app.js` legelején.

### Adatok feldolgozása

Dolgozza fel az entitásokat és jelenítse meg őket Bootstrap táblázat segítségével, ebben az oszlopsorrendben: image, name, email, job, age, salary.

- A kép oszlopba a kép töltsön be kb. 30x30px méretben, kör alakban.
- Az email egy mailto linkként jelenjen meg.
- A salary után pedig kerüljön oda, hogy HUF, valamint a fizetések skálázva legyenek sárga / zöld / piros badge-k segítségével, a következők szerint:
  - Ha a fizetés kevesebb mint 400.000 Ft, akkor piros legyen.
  - Ha a fizetés több mint 400.000 Ft, de kevesebb mint 700.000 Ft akkor sárga legyen.
  - Ha a fizetés több mint 700.000 Ft, akkor zöld legyen.

### Számítások

Különálló függvények segítségével adjon választ a következő kédésekre. A kapott válaszokat jelenítse is meg a HTML-ben. Használja a lentebbi HTML sablont. A kérdésekre adott válaszokat a megfelelő span elembe írja bele JS kódból.

- Q1: Mennyi az átlagéletkor?
- Q2: Mennyi az átlagfizetés a frontendesek között?
- Q3: Ki ért a legtöbb mindenhez?
- Q4: Melyik cégből dolgozik a legtöbb ember?
- Q5: Ki a legfiatalabb fejlesztő és mennyit keres ő?
- Q6: Mekkora a különbség fizetésben a legfiatalabb és legidősebb fejlesztő között?
- Q7: Munkakörönként csoportosítva mennyi az átlagfizetés?

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fullstack-Workshop-03</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="calculations">
        <p>
            Mennyi az átlagéletkor?
            <span id="Q1"></span>
        </p>
        <p>
            Mennyi az átlagfizetés a frontendesek között?
            <span id="Q2"></span>
        </p>
        <p>
            Ki ért a legtöbb mindenhez?
            <span id="Q3"></span>
        </p>
        <p>
            Melyik cégből dolgozik a legtöbb ember?
            <span id="Q4"></span>
        </p>
        <p>
            Ki a legfiatalabb fejlesztő és mennyit keres ő?
            <span id="Q5"></span>
        </p>
        <p>
            Mekkora a különbség fizetésben a legfiatalabb és legidősebb fejlesztő között?
            <span id="Q6"></span>
        </p>
        <p>
            Munkakörönként csoportosítva mennyi az átlagfizetés?
            <span id="Q7"></span>
        </p>
    </div>

    <div id="table-target"></div>
    
    <script src="app.js"></script>
</body>
</html>
```

### developers.json

```js
const developers = [
    {
        "id": "b8878c6c-eda2-35ee-f621-91f9b7af14dc",
        "name": "Kiss Lajos",
        "email": "KissLajos@webler.hu",
        "job": "Frontend Developer",
        "age": 35,
        "salary": 350000,
        "image": "https://randomuser.me/api/portraits/men/1.jpg",
        "skills": [
            "User Research",
            "Wireframing",
            "Prototyping",
            "Figma",
            "Sketch",
            "Interaction Design",
            "Visual Design"
        ]
    },
    {
        "id": "a49335ca-d76a-02d1-2a6c-fdab1a3f8c0a",
        "name": "Tony Stark",
        "email": "mrstark@starkindustries.com",
        "job": "Frontend Developer",
        "age": 23,
        "salary": 2500000,
        "image": "https://randomuser.me/api/portraits/men/2.jpg",
        "skills": [
            "JavaScript",
            "React",
            "CSS",
            "HTML",
            "Redux"
        ]
    },
    {
        "id": "d255b2e3-9fde-c833-1cda-fa9ee62e851c",
        "name": "John Doe",
        "email": "JohnDoe@greenwave.hu",
        "job": "Frontend Developer",
        "age": 35,
        "salary": 1556000,
        "image": "https://randomuser.me/api/portraits/men/3.jpg",
        "skills": [
            "HTML",
            "Vue.js",
            "CSS",
            "JavaScript"
        ]
    },
    {
        "id": "20ef4e13-94db-8a96-ca02-4f65a2a545d2",
        "name": "Robert Smith",
        "email": "RobertSmith@greenwave.hu",
        "job": "Fullstack Developer",
        "age": 40,
        "salary": 999000,
        "image": "https://randomuser.me/api/portraits/men/4.jpg",
        "skills": [
            "Node.js",
            "Express",
            "MongoDB",
            "React",
            "RESTful APIs"
        ]
    },
    {
        "id": "e31bc524-918f-a7dc-6b36-0be9c7181a11",
        "name": "James Alexander Mitchell",
        "email": "jam@alphatech.com",
        "job": "Backend Developer",
        "age": 30,
        "salary": 406000,
        "image": "https://randomuser.me/api/portraits/men/5.jpg",
        "skills": [
            "Python",
            "Django",
            "Flask",
            "RESTful APIs"
        ]
    },
    {
        "id": "fbdc476a-eedf-de7e-bac6-2563dd40b0ab",
        "name": "Rose Parker",
        "email": "RoseParker@alphatech.com",
        "job": "Frontend Developer",
        "age": 40,
        "salary": 250000,
        "image": "https://randomuser.me/api/portraits/women/6.jpg",
        "skills": [
            "JavaScript",
            "Angular",
            "HTML",
            "CSS"
        ]
    },
    {
        "id": "575bc89b-907f-3410-0fd2-cc119004b7ed",
        "name": "Sophia Grace",
        "email": "SophiaGrace@alphatech.com",
        "job": "Backend Developer",
        "age": 60,
        "salary": 345000,
        "image": "https://randomuser.me/api/portraits/women/7.jpg",
        "skills": [
            "Java",
            "Spring Boot",
            "SQL"
        ]
    },
    {
        "id": "b83254e1-8893-666a-1185-17cfab8d9a5c",
        "name": "Kovács András",
        "email": "KovacsAndras@alphatech.com",
        "job": "Architect",
        "age": 34,
        "salary": 1500000,
        "image": "https://randomuser.me/api/portraits/men/8.jpg",
        "skills": [
            "Angular",
            "TypeScript"
        ]
    },
    {
        "id": "c9878a6c-7ba3-45ee-f619-91f9a7ef23dc",
        "name": "Egres Kata",
        "email": "EgresKata@starsolutions.net",
        "job": "Data Scientist",
        "age": 28,
        "salary": 520000,
        "image": "https://randomuser.me/api/portraits/women/9.jpg",
        "skills": [
            "Python"
        ]
    },
    {
        "id": "d49337ca-d78a-12e1-3a5d-fdab2b3f9d2a",
        "name": "Nagy Péter",
        "email": "NagyPeter@starsolutions.net",
        "job": "DevOps Engineer",
        "age": 42,
        "salary": 620000,
        "image": "https://randomuser.me/api/portraits/men/10.jpg",
        "skills": [
            "Docker",
            "Kubernetes",
            "CI/CD"
        ]
    },
    {
        "id": "e255a2b3-9fde-d833-1dfa-fa9fe62e85fc",
        "name": "Linda Parker",
        "email": "LindaParker@starsolutions.net",
        "job": "Project Manager",
        "age": 37,
        "salary": 460000,
        "image": "https://randomuser.me/api/portraits/women/11.jpg",
        "skills": [
            "Agile Methodologies",
            "Scrum",
            "JIRA"
        ]
    },
    {
        "id": "f0ef5e14-93db-7c96-da32-4e65b2a655d2",
        "name": "Thomas Evans",
        "email": "ThomasEvans@starsolutions.net",
        "job": "Machine Learning Engineer",
        "age": 31,
        "salary": 730000,
        "image": "https://randomuser.me/api/portraits/men/12.jpg",
        "skills": [
            "Python"
        ]
    },
    {
        "id": "g41bc623-818f-b8dc-5b26-0af8c5184a12",
        "name": "Anna Scott",
        "email": "AnnaScott@starsolutions.net",
        "job": "Security Analyst",
        "age": 29,
        "salary": 395000,
        "image": "https://randomuser.me/api/portraits/women/13.jpg",
        "skills": [
            "Network Security"
        ]
    },
    {
        "id": "h3dc376b-f8df-ce7e-ba76-2574dd30b0ab",
        "name": "Emily White",
        "email": "EmilyWhite@starsolutions.net",
        "job": "Software Tester",
        "age": 34,
        "salary": 410000,
        "image": "https://randomuser.me/api/portraits/women/14.jpg",
        "skills": [
            "Automated Testing",
            "Selenium",
            "Manual Testing"
        ]
    },
    {
        "id": "i28bc12d-5c93-1b56-3d91-754fe2d8a2b1",
        "name": "Márton István",
        "email": "MartonIstvan@techsphere.net",
        "job": "Cloud Solutions Architect",
        "age": 45,
        "salary": 750000,
        "image": "https://randomuser.me/api/portraits/men/15.jpg",
        "skills": [
            "AWS",
            "Azure",
            "GCP"
        ]
    },
    {
        "id": "j7f32f1b-4d7a-8b94-8e41-dc93e76b4c71",
        "name": "Balázs Zoltán",
        "email": "BalazsZoltan@techsphere.net",
        "job": "Data Scientist",
        "age": 39,
        "salary": 680000,
        "image": "https://randomuser.me/api/portraits/men/16.jpg",
        "skills": [
            "SQL",
            "Database Optimization"
        ]
    },
    {
        "id": "k8fc3d2a-6e39-4d9f-9b11-579fbb64b701",
        "name": "Bartos Gábor",
        "email": "BartosGabor@techsphere.net",
        "job": "Security Analyst",
        "age": 33,
        "salary": 400000,
        "image": "https://randomuser.me/api/portraits/men/17.jpg",
        "skills": [
            "Business Analysis",
            "Data Analysis"
        ]
    }
]
```
