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
