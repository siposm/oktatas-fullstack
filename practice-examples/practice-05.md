# Feladat #5

## Feladat: REST API készítése

Készítse el a 4. feladathoz tartozó backend oldalt és a szükséges API-kat. Alkalmazzon megfelelő rétegzést.

### Modell létrehozása

Hozza létre a szükséges `Developer` modellt, ami illeszkedik a korábbi feladatban használtakhoz. A tulajdonságok tetszőleges bővíthetők vagy módosíthatók.

```json
{
    "id": "b8878c6c-eda2-35ee-f621-91f9b7af14dc",
    "name": "Kiss Lajos",
    "email": "KissLajos@nikuni.hu",
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
}
```

### CRUD műveletek

Készítse el az alapvető CRUD műveletekhez tartozó API végpontokat.

| Művelet | CRUD | Leírás                                   | Végpont neve              |
|--------|------|-------------------------------------------|---------------------------|
| Create | C    | Új developer létrehozása                  | ``createDeveloper``       |
| Read   | R    | Összes developer lekérdezése              | ``getAllDevelopers``      |
| Read   | R    | Egy developer lekérdezése azonosító alapján | ``getDeveloperById``      |
| Update | U    | Meglévő developer frissítése              | ``updateDeveloper``       |
| Delete | D    | Meglévő developer törlése                 | ``deleteDeveloper``       |

### API-k bevezetése

Miután a végpontok elkészültek, a frontend kódot refaktorálja annak megfelelően, hogy API kérés alapján történjen minden korábbi művelet.

### Bővítés

A feladat bővíthető olyan tekintetben, hogy legyen lehetőség skilleket is létrehozni, ezekhez szintén tartozzon CRUD művelet, valamint a frontend oldalról új fejlesztő létrehozásakor a skilleket pl. egy legördülő listából lehessen kiválasztani (select multiple opciót beállítva, több is kiválasztható), vagy akár checkbox-os elvvel is megoldható.

Hozzon létre backend oldalon "non-crud" műveleteket, pl. különböző statisztikai számításokat (pl. határozza meg a fejlesztők keresetét korcsoportok alapján (30 alatt, 30-40 között, 40-50 között, 50 felett)), amik szintén legyenek lekérdezhetők API-n keresztül. A frontend oldal ezeket jelenítse meg.
