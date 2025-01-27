# Workshop #5

## Feladat: ASP.MVC CRUD alkalmazás készítése

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

Hozza létre a következő oldalakat, felhasználva a Bootstrap keretrendszert az egységes kinézetért:

- Lista nézet (`Index.cshtml`)
  - Táblázatos formában listázza a számlákat. A táblázatban jelenjen meg minden tulajdonsága a modellnek.
  - Az `IsPaid` mező jelenjen meg színezve. Kifizetett számla esetén zöld pipával, míg nem kifizetett számla esetén piros X-szel legyen jelölve. (Használja innen kimásolva a karaktereket az egyszerűség kedvéért: ✔ és ✖)
  - Minden sorban legyenek gombok az `Edit`, `Delete` és `MarkAsPaid` műveletekhez, amelyekre kattintva a megfelelő művelet végződjön is el. Szerkesztés esetén a megfelelő nézetre navigáljon át az alkalmazás és ott lehessen módosítani a szükséges entitást - lásd alább. Törlés esetén ne legyen navigáció, csak törölje a rekordot. A fizetettre állításnál sincs új nézet, csak műveletvégzés.
- Új számla hozzáadása (`Create.cshtml`)
  - Űrlap a számla adatainak megadásához (pl. befizető neve, összeg).
- Számla módosítása (`Update.cshtml`)
  - Űrlap a meglévő számla adatainak frissítéséhez.

#### Validáció JavaScript segítségével

Adjon hozzá kliensoldali validációt az új számla felviteli űrlaphoz. Amennyiben valamelyik feltétel nem teljesül, úgy a gomb ne legyen kattintható (ehhez használja a button elem disabled attribútum állítását JavaScript kód alapján). `PayerName`: kötelező megadni, max. 50 karakter hosszú lehet. `Amount`: kötelező megadni, csak nullánál nagyobb pozitív érték lehet.
