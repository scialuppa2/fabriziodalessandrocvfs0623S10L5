- Per un'esecuzione ottimale dell'applicazione è necessaria l'installazione di react-bootstrap.

- Sono presenti delle icone per il meteo importate nella cartella "assets" ed assegnate alle card in base alla descrizione del tempo ottenuta dall'API. Per collegarle ho utilizzato un file.json presente nella cartella "data".

- In partenza l'Applicazione utilizzerà la geolocalizzazione per la chiamata API, se accettata dall'utente. Altrimenti mostrerà un risultato di default. Dopodichè si potrà procedere con la ricerca di altre città utilizzando la barra apposita.

- Ecco la struttura dell'applicazione:


+-----------------------+
|        MyNavbar       |
+-----------------------+
|                       |
|      AppContainer     |
|       +---------+     |
|       |         |     |
|   +---v---+ +---v---+-|
|   |SearchBar| |Weather| 
|   +-------+-+ +-------+ 
|           |   |       | 
|      +----v---v---+   | 
|      |   Image    |   | 
|      +------------+   | 
|           |           | 
|      +----v---+       | 
|      |NextDays |      | 
|      +-------- +      | 
|                       | 
+-----------------------+ 
|       MyFooter        | 
+-----------------------+ 


App.js: Il componente principale che agisce come contenitore per gli altri componenti.
Inizializza lo stato dell'applicazione.
Rappresenta la struttura di base dell'interfaccia utente.

MyNavbar: Rappresenta la barra di navigazione superiore dell'applicazione. Contiene il logo.

AppContainer: Gestisce la logica del tempo e della ricerca. Contiene SearchBar, Weather, e NextDays.

SearchBar: Componente per la barra di ricerca che permette all'utente di cercare una località.

Weather: Mostra le informazioni meteorologiche per una determinata posizione.
Comunica con un servizio API meteorologico per ottenere dati in tempo reale.
Visualizza le informazioni meteorologiche, come temperatura, condizioni atmosferiche, ecc.

Image: Componente utilizzato per mostrare lo sfondo basato sulla località. Effettua una chiamata al servizio API Teleport di ricerca immagini delle città.

NextDays: Mostra le previsioni meteorologiche per i prossimi giorni.
Effettua una chiamata API per ottenere previsioni a lungo termine.
Visualizza le previsioni meteorologiche per i prossimi giorni tramite card.

MyFooter: Rappresenta la parte inferiore dell'applicazione.



Test Effettuati in App.test.js

Test di Rendering App: Verifica che il componente App sia in grado di essere renderizzato senza errori.

Test di Ricerca e Aggiornamento Weather: Verifica che il componente Weather si aggiorni correttamente in seguito alla ricerca di una nuova posizione.

Test di Rendering NextDays: Verifica che il componente NextDays sia in grado di renderizzarsi correttamente.

