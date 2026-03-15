import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class Service {
  private arguments = [
    { id: 0, title: 'Sport', iconClass: 'fa-solid fa-futbol' },
    { id: 1, title: 'Cinema', iconClass: 'fa-solid fa-film' },
    { id: 2, title: 'Musica', iconClass: 'fa-solid fa-music' },
    { id: 3, title: 'Tecnologia', iconClass: 'fa-solid fa-microchip' },
  ];

  getRules() {
    return [
      { id: 0, text: "Ti verranno poste 10 domande sull'argomento scelto;" },
      { id: 1, text: "Per ogni domanda dovrai scegliere la risposta corretta tra le quattro proposte;" },
      { id: 2, text: "Avrai 15 secondi per rispondere a ciascuna domanda;" },
      { id: 3, text: "Potrai vedere l'esito di ciascun quesito e tutti i risultati al termine." }
    ];
  }

  getArguments() {
    return this.arguments;
  }

  getCurrentArgument() {
    return this.arguments[this.selectedArgument];
  }

  private selectedArgument: number = -1;

  getSelectedArgument() {
    return this.selectedArgument;
  }

  setSelectedArgument(selectedArgument: number) {
    this.selectedArgument = selectedArgument;
  }

  isSelectedArgument(index: number): boolean {
    return this.selectedArgument === index;
  }

  getCurrentTrivias() {
    switch (this.selectedArgument) {
      case 0:
        return this.sportsTrivia;

      case 1:
        return this.moviesTrivia;

      case 2:
        return this.musicTrivia;

      case 3:
        return this.techTrivia;
    }

    return null;
  }

  getCurrentTrivia(idx: number) {
    switch (this.selectedArgument) {
      case 0:
        return this.sportsTrivia[idx];

      case 1:
        return this.moviesTrivia[idx];

      case 2:
        return this.musicTrivia[idx];

      case 3:
        return this.techTrivia[idx];
    }

    return null;
  }

  getCurrentQuestion(idx: number) {
    switch (this.selectedArgument) {
      case 0:
        return this.sportsTrivia[idx].question;

      case 1:
        return this.moviesTrivia[idx].question;

      case 2:
        return this.musicTrivia[idx].question;

      case 3:
        return this.techTrivia[idx].question;
    }

    return null;
  }

  getCorrectAnswer(idx: number) {
    switch (this.selectedArgument) {
      case 0:
        return this.sportsTrivia[idx].answers[this.sportsTrivia[idx].correctAnswer];

      case 1:
        return this.moviesTrivia[idx].answers[this.moviesTrivia[idx].correctAnswer];

      case 2:
        return this.musicTrivia[idx].answers[this.musicTrivia[idx].correctAnswer];

      case 3:
        return this.techTrivia[idx].answers[this.techTrivia[idx].correctAnswer];
    }

    return null;
  }

  setCurrentTriviaUserAnswer(idx: number, userAnswer: number) {
    switch (this.selectedArgument) {
      case 0:
        this.sportsTrivia[idx].userAnswer = userAnswer;
        break;

      case 1:
        this.moviesTrivia[idx].userAnswer = userAnswer;
        break;

      case 2:
        this.musicTrivia[idx].userAnswer = userAnswer;
        break;

      case 3:
        this.techTrivia[idx].userAnswer = userAnswer;
        break;

    }
  }

  resetQuiz() {
    this.selectedArgument = -1;

    for (let i = 0; i < this.sportsTrivia.length; i++) {
      this.sportsTrivia[i].userAnswer = -1;
    }
    for (let i = 0; i < this.moviesTrivia.length; i++) {
      this.moviesTrivia[i].userAnswer = -1;
    }
    for (let i = 0; i < this.musicTrivia.length; i++) {
      this.musicTrivia[i].userAnswer = -1;
    }
    for (let i = 0; i < this.techTrivia.length; i++) {
      this.techTrivia[i].userAnswer = -1;
    }
  }

  private sportsTrivia = [
    {
      id: 0,
      question: 'Quale nazione ha vinto il maggior numero di Coppe del Mondo FIFA?',
      answers: ['Italia', 'Germania', 'Brasile', 'Argentina'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 1,
      question: 'Qual è il nome del velocista giamaicano noto con il soprannome "Saetta"?',
      answers: ['Carl Lewis', 'Usain Bolt', 'Michael Johnson', 'Jesse Owens'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 2,
      question: 'In quale famoso evento di ciclismo il leader indossa la Maglia Gialla?',
      answers: ['Giro d\'Italia', 'Vuelta a España', 'Campionati del Mondo', 'Tour de France'],
      correctAnswer: 3,
      userAnswer: -1
    },
    {
      id: 3,
      question: 'Quale leggendario giocatore di basket è stilizzato\nnel logo ufficiale della NBA?',
      answers: ['Jerry West', 'Michael Jordan', 'Kareem Abdul-Jabbar', 'LeBron James'],
      correctAnswer: 0,
      userAnswer: -1
    },
    {
      id: 4,
      question: 'Quale di questi tornei NON fa parte del "Grande Slam" del tennis?',
      answers: ['Australian Open', 'US Open', 'Internazionali BNL d\'Italia', 'Roland Garros'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 5,
      question: 'Quale pilota di Formula 1 è stato il primo a vincere 7 Campionati del Mondo?',
      answers: ['Michael Schumacher', 'Sebastian Vettel', 'Nico Rosberg', 'Niki Lauda'],
      correctAnswer: 0,
      userAnswer: -1
    },
    {
      id: 6,
      question: 'Il Biathlon è una disciplina invernale che combina due diverse attività. Quali?',
      answers: ['Sci alpino e tiro al piattello', 'Pattinaggio e lancio del giavellotto', 'Sci di fondo e tiro a segno', 'Sci di fondo e salto con gli sci'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 7,
      question: 'Quale nazione rappresentano la squadra di rugby degli All Blacks?',
      answers: ['Sudafrica', 'Nuova Zelanda', 'Australia', 'Galles'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 8,
      question: 'Quanti anelli colorati sono presenti sulla bandiera olimpica ufficiale?',
      answers: ['Tre', 'Quattro', 'Sei', 'Cinque'],
      correctAnswer: 3,
      userAnswer: -1
    },
    {
      id: 9,
      question: 'Qual era il vero nome della celebre icona della boxe Muhammad Ali?',
      answers: ['Sonny Liston', 'Cassius Clay', 'George Foreman', 'Joe Frazier'],
      correctAnswer: 1,
      userAnswer: -1
    },
  ]

  private moviesTrivia = [
    {
      id: 0,
      question: 'Quale attore ha interpretato il ruolo di Vito Corleone nel film "Il Padrino"?',
      answers: ['Al Pacino', 'Robert De Niro', 'Marlon Brando', 'James Caan'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 1,
      question: 'Qual è stato il primo film d\'animazione della Disney interamente a colori?',
      answers: ['Biancaneve e i sette nani', 'Bambi', 'Dumbo', 'Pinocchio'],
      correctAnswer: 0,
      userAnswer: -1
    },
    {
      id: 2,
      question: 'Qual è il nome del maestro Jedi che addestra\nLuke Skywalker sul pianeta Dagobah?',
      answers: ['Mace Windu', 'Qui-Gon Jinn', 'Obi-Wan Kenobi', 'Yoda'],
      correctAnswer: 3,
      userAnswer: -1
    },
    {
      id: 3,
      question: 'Qual è il nome dell\'attrice che ha interpretato la regina Galadriel\nnella trilogia de "Il Signore degli Anelli"?',
      answers: ['Kate Winslet', 'Cate Blanchett', 'Meryl Streep', 'Nicole Kidman'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 4,
      question: 'Quale film detiene il record per il maggior numero di Oscar\nvinti insieme a "Ben-Hur" e "Titanic"?',
      answers: ['La La Land', 'Via col vento', 'Forrest Gump', 'Il Signore degli Anelli - Il Ritorno del Re'],
      correctAnswer: 3,
      userAnswer: -1
    },
    {
      id: 5,
      question: 'Quale indumento indossato da Dorothy Gale\nla riporta a casa nel film "Il Mago di Oz"?',
      answers: ['Scarpe d\'argento', 'Scarpette rosse', 'Scarpe di cristallo', 'Stivali di cuoio'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 6,
      question: 'Qual è il famoso film del 1960 noto per la celebre "scena della doccia"?',
      answers: ['Gli Uccelli', 'La finestra sul cortile', 'Intrigo internazionale', 'Psycho'],
      correctAnswer: 3,
      userAnswer: -1
    },
    {
      id: 7,
      question: 'Quale attore è stato il primo ad interpretare l\'Agente 007 al cinema?',
      answers: ['Roger Moore', 'Timothy Dalton', 'Sean Connery', 'Pierce Brosnan'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 8,
      question: 'Qual è il nome del dottore eccentrico che fa parte del film "Ghostbusters"?',
      answers: ['Dr. Zivago', 'Dr. Peter Venkman', 'Dr. Alan Grant', 'Dr. Emmett "Doc" Brown'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 9,
      question: 'Quale iconico regista del genere Western è autore\ndi "Ombre Rosse" e "Sentieri Selvaggi"?',
      answers: ['Sergio Leone', 'Clint Eastwood', 'Akira Kurosawa', 'John Ford'],
      correctAnswer: 3,
      userAnswer: -1
    },
  ]

  private musicTrivia = [
    {
      id: 0,
      question: 'Chi è il celebre cantante americano noto con il\nsoprannome di "The King of Rock and Roll"?',
      answers: ['Elvis Presley', 'Chuck Berry', 'Little Richard', 'Jerry Lee Lewis'],
      correctAnswer: 0,
      userAnswer: -1
    },
    {
      id: 1,
      question: 'In quale album dei Queen è stata pubblicata la\ncelebre canzone "Bohemian Rhapsody"?',
      answers: ['A Day At The Races', 'A Night At The Opera', 'The Works', 'News Of The World'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 2,
      question: 'Quale celebre compositore divenne quasi completamente\nsordo negli ultimi anni della sua vita?',
      answers: ['Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Ludwig van Beethoven', 'Franz Schubert'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 3,
      question: 'Dove si è tenuto l\'ultimo concerto dei Beatles,\nsvolto su un tetto a Londra?',
      answers: ['Al Cavern Club', 'Al Shea Stadium', 'Sul tetto della Apple Records', 'Al Budokan di Tokyo'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 4,
      question: 'Quale artista è universalmente riconosciuto come il "Re del Pop"?',
      answers: ['Prince', 'Madonna', 'George Michael', 'Michael Jackson'],
      correctAnswer: 3,
      userAnswer: -1
    },
    {
      id: 5,
      question: 'Quale nazione caraibica è la patria del genere\nmusicale Reggae e di Bob Marley?',
      answers: ['Giamaica', 'Cuba', 'Haiti', 'Barbados'],
      correctAnswer: 0,
      userAnswer: -1
    },
    {
      id: 6,
      question: 'Qual è il titolo dell\'album dei Pink Floyd la cui copertina\nche raffigura un prisma che scompone la luce?',
      answers: ['The Wall', 'Wish You Were Here', 'Animals', 'The Dark Side of the Moon'],
      correctAnswer: 3,
      userAnswer: -1
    },
    {
      id: 7,
      question: 'Chi era il trombettista americano noto per essere una\ndelle figure più importanti del jazz del XX secolo?',
      answers: ['Duke Ellington', 'Miles Davis', 'Louis Armstrong', 'Charlie Parker'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 8,
      question: 'Qual è il film del 1977 che ha reso popolare\nil genere Disco e ha lanciato i Bee Gees?',
      answers: ['Grease', 'Fame', 'Flashdance', 'Saturday Night Fever'],
      correctAnswer: 3,
      userAnswer: -1
    },
    {
      id: 9,
      question: 'Quale icona della musica pop/rock negli anni \'90 ha cambiato\nil suo nome d\'arte in un simbolo impronunciabile?',
      answers: ['Prince', 'David Bowie', 'Boy George', 'Marilyn Manson'],
      correctAnswer: 0,
      userAnswer: -1
    },
  ]

  private techTrivia = [
    {
      id: 0,
      question: 'Quale sistema operativo è stato realizzato inizialmente da Apple?',
      answers: ['Windows', 'Linux', 'macOS', 'Android'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 1,
      question: 'Quale acronimo viene utilizzato per indicare\nla memoria volatile di un computer?',
      answers: ['RAM', 'ROM', 'GPU', 'CPU'],
      correctAnswer: 0,
      userAnswer: -1
    },
    {
      id: 2,
      question: 'Quale protocollo di rete è fondamentale\nper il funzionamento di Internet?',
      answers: ['FTP', 'TCP/IP', 'HTTP', 'SMTP'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 3,
      question: 'Chi è il co-fondatore di Microsoft?',
      answers: ['Steve Jobs', 'Jeff Bezos', 'Mark Zuckerberg', 'Bill Gates'],
      correctAnswer: 3,
      userAnswer: -1
    },
    {
      id: 4,
      question: 'Quale linguaggio di programmazione è maggiormente\nutilizzato per l\'intelligenza artificiale?',
      answers: ['C++', 'Java', 'Python', 'Assembly'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 5,
      question: 'Qual è considerata la prima console per videogiochi\ndomestica rilasciata in commercio nel 1972?',
      answers: ['Nintendo Entertainment System', 'Magnavox Odyssey', 'Atari 2600', 'Sega Master System'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 6,
      question: 'Come si chiama il processo con cui i motori di ricerca\ndeterminano la rilevanza e il posizionamento dei risultati?',
      answers: ['Algoritmo di Ranking', 'Blockchain', 'Firewall', 'Cloud Computing'],
      correctAnswer: 0,
      userAnswer: -1
    },
    {
      id: 7,
      question: 'Quale unità di misura standard si utilizza per\nindicare la velocità del clock di un processore?',
      answers: ['Byte', 'Volt', 'Gigahertz', 'Pixel'],
      correctAnswer: 2,
      userAnswer: -1
    },
    {
      id: 8,
      question: 'Da dove deriva il termine informatico "bug"?',
      answers: ['Da un errore di battitura', 'Dal ritrovamento di un insetto in un relè', 'Dalle prime schede perforate difettose', 'Dal nome del primo computer che si bloccò'],
      correctAnswer: 1,
      userAnswer: -1
    },
    {
      id: 9,
      question: 'Qual è la prima e più famosa criptovaluta decentralizzata?',
      answers: ['Ethereum', 'Dogecoin', 'Bitcoin', 'Ripple'],
      correctAnswer: 2,
      userAnswer: -1
    },
  ]
}