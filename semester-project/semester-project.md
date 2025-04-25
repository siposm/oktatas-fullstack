# Full-stack szoftverfejlesztés - Féléves feladat

## Általános elvárások

A hallgatók a féléves feladatot a szorgalmi időszakban kell elkészítsék a tanultaknak megfelelően és a tanultakat felhasználva. A feladatokhoz tartoznak általános elvárások (jelen alfejezet ezeket taglalja), valamint minden hallgató véletlenszerű módon kap egy konkrét feladatspecifikációt (lásd lentebb).

### Architektúra

A feladatokat a REST API architektúra alapján kell elkészíteni minden esetben. A szerveroldal (backend) C# ASP.NET, míg a kliensoldal (frontend) JavaScript, HTML, CSS segítségével valósítandó meg. Bootstrap keretrendszer használata elvárt. Az eszközöket a tanultak alapján használja és alkalmazza. Más technológia, keretrendszer, függvénykönyvtár, fordító stb. nem használható, a feladatok ezt nem is igénylik vagy indokolják.

A szerveren perzisztens adattárolásra nincs szükség, kontrollerre és modelre viszont igen - ezeket a tanultaknak megfelelően hozza létre. A szerver feladata, hogy API-n keresztül megkap valamilyen adatot a klienstől, azt feldolgozva, számításokat végezve pedig válaszol a kliensnek. Ezt megkapva a kliens feladata, hogy a kapott választ igényes formában, szép kinézettel megjelenítse. A feladatok fontos része, a szép UI is - ennek hiányában a feladat nagymértékben romlik, akár elfogadhatatlanná is válhat.

### Mappaszerkezet és elnevezési konvenciók

A főmappát (ún. gyökér mappa, azaz root) `FELADATCIM_NEPTUNKOD_VEZETEKNEV` formában kell elnevezni, ahol:

- a `FELADATCIM` az adott feladat címe (pl. "Csekkbefizetési rendszer"), végig nagybetűvel írva, ékezetek nélkül, szóköz nélkül
- a `NEPTUNKOD` az adott hallgató neptunkódja, végig nagybetűvel írva
- a `VEZETEKNEV` az adott hallgató vezetékneve, végig nagybetűvel írva, ékezetek nélkül
- Minta példa: `CSEKKBEFIZETESIRENDSZER_ASD123_SIPOS`

A gyökér mappában két további mappát kell létrehozni `BACKEND` és `FRONTEND` néven, amelyekbe majd a szerveroldali és kliensoldali kódok kerülnek.

```txt
root
├── .git
├── .gitignore
├── BACKEND
└── FRONTEND
```

### Verziókövetés

A programot lokális verziókövetéssel kell kezelni a tanultaknak megfelelően. Minimum 20 commit megléte szükséges az elfogadható féléves feladathoz. A commit-oknak követniük kell a "commit small, commit often" elvet, illetve törekedni kell az értelmes (értendő ezalatt, hogy a "csak meglegyen a minimum darabszám" miatt létrehozott commit-ok nem számítanak) commit-ok léterhozására, beszédes üzenetekkel.

A gyökér mappát kell a `git init` paranccsal inicializálni, minek hatására a rejtett `.git` mappa létrejön.

A backend mappába, vagy akár a gyökér mappába el kell helyezni egy [C# nyelvre](https://github.com/siposm/oktatas-fullstack/blob/master/.gitignore) vonatkozó `.gitignore` fájlt, hogy a build fájlokat ne verziókövessük fölöslegesen. Kliensoldalon ilyen fájlok nem lesznek, így arra vonatkozóan ilyen teendő nincs.

### Vizualizáció

Abban az esetekben amikor a feladat valamilyen vizualizált grafikon-szerű megjelenítést kér, nem használhatók külső függvénykönyvtárak. Oszlopdiagram pl. megalkotható div elemek egymásratevésével is, de akár táblázattal is kivitelezhető. Ennek oka, hogy az algoritmizációs készségeket és kreatív problémamegoldást részesítsük előnyben, szemben az "összecopyzott" kódokkal.

### Tesztelés

Minden esetben tesztelje a feladatot több, változatos bemenettel, hogy a megfelelő működést garantálni tudja. A backend és frontend kódokat programozott formában tesztelni nem szükséges.

### Határidők, leadás

A féléves feladatot a szorgalmi időszakban kell elkészíteni a 12. szorgalmi hét végéig bezárólag, és a Moodle rendszerben leadni (mindenkinek a saját laborjához tartozó kurzuson, nem pedig az előadáshoz tartozó alatt).

Leadáskor 1 db .zip állományt kell feltölteni. Ehhez "jobb klikk" a fentebb leírt gyökér mappára, "küldés", "tömörített mappa" lépéseket kell elvégezni. Más állomány (.rar, .tar.gz, .7z stb.) esetén a féléves feladat **nem elfogadható**. Amennyiben a fentebb leírt elnevezési konvencióknak a féléves feladat nem felel meg, úgy szintén **nem elfogadható**.

Ezt követően majd a 13. és/vagy 14. héten be kell mutatni és meg kell védeni a laborvezetőnél. Amennyiben a 12. hétig nem készült el a munka, úgy a 13. hét végéig még elkészíthető, ez esetben csak a 14. héten lehet már bemutatni és megvédeni. Amennyiben egyik határidőre sem készült el a munka, úgy évközi jegypótló vizsgán lehet bemutatni és megvédeni.

## Konkrét feladatok

### 🏦 Csekkbefizetési rendszer

Készítsen egy űrlapot, ahol meg lehet adni a következő paramétereket: befizető neve, befizetett összeg számmal, befizetett összeg szöveggel, dátum. A "befizetés" gombra kattintva az adatokat a backend API kapja meg majd dolgozza fel. Ellenőrizze, hogy a számként megadott érték egyezik-e a szövegben megadott értékkel. Ehhez készítsen saját algoritmust, ami egy magyar szöveget feldolgoz és előállítja a számszerű megfeleltetését. Például: tizenkétezer -> 12.000. Miután a szerver feldolgozta az adatot, ha hibát talált (pl. a két érték nem egyezik) adjon vissza "Hibás tranzakció" hibaüzenetet; míg sikeres feldolgozás esetén adja vissza az adatokat a kliens számára, és jelenítse meg egy táblázatban a képernyőn, amely tartalmazza az összes korábbi sikeres befizetést. Piros Bootstrap badge-vel emelje ki annak a nevét, akitől a legutolsó befizetés érkezett.

- Bemenetek: befizető neve, befizetett összeg számmal, befizetett összeg szöveggel, dátum
- Kimenetek: eddigi befizetések táblázatos megjelenítése

### 🎮 Játéklépés ellenőrző

A feladat egy 2D felülnézetes játékban található karakter lépéseinek ellenőrzése. A játékot egy mátrix reprezentálja, mint például az alábbi.

```txt
- - - - - - - -
- - - - C - - -
- - - - ¤ ¤ - -
- - - C - ¤ - -
- - - ¤ - ¤ - -
- █ ¤ ¤ - - - -
- ¤ ¤ ¤ ¤ ¤ ¤ -
- ¤ ¤ ¤ - - - -
- - - - - - - -

C → felszedhetó coin
█ → az irányított karakter
- → mező ahova lehet lépni
¤ → mező ahova nem lehet lépni mert felrobban
```

A kliens egy textarea-ból küldje el a teljes játékteret a backendnek. A játéktéren már legyen rajta a karakter (X) is. Egy inputmezőben, vesszővel elválasztva legyen benne utasítások sorozata, hogy hova lép a karakter, pl. F,J,F,J (fel, jobbra, fel, jobbra). A mintában megadott karakterhelyzetből kiindulva az FJFJ utasítást végrehajtva, a karakter az alsóbbik C (coin) mezőn fog állni.

A backend feladata a lépések validálása. Ha a lépések helyesek (nem lépünk robbanós mezőre), akkor a backend adja vissza a lépések végrehajtása után lévő játékteret. A felvett coin-okat számolja a rendszer és a felvett coin helyére . karakter kerüljön. A felvett coin-ok számát is adja vissza a backend. Ahonnan a karakter elmozdult, annak a mezőnek a helyére szintén . karakter kerüljön.

A kliens jelenítse meg a játékteret pl. táblázat segítségével. Ideális esetben az egyes típusú mezők helyére valamilyen kép betölthető, de ha csak a mezők különböző színekkel vannak megjelölve, az is elfogadható.

Ha a lépések között van olyan, aminek hatására robbanós mezőre lép a karakter, úgy adjon vissz a backend egy üzenetet, ami alapján a kliens csak egy bomba képet jelenítsen meg.

Egy lehetséges bemenet, lépéssorozat és kimenet:

```txt
BEMENET           |   KIMENET       
- - - - - - - -   |   - - - - - - - -
- - - - C - - -   |   - - - - C - - -
- - - - ¤ ¤ - -   |   - - - - ¤ ¤ - -
- - - C - ¤ - -   |   - - - █ - ¤ - -
- - - ¤ - ¤ - -   |   - - - ¤ - ¤ - -
- █ ¤ ¤ - - - -   |   - - ¤ ¤ - - - -
- ¤ ¤ ¤ ¤ ¤ ¤ -   |   - ¤ ¤ ¤ ¤ ¤ ¤ -
- ¤ ¤ ¤ - - - -   |   - ¤ ¤ ¤ - - - -
- - - - - - - -   |   - - - - - - - -

LÉPÉSEK: F,J,F,J
FELVETT COIN: 1 db
```

### 🤝 Csapatsorsoló

A feladat, hogy a kapott keresztneveket az algoritmus a kívánt darabszámú csapatra szétossza úgy, hogy minden csapat a lehető legváltozatosabban legyen összesorsolva életkorok szerint. Tehát ne legyen olyan csapat, amiben csak fiatalok vannak vagy csak idősek. A válaszként kapott csapatokat Bootstrap card-ok segítségével jelenítse meg, csapatonként más card színt használva.

- Bemenetek: keresztnevek, életkorok (lista), csapatok száma (szám)
- Kimenetek: csapatbeosztások

### 🌱 Növénygondozási rendszer

Készítsen egy rendszert, amely segít a növények gondozásában. A felhasználó egy mátrixban adja meg a növények nevét, típusát, a szükséges vízmennyiséget, és az öntözési gyakoriságot. Az algoritmus egy heti gondozási tervet készít.

- Bemenetek:
  - Egy N x 4 mátrix, ahol minden sor tartalmazza a növény nevét, típusát (pl. szobanövény, kertinövény stb.), napi vízigényét (ml-ben), és az öntözési gyakoriságot (hány naponta).
- Kimenetek:
  - Heti gondozási terv táblázatban, amely az öntözések időpontjait tartalmazza.
  - Az egyes növények vízfogyasztásának összesítése.
  - Színekkel jelölje, hogy mely napokon kell több gondozást végezni.

Minta mátrix:

```txt
Rózsa,Virág,2,3
Aloe Vera,Szukkulens,0.5,30
Bazsalikom,Fűszernövény,1,1
Levendula,Fűszernövény,1.5,7
Orchidea,Virág,0.75,14
```

### 📋 Tevékenység menedzser

A feladat, hogy a kapott tevékenységeket szétosszuk a megadott számú napra és az adott napon belül beütemezzük valamilyen időpontra (pl: futás: 16:00-18:00). Az algoritmus törekedjen arra, hogy minden nap közel arányos legyen a terhelésünk és megfelelő pihenőidő is legyen a tevékenységek elvégzése között. A végeredményt táblázat segítségével, cellák összevonásával jelenítse meg. Az egyes tevékenységek különböző háttérszínnel is legyenek ellátva.

- Bemenetek: elvégzendő feladatok és ezek időigénye (kerek óra), felhasználható napok száma
- Kimenet: adott napokra generált időterv táblázatosan

### 🛋️ Szobaelrendező

A feladat, hogy a megadott bútorokat elrendezzük a szobában úgy, hogy ne érjenek össze és az eredményt egy táblázatos formában prezentáljuk úgy, hogy minden táblázatcella pl. 10cm-t jelent. Ha az ágy 160*200 cm hosszú és a sarokban található, akkor a szükséges 16, illetve 20 cellát egyesítsük, színezzük ki valamilyen random színnel és írjuk bele, hogy "Ágy".

- Bemenetek: szoba méretei (szélesség,hosszúság - maximum 1 tizedesjegy pontosan), tárgyak listája (név,szélesség,hosszúság)
- Kimenetek: egy generált szoba berendezési terv

### 🏅 Kezdőcsapat

A program készítsen el lehetséges kezdő 11 összeállításokat. Legyenek különböző értelmes felállások (4-4-2, 4-3-3, 3-5-2 stb.) és kezdőcsapat variációk. Az egyes variációkhoz a szerver társítson egy jóság értéket. Jelenítsünk meg a kliensen szépen minél több ilyet bootstrap card-okat felhaználva. A card-ok színe a csapatfelállás jósága alapján változzon. A legjobb felállás pl. legyen zöld színű, a közepes sárga, a legrosszabb pedig piros.

- Bemenetek: egy focicsapat játékosai (cserék is) és posztjuk
- Kimenetek: lehetséges kezdő felállások

### 🎒 Hátizsák probléma

A feladat a hátizsák probléma megoldása. A cél összeállítani azon tárgyak listáját amivel a kapacitás maximalizált a lehetséges legnagyobb értékekkel. A tárgyak listáját egy textarea-n keresztül lehessen megadni, míg a hátizsák kapacitását egy inputmezőn keresztül. A szervertől visszakapott eredményt egy táblázaton keresztül jelenítse meg a kliensoldal. A táblázat celláinak száma legyen a hátizsák kapacitásával megegyező, és az egyes cellákat annak megfelelően színezze ki, hogy az melyik tárgyat jelképezi. A táblázat felett legyen egy színmegjelölés, hogy melyik tárgy melyik színt jelenti (és mekkora a tárgy mérete és értéke).

- Bemenetek: tárgyak listája (név, méret, érték) és a hátizsák kapacitása (egész szám)
- Kimenetek: optimális hátizsák összeállítás

Tárgyak listája minta:

```txt
focilabda,30,10
alma,4,10
okostelefon,6,22
térkép,5,15
kés,3,10
elemlámpa,7,12
kötél,10,8
élelem,12,2
```

Egy példa táblázat (5*7 méretű = 35 a zsák kapacitása), mint kimenet, ahol itt most nem színnel, hanem betűkkel vannak az egyes tárgyak jelölve:

```txt
-----------------------------
| X | X | Y | Y | Y | Q | Q |
| X | X | Y | Y | Y | Q | Q |
| X | X | C | B | N | N | N |
| X | X | C | B | N | N | N |
| X | X | C | B | N | N | N |
-----------------------------
```

### 📐 Telek terület

A feladat egy olyan rendszer megvalósítása, amely textarea bemenetből egy n*n méretű mátrixot küld el a backend-nek. Ebben a mátrixban egész szám értékek vannak, amelyek egy telek magassági pontjait jelentik. A feladat az, hogy megkeresse a backend melyik az a legnagyobb terület amely egybefüggő magasságú. Egybefüggő magasság alatt azt értjük, hogy a mátrix (a telek) szomszédos elemei között kisebb az eltérés mint epszilon. A epszilon értéket inputmezőn keresztül lehessen magadni a mátrixszal együtt. A backend küldje vissza a kliensnek a mátrixot, az epszilon értéket, valamint a meghatározott összefüggő területet alkotó indexeket. A kliens feladata, hogy a visszaküldött adatokból felépítse (pl. táblázat segítségével) a telek reprezentációját, ahol jelölje meg a legnagyobb területet alkotó cellákat valamilyen színnel.

- Bemenetek: n*n-es egész számokat tartalmazó mátrix, epszilon érték
- Kimenetek: bemeneti mátrix, epszilon, meghatározott terület

### 💳 Hitelkonstrukciók

Valaki szeretne hitelt felvenni egy lakás vásárlására, de nem tudja, hogy hány évig akarja törleszteni. Az algoritmus a kamatos kamat képletével generálja le, hogy pl: 5 évre, 10 évre, 15 évre, 20 évre, stb. mennyi lenne a havi törlesztőrészlet és mennyit kellene összesen visszafizetni. Ezeket a csomagajánlatokat (év,havi törlesztő,visszafizetés) küldje vissza a szerver a kliensnek és Bootstrap card-okon jelenítse meg. A csomagajánlatokat valamilyen színezési elv alapján változtassa. Például a havi törlesztések díjának nagysága alapján legyen zöld-sárga-piros; ahol kicsi a törlesztő ott zöld (könnyen kifizethető), ahol közepes a törlesztő ott sárga (nehezen, de kifizethető) és végül ahol nagy a törlesztő ott piros (nagyon nehezen kifizethető).

- Bemenetek: felvenni kívánt lakáshitel, kamatláb
- Kimenetek: lehetséges konstrukciók

### 📊 Költségvetési elemző

Egy költségvetési elemzőt kell készíteni, amely különböző bevételek és kiadások alapján segít meghatározni a havi megtakarítást. Az algoritmus figyelje az esetleges túlköltekezést. A kliens jelenítse meg a kapott adatokat valamilyen vizualizált formában (pl. oszlopdiagram). Ehhez nem kell külső könyvtárakat felhasználni, hanem táblázattal, divek egymásra helyezésével, esetleg grid vagy flexbox struktúrával ki lehet alakítani ezeket.

- Bemenetek:
  - havi bevételek listája
  - havi kiadások listája (név, összeg, kategória: alapvető, szórakozás stb.)
- Kimenetek: havi megtakarítás vagy túlköltés mértéke, adatok vizualizált megjelenítése

### 📑 Szövegstatisztika

Egy szövegstatisztikai eszközt kell készíteni, amely egy megadott szöveg elemzését végzi el. Az elemzés tartalmazza a szavak számát, a leggyakoribb szavakat, és egy egyszerű olvashatósági index kiszámítását.

- Bemenetek: egy szöveg (pl. egy cikk vagy egy bekezdés).
- Kimenetek:
  - Szavak száma, karakterek száma, leggyakoribb szavak és azok gyakorisága.
  - Az olvashatósági index (pl. az átlagos mondathossz és szóhossz    alapján).
  - A kliens jelenítse meg az eredményeket diagramokon és táblázatokban.

### 🎓 Vizsgajegyek elemzése

Készítsen egy rendszert, amely vizsgajegyek adatait elemzi. Az algoritmus különféle statisztikákat generál, például az átlagos jegyet, a legjobb és legrosszabb jegyeket, valamint az osztályzatok eloszlását. Az eredményeket vizualizáltan is jelenítse meg a kliens. Ehhez nem kell külső könyvtárakat felhasználni, hanem táblázattal, divek egymásra helyezésével, esetleg grid vagy flexbox struktúrával ki lehet alakítani ezeket.

- Bemenetek:
  - Vizsgajegyek listája (hallgató neve, tárgy, jegy).
- Kimenetek:
  - Az API visszaadja a jegyek statisztikáit (átlag, medián, leggyakoribb jegy).
  - A kliens jelenítse meg az eredményeket grafikonokon (pl. hisztogram az eloszlásról, vonaldiagram a változásokról).

### ⛅ Időjárás előrejelző

Készítsen egy rendszert, amely feldolgozza az időjárási adatokat és előrejelzést készít, figyelembe véve a korábbi időjárási trendeket. Az algoritmus egyszerű valószínűségi modellel dolgozik, amely megadja a következő nap várható időjárását az eddigi adatok alapján.

- Ha az előző 3 nap időjárása azonos volt (pl. esős, napos), akkor nagyobb az esélye annak, hogy a következő nap is ugyanolyan lesz:
  - 70% valószínűséggel marad az időjárás azonos.
  - 20% valószínűséggel javul az időjárás (pl. esős → borult, borult → napos).
  - 10% valószínűséggel romlik az időjárás (pl. napos → borult, borult → esős).
- Ha az előző 3 nap időjárása változatos volt, akkor a következő nap időjárása véletlenszerű.

A kliens a következő napi adatokat teljes képernyős méretben jelenítse meg, igényesen. Használjon képeket / piktogrammokat a különböző időjárási típusok megjelenítéséhez és az oldal teljes színét is változtassa az időjárás típusa alapján.

- Bemenetek: elmúlt napok időjárás adatai
- Kimenetek: következő nap várható időjárása (napi hőmérséklet, időjárása típusa (napos, borult, esős, havas), szélsebesség km/h-ban)

### 🌧️ Talajnedvesség elemző

Készítsen egy rendszert, amely 3 bemeneti mátrixot feldolgozva kiszámolja, hogy egy adott hektárnyi területen mennyire nedves a talaj. Ehhez különböző eszközök méréseit megkapja, ezek a bemeneti adatok. A mátrixok sorai vesszővel vannak elválasztva egymástól, ezeket három külön textarea-kból küldje a kliens a backend API-nak. A bemeneti mátrixok bármekkorák lehetnek, de mindig négyzetesek és a három mátrix mérete mindig megegyezik.

Egy lehetséges példa 5x5 mátrixok esetén:

```txt
A mátrix:
  Sós,Tőzeges,Lúgos,Vályogos,Szerves
  Vályogos,Savanyú,Vályogos,Sós,Homokos
  Agyagos,Agyagos,Tőzeges,Lúgos,Lúgos
  Tőzeges,Szerves,Szerves,Savanyú,Tőzeges
  Savanyú,Lúgos,Homokos,Szerves,Agyagos

B mátrix:
  0.616555682,0.640437434,0.394921648,0.989150841,0.094593963
  0.73640787,0.533786646,0.010040263,0.103582895,0.822426946
  0.482072405,0.307524409,0.554290788,0.34809631,0.050875698
  0.030366978,0.029007159,0.684912003,0.15174959,0.169129819
  0.801127784,0.378496264,0.028311732,0.819583358,0.258000695

C mátrix:
  326.8790814,142.532508,451.0244456,492.2147514,9.854457502
  196.8179513,254.0216116,135.4596622,871.5870911,885.1868424
  552.9238429,388.6590505,877.9482358,693.8786444,255.2241038
  927.5234866,358.335735,359.6940165,240.604347,508.8106815
  611.5528772,937.5820018,131.415368,40.17513664,401.7750407
```

A szerver a megkapott mátrixokat dolgozza fel és adjon vissza egy aggregált eredménymátrixot, amelyet aztán a kliens jelenítsen meg. Az aggregáció eredménye egy víztérkép, amely a talaj vizességét jelenti a hektárnyi területen belül. A kliens feladata ebből egy táblázattal grafikusan megjeleníteni, hogy mennyire nedves a talaj adott mérési zónákban. Ehhez a táblázat celláit színezze ki saját skálázás alapján. Ahol nem nedves a talaj ott legyen barna a szín és ahogy nedvesedik a talaj, úgy legyen egyre kékesebb.

A talajok vízelvezető képessége így néz ki:

- Savanyú talaj: 0.410
- Agyagos talaj: 0.319
- Tőzeges talaj: 0.380
- Szerves talaj: 0.391
- Sós talaj: 0.563
- Lúgos talaj: 0.669
- Vályogos talaj: 0.727
- Homokos talaj: 0.785

A végső víztérkép mátrixot úgy állítjuk elő, hogy:

- normalizálni kell a C mátrix értékeit 0-1 közé
- a B és normalizált C mátrix értékeit összeszorozzuk, ez legyen az X kimeneti mátrix
- majd elosztjuk az X mátrix értékeit az A mátrix értékeivel, megfeleltetve azokat a fentebbi listában található értékeknek

### 🧱 Járólap kalkulátor

Készítsen egy rendszert amivel magánszemélyek ki tudják számolni, hogy hány négyzetméter járólapot kell megvásárolniuk egy terület leburkolásához. A rendszernek lehessen megadni egy terület szélességét és magasságát, valamint a járólapok méretét (szintén szélesség és magasság) lehessen kiválasztani legördülő listából. Az alábbi opciók közül lehessen választani: 10x10, 15x15, 10x30, 30x30, 30x60, 60x60, 45x90, 90x90. A backend feladata, hogy a megkapott területet lefedje a kiválaszott burkolólap mérettel úgy, hogy lehetőleg a legkevesebb anyagot kelljen hozzá megvásárolni. A kliens megkapva a választ, jelenítse meg, hogy hány darab járólapot kell megvásárolni és valamilyen vizualizált módon jelenítse meg, hogy hogyan nézne ki a burkolás. A program legyen intelligens, vizsgálja meg, hogy hogyan jár jobban a megrendelő: hosszában vagy vízszintesen rakva a járólapokat.

- Bemenetek: burkolandó terület szélessége és magassága, kiválasztott járólap méretei
- Kimenetek: járólap darabszáma, vizualizált burkolás

### 🥫 Élelmiszerkészlet optimalizálása

Készítsen egy rendszert, amely segít optimalizálni egy háztartás élelmiszerkészletét. A felhasználó egy mátrixot küld, amely az élelmiszerkészlet aktuális állapotát tartalmazza, például az élelmiszer típusát, mennyiségét és lejárati idejét. Az algoritmus elemzi a készletet és javaslatokat ad, hogy mely élelmiszereket kell először felhasználni.

- Bemenetek: Egy N x 3 mátrix, ahol minden sor tartalmazza az élelmiszer nevét, a készleten lévő mennyiséget és a lejárati dátumot.
- Kimenetek:
  - A lejárati idő alapján priorizált lista.
  - Az élelmiszerek havi felhasználási arányának becslése.
  - Javaslat az újonnan vásárolandó tételekről.

### 📏 Fibonacci rajzoló

Készítsen egy rendszert ami egy inputmezőt tartalmaz. Itt megadható, hogy hány iteráción keresztül szeretnénk Fibonacci sorozatot számítani. A backend számolja ki az iterációnkénti Fibonacci számokat, majd küldje vissza a kliensre ezeket. A kliens feladata, hogy a kapott számok alapján div-ek segítségével vizualizálja az elemeket négyzetek segítségével.

Egy példa: beírjuk, hogy 7. Ekkor hét iteráción keresztül kell kiszámolni a Fibonacci számokat, tehát: 0, 1, 1, 2, 3, 5, 8. A nyolcas érték tehát a 7. iteráció eredménye. Az eddig kiszámolt számok pedig szintén itt láthatók.

A kliens feladata ebből az ismert Fibonacci spirált megalkotó négyzetek elhelyezése.

- Bemenetek: egy szám
- Kimenetek: Fibonacci számokat tartalmazó gyűjtemény

### 🚫 Cenzúrázó

Készítsen egy rendszert ami blacklist-en szereplő szavakat keres szövegben és helyettesít alternatívákra. Ehhesz készítsen egy textarea-t, amiben `feketelistás szó@alternatíva-1,alternatíva-2,...` formában soronként meg lehet adni a feketelistás szavakat és a helyettük használható alternatívákat. Ezen kívül legyen még egy másik textarea, amiben hosszú szöveget lehet megadni. A backend megkapva ezeket, nézze végig a bemeneti szöveget, és amennyiben feketelistás szót talál, cserélje azt ki egy alternatívára. A rendszer figyeljen arra, hogy a kicserélt szavak előfordulása egyenlően oszoljon el és ne legyen szóismétlés. Ez utóbbi alatt azt értjük, hogy ha például egy mondatban kicserélünk egy feketelistás szót egy alternatívára, akkor az alternatíva lehetőleg ugyanabban a mondatban ne forduljon elő mégegyszer. A rendszer legyen képes arra, hogy érzékelje a kis- és nagybetűket. Ezt figyelembe véve is legyen képes kicserélni egy szót, viszont a "betűrendet" a cserélést követően is tartsa meg. A rendszer ragozásokat nem kell, hogy kezelni tudjon.

A backend adja vissza a kliensnek a szükséges dolgokat, ahhoz, hogy meg tudja jeleníteni a szöveget a következő formában: `Egy tavaszi reggelen a nap első sugarai (aranyszínű|sötétzöld) fénybe borították a kis falut.` Ebben az esetben az aranyszínű szót cserélte a rendszer sötétzöldre. Ezt úgy jelenítse meg a kliensoldal, hogy mind a két szó szerepeljen, a régi szó piros badge-ben legyen, az új szó pedig zöld badge-ben. Természetesen a `(|)` karakterek nem kellenek, csak a jól láthatóság miatt szerepel itt így.

Az eredeti szövegről és a módosított szövegről készítsen szófelhőt, annyi különbséggel, hogy egy kétoszlopos (A oszlop: eredeti szöveg, B oszlop: módosított szöveg) felosztásban a szavak előfordulási gyakorisága alapján fentről lefele legyenek sorrendben a szavak egymás alatt. Elöl a leggyakrabban ismétlődő szavak, alul pedig a legritkábban ismétlődő szavak. A szavak betűméretei legyenek arányosítva egymáshoz képest: a leggyakrabb szó legyen a legnagyobb betűméretű, és csökkenjen arányosan.

### 💡 Villanyszámla költségek

Készítsen egy rendszert ami képes cégek vagy magánszemélyek költségét kiszámolni a fogyasztás és egységár alapján. Legyen egy input mező ahol a kWh egységárat lehet megadni (pl. 36.386 Ft), valamint egy textarea amiben mátrixként lehet megadni múlt évek havi szintű fogyasztási adatait. Egy lehetséges minta alább látható:

```txt
2020,2021,2022,2023,2024
108,69,217,396,265
69,223,190,400,230
171,128,152,16,310
114,174,154,136,380
226,32,70,24,38
307,154,33,275,130
242,284,6,384,113
296,381,124,28,100
278,30,333,326,182
300,37,188,79,369
171,280,343,304,388
33,210,318,10,303
```

Oszlopok alapján nézve:

- az első oszlop pl. a 2020-as év
- a második oszlop pl. a 2021-es év
- stb.

Sorok alapján nézve:

- a legelső sor az évet jelenti
- a második sor a január hónap fogyasztása
- a harmadik sor a február hónap fogyasztása
- stb.

A backend megkapva az adatokat számolja ki, hogy melyik év melyik hónapjában mennyi volt a fizetendő díj. Fogyasztott energia * egységár + rendszerhasználati díj (ez utóbbi egységesen mindig 23.4 Ft). Számolja ki azt is, hogy éves szinten mennyi volt a fizetendő díj. Van lehetőség kedvezményre, amennyiben két évben egymást követően az évi szinten fizetett díj meghaladja a 350.000 Ft-os limitet. Ez esetben a rákövetkező év minden hónapjában 13% kedvezmény vehető igénybe.

A számítások alapján a kliensoldalon jelenítse meg táblázatos elrendezésben a bementként kapott éveket, havi bontásban. A táblázat oszlopai legyenek a bemeneti évek, a sorok pedig a hónapok. A cellákban jelenjen meg adott hónap díja, az oszlopok alján az éves összesített érték, és amennyiben valamelyik évben alkalmazható volt a kedvezmény, azt az évet (oszlopot) halványzöld háttérszínnel emelje ki.

### 🔒 Jelszókezelő

Készítsen egy rendszert amiben egy inputmezőbe megadható egy jelszó, amelyet a backend megkapva titkosítson el Caesar titkosítással. Ennek a titkosításnak az a logikája, hogy valamilyen értékkel eltolja a betűket. Például az "alma" karakterláncból "bmnb" kimenet készül, a következő eltolások alapján: a → b, l → m, m → n, a → b. Ebben az esetben az eltolások száma 1 volt. Az eltolások számát lehessen szintén a kliensoldalról megadni szám formájában egy új inputmezőn keresztül. Az eltolások egy idő után ismétlődnek, tehát az "a" betű 1-gyel való eltolása "b"-t eredményez, viszont ha az "a"-t eltoljuk 27-tel, akkor ismét a "b"-hez kerülünk. Ezt vegye figyelembe és kezelje le valamilyen logika alapján. A titkosított jelszót adja vissza a backend, majd a kliens jelenítse meg valamilyen látványos formában.

Ezen kívül a backend számolja ki és adja vissza, hogy mennyire erős jelszót adtunk meg. A jelszavak erősségének számos irodalma van, az egyszerűség kedvéért most alkalmazza a következőket.

A jelszó hosszúsága alapvetően meghatározó tényező, hiszen brute-force módszerrel biztosan célbaér a támadó, csak az a kérdés, hogy mennyi idő alatt (pl. 1 nap vagy 1 millió év). A számítás a következő képlettel tehető meg:

```txt
kombinációk_száma = karakterkészlet_mérete ^ jelszó_hosszúsága
```

A karakterkészlet tekintetében a következők fordulhatnak elő (fókuszálva csak az angol abc betűire):

- csak kisbetűk: 26 karakter
- kis- és nagybetűk: 52 karakter
- speciális karakterek: 94 karakter

A támadási sebesség a feltörési módszertől és a támadótól függ. Modern GPU-val 1 milliárd próbálkozás másodpercenként (10^9 / msp) egy jó kiindulási alap. A feltörési időt (ezáltal a jelszó komplexitását és biztonságosságát) a következők szerint lehet számítani:

```txt
idő = kombinációk_száma / támadási_sebesség
```

A backend adja vissza a titkosított új jelszót, az eredeti jelszót, valamint a jelszó komplexitását. A kliens feladata az eredeti és új jelszó megjelenítése valamilyen jól látható teljesképernyős formában, valamint egy zöld-sárga-narancssárga-piros skálán jelezze, hogy a jelszó mennyire biztonságos, azaz mennyire nehezen feltörhető.

- Bemenetek: titkosítandó jelszó, eltolás mértéke
- Kimenetek: titkosított jelszó, jelszó komplexitása

### ✔️ Szolgáltatás ellenőrzése

Készítsen egy rendszert amely képes arra, hogy egy megadott URL-t felderít elérhetőség szempontjából. Az URL-t a backend megkapva alapvető ping utasítás kiadásával ellenőrizze, hogy elérhető-e, illetve nyerje ki az egyéb ping utasításhoz tartozó adatokat (pl. válasz idő, TTL, adatméret stb.).

A backend adja vissza a kliens számára a szükséges adatokat, amely aztán jelenítse meg ezeket. Az elérhetőség szempontjából alkalmazzon valamilyen jól látható (piros / zöld) színezést, és mondjuk középen egy nagy szöveg jelenjen meg, hogy "Elérhető" vagy "Nem elérhető", alatta jelenjen meg a tesztelt URL valamint a hozzá kapcsolódó adatok.

A rendszert készítse el úgy, hogy akár több URL is megadható pl. egymás alatt felsorolva, ekkor tesztelje végig mindegyiket a backend, majd mindegyikhez tartozóan adja vissza az eredményeket. A kliensoldal ekkor egy táblázatban jelenítse ezeket meg, aminek az első oszlopa az URL-t tartalmazza piros vagy zöld badge-ban.

- Bemenetek: tesztelendő URL(-ek)
- Kimenetek: szolgáltatás(ok) elérhetősége és kapcsolódó adatok

### 🪢 Szókitaláló akasztófa

Készítsen egy szókitaláló rendszert. A program indulásakor a kliensoldal generáljon egy szóhalmazból egy véletlen kiválasztott elemet. A szóhalmazt kézzel vigye fel a kódba, ebből sorsoljon a rendszer véletlen. Ezt a felhasználó ne lássa, csak jelenjen meg számára annyi darab inputmező, ahány betűből áll a szó. Az egyszerűség kedvéért minden betű ténylegesen egy karakter legyen, tehát az "ly" két betűnek kezelendő, "l" és "y".

A felhasználó kitöltés után egy gombbal tudja elküldeni a backendnek az inputmezők értékeit, valamint az eredeti szót is. A backend feladata, hogy ellenőrizze, mely betű talált és melyik nem.

A hagyományos akasztófával ellentétben itt a megadott betűk sorrendje fontos! A rendszer számítsa ki, hogy adott helyen megadott betű milyen messze volt a céltól.

Példa:

- véletlenül generált szó: "macska"
- megjelenített input mezők száma: `[_] [_] [_] [_] [_] [_]`
- kitöltés eredménye: `[m] [a] [c] [s] [e] [k]`
- látható, hogy az utolsó két karakter nem megfelelő
  - az "e" karakter helyett "k" karakter lett volna a megfelelő, míg az utolsó "k" helyett az "a" karakter
  - a várt "e" és a megadott "k" karakter közötti távolság az abc betűi alapján számolható

A backend adja vissza, hogy mi volt az eredeti szó, mi volt a tippelt szó, melyik betűt nem sikerült eltalálni, és hogy milyen messze volt adott karakter az elvárt karaktertől.

A kliens ezeket jelenítse meg valamilyen látványos és játékos formában. Színezéssel jelezze, hogy a szó hány százalékát sikerült kitalálni (eltalált karakter / összes karakter).
