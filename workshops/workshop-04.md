# Workshop #4

| Full-Stack fejlesztés | |
|-----|---|
| Témakörök: | JS |
| Cím: | JavaScript CRUD alkalmazás készítése |

## Feladat

A feladat a workshop 03-as feladat folytatása, teljeskörű CRUD alkalmazássá fejlesztése localStorage tárolással.

A fájlok létrehozásakor a következő mappastruktúrát alkalmazza:

    root
    ├── index.html
    ├── app.js
    └── style.css (ha szükséges)

### CRUD

#### Létrehozás (Create)

Új elem létrehozásához a táblázat feletti részen hozzon létre pár inputmezőt (annyit és olyat, amilyen tulajdonságai vannak egy objektumnak) és egy gombot. A gombra kattintva az inputmezők értékét olvassa ki és ez alapján hozza létre az új objektumot. Ezt követően tárolja el a tömbben és frissítse a táblázatot.

#### Olvasás (Read)

Az előző alkalommal ez már elkészült.

#### Frissítés (Update)

Meglévő elem frissítéséhez több megoldás is használható. Egy lehetséges megoldás, a táblázatban egy új oszlop létrehozása, majd egy "EDIT" gomb elhelyezése minden sorban. A gombra kattintva egy függvény meghívódik, ami **eseményparaméteren** keresztül megkapja, hogy melyik elemről van szó (tipikusan ID alapján, de kivitelezéstől függően teljes objektum is átadható), megkeresi a tömbben, majd ennek a tulajdonságait betölti az inputmezőkbe.

Ilyenkor érdemes egy új gombot csinálni az előző feladat "létrehozási gombja" mellett, hogy ketté lehessen választani az új elem létrehozását és a meglévő elem módosítását, mint funkciókat. Módosítások mentése esetén a tömbben frissítse az elemet és ennek megfelelően a táblázatot is.

#### Törlés (Delete)

A frissítéshez hasonlóan egy "DELETE" gombot helyezzen el a sorok végén és egy hozzá tartozó függvényt. Törlés esetén törölje a tömbből a kiválasztott elemet és frissítse a táblázatot.

### Tárolás

Valósítson meg localStorage-alapú tárolást. Ez történhet külön betöltés / mentés gombok segítségével is, történhet automatikusan minden CRUD műveletvégzés előtt / után, de történhet oldalbetöltéshez kötődően is ([onload esemény](https://www.w3schools.com/jsreF/event_onload.asp)).
