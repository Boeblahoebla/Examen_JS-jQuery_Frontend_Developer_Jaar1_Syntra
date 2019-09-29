# Examen Javascript - jQuery (1e zit)

#### API
http://5ca1e35cc1b53400149acb87.mockapi.io/properties

#### Files
http://jnnck.be/examen.zip

### Index Pagina
![Alt text](assets/img/screenshot_index_page.png?raw=true "Title")

Op de index pagina zien we een overzicht van alle huizen in onze database. Standaard is deze
pagina leeg tot de huizen zijn ingeladen van de API.

Na het inladen van de huizen plaats je die naar eigen voorkeur op de pagina. Mag via jQuery, mag
via standaard JS.

Op de indexpagina zie je ook naast de titel het aantal huizen staan (hier 8), hiervoor gebruik je
geen jQuery om dit in te vullen.

Deze lijst update zichzelf ook om de 60 seconden, dat wil zeggen dat als er iemand anders een huis
toevoegd, dat ten laatste na 60 seconden ook op mijn pagina staat, zonder dat ik moet
vernieuwen.

Afbeeldingen uit de API mag je negeren en gewoon vervangen door:
https://placeimg.com/640/480/arch (vrijblijvende tip: als je de nummers in de url een beetje
veranderd krijg je telkens een andere afbeelding)

### Delete functionaliteit
Op de index pagina heeft elk huis een delete knop, door een klik op deze knop wordt het huis
verwijderd op de pagina en op de API.

Gebruik hier zo weinig mogelijk jQuery voor de delete functionaliteit, enkel voor de AJAX call zou
je dit mogen nodig hebben. (dus geen $().click(); enzoverder )
Verder is het ook nutteloos om de volledige API terug in te laden voor 1 item te verwijderen,

verwijder dus gewoon het ene element van de pagina zonder volledig te her-renderen.

### Submit pagina
![Alt text](assets/img/screenshot_submit_page.png?raw=true "Title")

Bij het klikken op submit verstuur je de gegevens uit het formulier naar de API. Het formaat van de
API kan je afleiden uit de data die je binnen krijgt op de index pagina.

Na het submitten moet je terug naar de indexpagina gestuurd worden. Waar dan uiteraard je
nieuwe woning zichtbaar is.

Validatie is niet verplicht maar telt wel mee voor eventuele extra “Eigen Inbreng” punten.

### Eigen inbreng
Heb je tijd over en weet je een leuke extra voor deze oefening? Laat je gaan, Validatie en
verschillende foto per Woning zijn 2 voorbeelden.

### Puntenverdeling
*   Index Functionaliteit (20)
    *  Counter (5)
    *  Overzicht (15)
*   Create Functionaliteit (20)
*   Delete Functionaliteit (20)
*   Scheiding van JS en HTML waar expliciet vermeld om geen jQuery te gebruiken (15)
*   Netheid Code (JS apart, Comments in code, code mooi uitgelijnd) (15)
*   Eigen inbreng aan de oefening (10)
