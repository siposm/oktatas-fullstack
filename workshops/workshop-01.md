# Workshop #1

## Feladat: Statikus, több aloldalból álló HTML weboldal létrehozása

Hozza létre az alábbi oldalakat a leírásoknak és kikötéseknek megfelelően. Egyelőre csak HTML-t használjon, CSS és JS ne kerüljön a kódba. A feladat egy fiktív magánegyetem weboldalának létrehozása.

A fájlok létrehozásakor a következő mappastruktúrát alkalmazza:

    root
    ├── index.html
    ├── pages
    │   ├── services.html
    │   ├── subjects.html
    │   ├── students.html
    │   ├── merch.html
    │   ├── contact.html
    │   └── problem.html
    └── subjects
        ├── bevezetes-a-programozasba.html
        ├── adatbazis-kezeles-alapjai.html
        ├── operacios-rendszerek.html
        ├── fullstack-fejlesztes.html
        └── mesterseges-intelligencia-alapjai.html

### Főoldal

Hozza létre az index.html állományt amely a főoldalt fogja képviselni.

#### Navigációs rész

Hozzon létre egy navigálásra szolgáló részt, ahol a következő linkek szerepeljenek:

- Főoldal (`index.html`)
- Szolgáltatások (`services.html`)
- Tárgyak (`subjects.html`)
- Hallgatók (`students.html`)
- Merch-shop (`merch.html`)
- Kapcsolat (`contact.html`)
- Probléma bejelentés (`problem.html`)

#### Tartalmi rész

A főoldal tartalmi része a 2. workshop alkalomhoz tartozik.

### Szolgáltatások

Az aloldal célja, hogy megjelenítse, hogy milyen szolgáltatásokkal rendelkezik az egyetem. Ezeket táblázatos formában jelenítse meg. Szolgáltatás lehet például valamilyen képzés elvégzése (Mérnökinformatika, Fullstack fejlesztő képzés stb.), amelyek pénzért megvásárolhatók. Szintén szolgáltatásnak minősül mondjuk Szakdolgozat témavezetése, lektorálása. Egy minta gyűjtemény alább található, de tetszőleges elemekkel ki lehet bővíteni ezeket.

| ID  | Név                           | Ár (HUF) | Leírás                                                                 |
|-----|-------------------------------|----------|------------------------------------------------------------------------|
| 1   | Mérnökinformatikai Alapképzés | 450000   | Átfogó alapozó képzés az informatikai mérnöki szakma alapjairól.        |
| 2   | Fullstack Fejlesztő Tanfolyam | 600000   | Modern webfejlesztési technológiák és eszközök elsajátítása frontend és backend területeken. |
| 3   | Szakdolgozat Témavezetés      | 50000    | Egyéni konzultáció és iránymutatás szakdolgozat készítéséhez.           |
| 4   | Szakdolgozat Lektorálás       | 30000    | Teljes szakdolgozat nyelvi és formai ellenőrzése.                       |
| 5   | Adatbázis-tervezési Workshop  | 120000   | Intenzív képzés az adatmodellezés és adatbázis-kezelő rendszerek tervezéséhez. |
| 6   | Üzleti Kommunikációs Tréning  | 80000    | Kommunikációs készségek fejlesztése szakmai prezentációkhoz és üzleti környezethez. |
| 7   | Cyberbiztonsági Alapozó Tanfolyam | 150000 | Az IT-rendszerek alapvető védelmi eljárásainak és fenyegetéskezelési technikáinak bemutatása. |
| 8   | Gépitanulás Bevezető Képzés   | 180000   | Az alapvető gépi tanulási modellek és algoritmusok bemutatása.          |
| 9   | Webdesign Alapok Tanfolyam    | 100000   | Alapvető webdesign technikák és esztétikai tervezés elsajátítása.       |
| 10  | IT Karriertámogatás Konzultáció | 25000   | Egyéni tanácsadás a sikeres karriertervezéshez az IT szektorban.         |

### Tárgyak

Az aloldal célja, hogy megjelenítse, hogy milyen tárgyak tanulhatók az egyetemen. Az alábbi elrendezést valósítsa meg, azzal a kiegészítéssel, hogy a tárgyak nevei legyenek linkek, amelyek tovább visznek egy-egy külön oldalra, amely a tárgy részleteit írja le.

| Tantárgy neve                         | Kredit |
|---------------------------------------|--------|
| Bevezetés a programozásba             | 6      |
| Adatbázis-kezelés alapjai             | 5      |
| Operációs rendszerek                  | 4      |
| Fullstack fejlesztés                  | 5      |
| Mesterséges intelligencia alapjai     | 4      |

Az egyes tárgyakhoz tartozó aloldalakat szintén hozza létre a fentebb ismertetett mappaszerkezetnek megfelelően. Ezekbe a tárggyal kapcsolatos adatokat vigye fel, valamilyen tetszőleges módon. Például minden oldalon h1 címsorral szerepeljen a tárgy neve, alatta h3 címsorral a kreditérték, majd egy horizontális vonalat követően jelenjen meg egy hosszan generált lorem ipsum szöveg, amelyet későbbiekben majd ki tudunk cserélni ha szeretnénk.

### Hallgatók

Az aloldal célja, hogy megjelenítse, hogy kik azok a hallgatók akik az egyetemen tanulnak. Az alábbi elrendezést valósítsa meg.

| Hallgató neve          | Aktív félévek száma | Átlag |
|-------------------------|---------------------|-------|
| Kovács Péter           | 4                   | 4.2   |
| Szabó Anna             | 6                   | 4.8   |
| Tóth Gergely           | 3                   | 3.9   |
| Nagy Eszter            | 5                   | 4.5   |
| Farkas Dániel          | 2                   | 3.7   |

### Merch-shop

Az aloldal célja, hogy az egyetem logójával fémjelzett termékeket a hallgatók vagy külsős személyek meg tudják vásárolni. Google képkeresést követően helyezzen el pár repi-tárgyat ábrázoló képet (pl. bögre, pulcsi stb.). Minden kép szélessége 200px legyen.

A képek mellett legyen egy input mező, ahova számot lehet beírni (hány darabot szeretnénk adott termékből kosárba rakni), valamint legyen egy-egy gomb is minden termék mellett "Kosárba" címszóval.

### Kapcsolat

Az aloldal célja, hogy kapcsolatba tudnak lépni az egyetemmel. Ehhez hozzon létre egy űrlapmezőkből álló formot, valamint helyezzen el egy Google Maps térképet beágyazva iframe segítségével.

A formon a következőket kell kitölteni:

- teljes név (rövid szöveges beviteli mező)
- email cím (email beviteli mező)
- hallgató / oktató / külsős személy vagyok (ezt radio gombok segítségével kell kiválasztani)
- üzenet tárgya (rövid szöveges beviteli mező)
- üzenet szövege (hosszú szöveges beviteli mező)
- elküldő gomb

A megfelelő helyeken használjon a felhasználókat segítő placeholder-eket.

### Probléma bejelentés

Az aloldal célja, problémát lehessen bejelenteni az egyetem felé. Ezt az alábbi formon keresztül lehet megtenni.

A formon a következőket kell kitölteni:

- email cím (email beviteli mező)
- kérek értesítést (radio gomb)
- bejelentés típusa (legördülő lista)
  - opció 1: általános bejelentés
  - opció 2: pozitív véleményt kívánok tenni
  - opció 3: panaszt kívánok tenni
- üzenet tárgya (rövid szöveges beviteli mező)
- üzenet szövege (hosszú szöveges beviteli mező)
- elküldő gomb

A megfelelő helyeken használjon a felhasználókat segítő placeholder-eket.
