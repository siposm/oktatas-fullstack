# Workshop #5

| Full-Stack fejlesztés | |
|-----|---|
| Témakörök: | ASP.MVC |
| Cím: | ASP.MVC CRUD alkalmazás készítése |

## Feladat

A feladat egy ASP.MVC alkalmazás készítése, aminek segítségével számlabefizetéseket lehet kezelni, teljes CRUD funkcionalitással.

A projekt létrehozásakor a következő MVC rétegzést alkalmazza:

    root
    ├── Controllers
    ├── Data
    ├── Views
    └── Models

### Rétegzés

#### Data réteg

- Hozzon létre egy `Invoice` entitást az alábbi tulajdonságokkal:
  - `Id` (int, elsődleges kulcs)
  - `PayerName` (string, max. 50 karakter) - a számla befizetőjének neve.
  - `Amount` (int) - a számla összege.
  - `IsPaid` (bool) - jelzi, hogy a számla ki van-e fizetve.
- Készítsen egy repository-t, amely az alapvető CRUD műveleteket kezeli memória-alapon (pl. `List<Invoice>`).

#### Controller réteg

- Hozzon létre egy `InvoiceController`-t, amely az alábbi metódusokat tartalmazza:
  - `Index`: Az összes számla listázása.
  - `Create`: Új számla hozzáadása.
  - `Edit`: Számla adatainak módosítása.
  - `Delete`: Számla törlése.
  - `MarkAsPaid`: Egy adott számla "Kifizetett" státuszra állítása.

#### View réteg

- Használja a Bootstrap keretrendszert az egyszerű és letisztult kinézetért.
- Az alábbi oldalakat hozza létre:
  - Számlalista
    - Táblázatos formában listázza a számlákat. A táblázatban jelenjenek meg a következő oszlopok:
    - `PayerName`, `Amount`, `IsPaid`.
    - Minden sorban legyenek gombok az `Edit`, `Delete` és `MarkAsPaid` műveletekhez.
  - Új számla hozzáadása
    - Űrlap a számla adatainak megadásához (pl. befizető neve, összeg).
  - Számla módosítása
    - Űrlap a meglévő számla adatainak frissítéséhez.
  - Számla törlése
    - Egy gomb a táblázatban, amely egy meglévő számlát töröl (nincs külön nézet).
  - Státusz módosítása
    - Egy gomb a táblázatban, amely "Kifizetett"-re állítja a számlát (nincs külön nézet).

#### Bootstrap és feltételes megjelenítés

A számlalista táblázatban az `IsPaid` mező jelenjen meg színezve. Kifizetett számla esetén zöld pipával, míg nem kifizetett számla esetén piros X-szel.

#### Validáció JavaScript segítségével

Adjon hozzá kliensoldali validációt az új számla felviteli űrlaphoz. Amennyiben valamelyik feltétel nem teljesül, úgy a gomb ne legyen kattintható (ehhez használja a disabled HTML attribútum állítását JavaScript kód alapján). `PayerName`: kötelező megadni, max. 50 karakter hosszú lehet. `Amount`: kötelező megadni, csak nullánál nagyobb pozitív érték lehet.
