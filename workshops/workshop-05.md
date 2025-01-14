# Workshop #5

| Full-Stack fejlesztés | |
|-----|---|
| Témakörök: | ASP.MVC |
| Cím: | ASP.MVC CRUD alkalmazás készítése |

## Feladat

A feladat egy ASP.MVC alkalmazás készítése, aminek segítségével csekkbefizetéseket lehet kezelni, teljes CRUD funkcionalitással.

A projekt létrehozásakor a következő MVC rétegzést alkalmazza:

    root
    ├── Controllers
    ├── Data
    ├── Views
    └── Models

### Rétegzés

#### Data réteg

- Hozzon létre egy `Cheque` entitást az alábbi tulajdonságokkal:
  - `Id` (int, elsődleges kulcs)
  - `PayerName` (string, max. 50 karakter) - a csekk befizetőjének neve.
  - `Amount` (int) - a csekk összege.
  - `DueDate` (DateTime) - a csekk befizetési határideje.
  - `IsPaid` (bool) - jelzi, hogy a csekk ki van-e fizetve.
- Készítsen egy repository-t, amely az alapvető CRUD műveleteket kezeli memória-alapon (pl. `List<Cheque>`).

#### Controller réteg

- Hozzon létre egy `ChequesController`-t, amely az alábbi metódusokat tartalmazza:
  - `Index`: Az összes csekk listázása.
  - `Create`: Új csekk hozzáadása.
  - `Edit`: Csekk adatainak módosítása.
  - `Delete`: Csekk törlése.
  - `MarkAsPaid`: Egy adott csekk "Kifizetett" státuszra állítása.

#### View réteg

- Használja a Bootstrap keretrendszert az egyszerű és letisztult kinézetért.
- Az alábbi oldalakat hozza létre:
  - Csekklista
    - Táblázatos formában listázza a csekkeket. A táblázatban jelenjenek meg a következő oszlopok:
    - `PayerName`, `Amount`, `DueDate`, `IsPaid`.
    - Minden sorban legyenek gombok az `Edit`, `Delete` és `MarkAsPaid` műveletekhez.
  - Új csekk hozzáadása
    - Űrlap a csekk adatainak megadásához (pl. befizető neve, összeg, határidő).
  - Csekk módosítása
    - Űrlap a meglévő csekk adatainak frissítéséhez.
  - Csekk törlése
    - Egy gomb a táblázatban, amely egy meglévő csekket töröl (nincs külön nézet).
  - Státusz módosítása
    - Egy gomb a táblázatban, amely "Kifizetett"-re állítja a csekket (nincs külön nézet).

#### Bootstrap és feltételes megjelenítés

A csekklista táblázatban az `IsPaid` mező jelenjen meg színezve. Kifizetett csekk esetén zöld pipával, míg nem kifizetett csekk esetén piros X-szel.

#### Validáció JavaScript segítségével

Adjon hozzá kliensoldali validációt az új csekk felviteli űrlaphoz. Amennyiben valamelyik feltétel nem teljesül, úgy a gomb ne legyen kattintható (ehhez használja a disabled HTML attribútum állítását JavaScript kód alapján). `PayerName`: kötelező megadni, max. 50 karakter hosszú lehet. `Amount`: kötelező megadni, csak nullánál nagyobb pozitív érték lehet.
