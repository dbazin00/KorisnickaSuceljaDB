---
title: "Objektno orijentirano programiranje"
date: "2018-05-23"
description: "Koncept objektno orijentiranog programiranja"
---

**Objektno orijentirano programiranje** ili kraće OOP je jedan od mogućih pristupa programiranju računala. Za razliku od ostalih pristupa, u kojima je težište na akcijama koje se vrše na podatkovnim strukturama, ovdje je težište na projektiranju aplikacije kao skupa objekata koji izmjenjuju poruke između sebe.


## Osnove vrijednosti OOP-a

1. **Objekti.** U OOP metafori osnovna jedinica je objekt, što je konkretna realizacija klase. U objektno orijentiranom svijetu izbjegava se uporaba globalnih varijabli, nego svaki objekt ima svoje varijable, koje još zovemo i podatkovni članovi klase. Isto tako nema više ni samostojećih funkcija, nego funkcije pripadaju klasi, bilo da vanjskom svijetu nešto kazuju o stanju objekta, ili mijenjaju stanje objekta, a zovemo ih funkcijski članovi klase ili metode.

2.  **Učahurivanje** ili **enkapsulacija objekata**. Pošto ne postoje globalne varijable, iz drugih dijelova koda nije moguć pristup varijablama klase nikako osim ugrađenim metodama za njihovo čitanje i pisanje (ako smo ih deklarirali kao privatne, što je preporučeno). Na taj način se osigurava da objekt ne može doći u neko nepredviđeno stanje iz bilo kojeg razloga, npr. kad mu se pristupa istovremeno iz više dijelova koda (ako imamo višenitno programiranje) jer nužno je upotrebljavati funkcijske članove objekta u koje se mogu ugraditi sigurnosni mehanizmi poput sinkronizacije.

3. **Apstrakcija** - čest je slučaj da se neki objekti minimalno razlikuju, i zasebno definiranje svakog od njih je redundantno. Osim toga za samo efikasno projektiranje praktično je pojednostavljivanje konkretnog problema. Tu ulaze u igru apstraktne klase i sučelja.

4. **Nasljeđivanje** - kad već definiramo neki objekt, a zatreba nam neki sličan objekt koji je zapravo podskup početnog objekta, moguće je naslijediti početni objekt, čime štedimo vrijeme za programiranje (makar to bio copy-paste) i diskovni prostor.

5. **Višeobličje** ili **polimorfizam** - kao što je preopterećivanje operatora zgodna stvar ponekad, tako preopterećivanje metoda zovemo polimorfizmom. Moguće je definirati nekoliko metoda istog imena, a svaka će kao parametre primati objekte različitih tipova.



## OO programski jezici

* prevedeni (compiled)
    * C++
    * Eiffel

* prevedeni u bajt-kod, izvršava se u virtualnom stroju
    * Smalltalk
    * Java
    * VB .NET
    * C#

* interpretativni
    * Python