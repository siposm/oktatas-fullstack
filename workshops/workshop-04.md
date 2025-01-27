# Workshop #4

## Feladat: JavaScript CRUD alkalmazás készítése

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

Az előző alkalommal ez már elkészült, ez volt a tömbfeldolgozás és megjelenítés.

#### Frissítés (Update)

Meglévő elem frissítéséhez több megoldás is használható. Egy lehetséges megoldás, a táblázatban egy új oszlop létrehozása, majd egy "EDIT" gomb elhelyezése minden sorban. A gombra kattintva egy függvény meghívódik, aminek hatására a kiválasztott elem (akinek a sorában a kattintás történt) tulajdonságai betöltenek az inputmezőkbe, ahol aztán azok módosíthatók és menthetők.

A kattintás utáni kiválasztott elem azonosítása több féle módon is megvalósítható!

- Egy lehetséges megvalósítás, hogy a függvény eseményparaméteren keresztül megkapja, hogy melyik elemről van szó (tipikusan ID alapján, de kivitelezéstől függően teljes objektum is átadható).
- Egy másik megoldás szerint, helyben kifejtett névtelen függvénnyel még paramétert sem kell átadni.
- Az is megfelelő megoldás, ha a kattintás forrását (event.target) alapulvéve, a HTML node-okban lépkedve megkeressük a hozzá tartozó elemet, ilyenkor viszont csak név alapján lehet azonosítani az elemet, ami nem ideális. Ezt feloldandó a táblázat generálásakor az ID-t valahogy el kell tárolni, akár attribútummal, akár valamilyen más módon, majd kattintás után ezt keresni és ez alapján azonosítani.

Bármelyik megoldás esetén érdemes egy új gombot csinálni az előző feladat "létrehozási gombja" mellett, hogy ketté lehessen választani az "új elem létrehozását" és a "meglévő elem módosítását", mint funkciókat. Módosítások mentése esetén a tömbben frissítse az elemet és ennek megfelelően a táblázatot is.

#### Törlés (Delete)

A frissítéshez hasonlóan egy "DELETE" gombot helyezzen el a sorok végén és egy hozzá tartozó függvényt. Törlés esetén törölje a tömbből a kiválasztott elemet és frissítse a táblázatot.

### Tárolás

Valósítson meg localStorage-alapú tárolást. Ez történhet külön betöltés / mentés gombok segítségével is, történhet automatikusan minden CRUD műveletvégzés előtt / után, de történhet oldalbetöltéshez kötődően is ([onload esemény](https://www.w3schools.com/jsreF/event_onload.asp)).
