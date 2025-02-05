# Full-stack szoftverfejlesztés

## A kurzus célja, elsajátítható kompetenciák

A tárgy célja, hogy a hallgatók megismerkedjenek a full-stack fejlesztéshez kapcsolódó témakörökkel, módszerekkel, nyelvekkel és eszközökkel. Ezeken keresztül megismerik a webfejlesztés útját, a kezdetektől egészen napjainkig. Megismerik az ok-okozati összefüggéseket, ezáltal pedig az egyes módszerek közötti különbségeket fel tudják ismerni, előnyök és hátrányok szempontjából. Megismernek dedikált szerveroldali és kliensoldali módszereket és nyelveket, valamint a két oldal közötti kapcsolatot.

A hallgatók ezeken keresztül a kurzus sikeres teljesítése esetén a webfejlesztés részenkénti (backend / frontend) valamint egészét (full-stack) átlátják, a területekre vonatkozó szükséges alapismeretekkel rendelkezni fognak.

## A kurzus főbb témakörei

A hallgatók a következő témakörökkel ismerkednek meg tartalmilag összefüggő egységek (modulok) formájában:

- a webfejlesztés alapjai, történelme
- backend, frontend és fullstack szeparáció
- HTTP protokoll
- a HTML és a CSS nyelv (class, id, selector-ok, grid, flexbox stb.)
- az ECMAScript és a JavaScript nyelv (DOM manipuláció, eseményvezérelt programozás, keretrendszerek)
- szerveroldali programozás PHP-ban és ASP.NET-ben
- MVC tervezési minta (klasszikus webfejlesztés)
- CRUD alkalmazás készítése MVC tervezési mintával
- REST API alapú fejlesztés (moden webfejlesztés)
- CRUD alkalmazás készítése REST API alapon

## Követelmények

<https://nik.uni-obuda.hu/targyleirasok/tantargyak/full-stack-szoftverfejlesztes/>

## Tárgy weboldala

<https://nik.siposm.hu/fs>

## Modulok

### 1. modul: Webfejlesztés alapjai

A tárgy bevezetőjében röviden megismerjük a szoftverfejlesztés történetét, amely kapcsán aztán kitérünk a webfejelsztés, frontend- és backend-, valamint fullstack alapú fejlesztések közötti különbségekre, hasonlóságokra. Szintén alapfogalomként a HTTP protokollt megismerjük, valamint az internet és hálózat fogalmát is megvizsgáljuk a webfejlesztés vonatkozásában.

    01 - A szoftverfejlesztés rövid története
    02 - Webfejlesztés
    03 - Frontend fejlesztés
    04 - Backend fejlesztés
    05 - Fullstack fejlesztés
    06 - HTTP protokoll
    07 - Internet és hálózat

### 2. modul: HTML

Megismerjük a HTML nyelv történetét, kialakulásának körülményeit, valamint az alapvető HTML elemeket. Megismerjük a speciális jelentőséggel bíró head elemet ahol a metaadatok tárolandók, majd további HTML elemekkel ismerkedünk meg, kiemelve ezek közül az űrlapmezőket.

    01 - A HTML nyelv története
    02 - A HTML nyelv alapjai
    03 - A head elem (metaadatok)
    04 - További HTML elemek
    05 - Feladatmegoldás: Fejlesztőkörnyezet beállítása, HTML oldalak létrehozása

### 3. modul: CSS 1

Megismerjük a CSS nyelv történetét, kialakulásának körülményeit, valamint kapcsolatát a HTML nyelvvel. Megismerjük az alapvetőbb CSS beállításokat, stílusokat, ennek következtében pedig a CSS selector-okat is, amelyekkel class-ok és id-k kérdezhetők le a HTML dokumentum alapján.

    01 - A CSS nyelv története
    02 - CSS használatának módjai
    03 - Gyakori CSS stílusbeállítások
    04 - Feladatmegoldás: CSS alkalmazása a korábban létrehozott HTML oldalakra
    05 - CSS selector-ok
    06 - Feladatmegoldás: CSS selector-ok használata
    07 - Class és ID használata
    08 - Feladatmegoldás: Class-ok és ID-k használata

### 4. modul: CSS 2

CSS ismereteinket tovább mélyítjük, amelynek fontos lépése a nyelv fejlődésének megismerése, megértése hiszen ebből prediktálható a nyelv jövője is. Megismerjük a reszponzivitás fogalmát, és, hogy hogyan alakítható ki reszponzívra egy weboldal. Megismerkedünk oldalstruktúra kialakítási módszerekkel (flexbox, grid) amelyek a mai modern CSS keretrendszerekben is megtalálhatók, mint pl. a Bootstrap amelyet részletesebben is megismerünk.

    01 - A CSS fejlődése és jövője, böngésző támogatottság
    02 - Reszponzivitás
    03 - Feladatmegoldás: media-query-k használata reszponzív kialakításhoz
    04 - Oldalstruktúra kialakítása (grid, flexbox)
    05 - Feladatmegoldás: grid-alapú oldal kialakítása
    06 - CSS keretrendszerek
    07 - Feladatmegoldás: Bootstrap felhasználása

### 5. modul: JavaScript 1

Megismerjük a JavaScript nyelv történetét, kialakulásának körülményeit valamint kapcsolódását az akkori kor egyéb nyelveihez és a HTML-hez. Érintjük az ECMAScript fogalmát, valamint a JavaScript alapvető nyelvi tulajdonságait és jellemzőit felhasználva megnézzük, hogy hogyan tudunk alapvető programozási szerkezeteket ebben a nyelvben készíteni.

    01 - A JavaScript nyelv története
    02 - A JavaScript nyelv jellemzői, tulajdonságai
    03 - ECMAScript
    04 - JavaScript típusok, változók, vezérlési szerkezetek
    05 - Feladatmegoldás: JavaScript programozási alapok megismerése

### 6. modul: JavaScript 2

A JavaScript nyelvet részletesebben megismerjük, fókuszálva a DOM-ra és az azon keresztül elérhető adatmanipulációhoz. A DOM manipulációján keresztül egtanuljuk, hogy hogyan működik a kliensoldali dinamizmus (dinamikus tartalommódosítás).

    01 - DOM
    02 - DOM manipuláció (lekérdezés)
    03 - Feladatmegoldás: DOM manipuláció (lekérdezés + létrehozás)
    04 - DOM manipuláció (módosítás, létrehozás)
    05 - DOM manipuláció (CSS attribútumok)

### 7. modul: JavaScript 3

JavaScript ismereteinket tovább mélyítve megismerjük, hogy pontosan mik (és mik nem) a JS keretrendszerek, valamint, hogy milyen előnnyel/hátránnyal rendelkeznek ezek. Megismerjük továbbá az eseménykezelést, amely a kliensoldali dinamikának egy újabb (és talán a legfontosabb) eleme.

    01 - JavaScript keretrendszerek
    02 - Eseménykezelés
    03 - Feladatmegoldás: click esemény a gyakorlatban
    04 - Feladatmegoldás: eseményobjektum használata
    05 - Feladatmegoldás: esemény programozott létrehozása
    06 - BÓNUSZ Feladatmegoldás: TO DO alkalmazás localstorage tárolással

### 8. modul: PHP

Kliensoldali tudásunkhoz hozzáépítve, a szerveroldali programozás alapjait ismerjük meg amelyhez egy tökéletes kezdeti lépcsőfok a PHP nyelv megismerése. Ezen keresztül szemléltetve a szerver-kliens kommunikációt megvizsgáljuk (miben másabb mint a sima kliensoldali programozás). Megvizsgáljuk a HTTP státuszkódokat is, mint a szerverről kapott válasz egy fontos jellemzőjét.

    01 - Szerveroldali programozás alapjai
    02 - A PHP nyelv
    03 - Szerver-kliens kommunikáció
    04 - Feladatmegoldás: XAMPP fejlesztőkörnyezet, PHP gyakorlati alapok
    04 - Feladatmegoldás: JS használata PHP-val
    06 - HTTP státuszkódok
    07 - Feladatmegoldás: HTTP státuszkódok a gyakorlatban
    08 - Feladatmegoldás: Form kezelés PHP-val (GET request)

### 9. modul: ASP.NET

Szerveroldali programozással kapcsolatos tudásunk további mélyítésre kerül, azonban ehhez már nem PHP-t, hanem ASP.NET keretrendszert fogunk használni, így ezt ismerjük meg. A keretrendszer MVC tervezési mintát használ, így a tervezési mintákat, azok csoportosítását és létjogosultságukat is feldolgozzuk.

    01 - Tervezési minták elmélete
    02 - Az MVC tervezési minta
    03 - ASP.NET MVC
    04 - Feladatmegoldás: ASP.NET Core Empty alap projekt
    05 - Feladatmegoldás: ASP.NET Core MVC projekt felépítése (felhasználó üdvözlő)
    06 - Feladatmegoldás: Model réteg hozzáadása (Person osztály)
    07 - Feladatmegoldás: Model réteg bővítése

### 10. modul: ASP.NET MVC esettanulmány

Egy konkrét komplex feladat megvalósítása ASP.NET keretrendszerben, felhasználva a meglévő ismereteinket.

    01 - Feladatmegoldás: Singleton tervezési minta bemutatása
    02 - Feladatmegoldás: Data réteg létrehozása (repository)
    03 - Feladatmegoldás: Controller réteg elkészítése
    04 - Feladatmegoldás: View réteg elkészítése 1. - CREATE, READ
    05 - Feladatmegoldás: View réteg elkészítése 2. - Bootstrap, feltételes megjelenítés
    06 - Feladatmegoldás: View réteg elkészítése 3. - DELETE
    07 - Feladatmegoldás: View réteg elkészítése 4. - UPDATE
    08 - Feladatmegoldás: View réteg elkészítése (bónusz reflexió, apró simítások)
    09 - Feladatmegoldás: View réteg elkészítése (JS hozzáadása)

### 11. modul: REST API

Szerveroldalon maradva megismerkedünk egy másik fajta fejlesztési módszerrel, ami az API-alapú fejlesztést jelenti. Megismerjük, hogy mi az API jelentése, milyen típusai vannak (REST, SOAP, Win stb.) és, hogy miért fontos ez a megközelítés a modern világban. Megismerjük a CRUD fogalmát.

    01 - Az API jelentése
    02 - REST API
    03 - API vs MVC
    04 - API végpont készítés
    05 - CORS
    06 - API tesztelés (Swagger, Postman)

### 12. modul: REST API + JS esettanulmány

Egy konkrét komplex feladat megvalósítása API-alapú fejlesztéssel, felhasználva a meglévő ismereteinket.

    01 - Feladatmegoldás: API végpont készítés - Perzisztens adattárolás bevezetése (adatbázis)
    02 - Feladatmegoldás: API végpont készítés - Swagger hozzáadása az API projekthez
    03 - Feladatmegoldás: API végpont készítés - CRUD API végpontok elkészítése
    04 - Feladatmegoldás: Swagger tesztelés
    05 - Feladatmegoldás: Postman tesztelés
    06 - Feladatmegoldás: Postman + Swagger integrálás
    07 - Feladatmegoldás: API kliens készítés - Fetch API hívás, CORS probléma
    08 - Feladatmegoldás: API kliens készítés - a készítendő teljes rendszer áttekintése
    09 - Feladatmegoldás: API kliens készítés - A HTML elkészítése
    10 - Feladatmegoldás: API kliens készítés - A JS elkészítése
