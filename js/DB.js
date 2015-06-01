module.exports = {
  // Load Mock Puzzle Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('Puzzle', JSON.stringify([
      {
        name: 'Oppgaver',
        image: 'Matrix.png',
        currentQuestionId: 0,
        variants: [
          {
            id: 0,
            category: 'Matematikk',
            question: 'Hva er kvadratroten av 250?',
            answer: '50',
            css: 'carpet-black-A',
            completed: 0
          },
          {
            id: 1,
            category: 'Engelsk',
            question: 'Hva betyr: What´s the clock?',
            answer: 'Hva er klokken',
            css: 'carpet-black-A',
            completed: 0
          },
          {
            id: 2,
            category: 'Engelsk',
            question: 'Hva betyr: What is your name?',
            answer: 'Hva heter du',
            css: 'carpet-black-A',
            completed: 0
          },
          {
            id: 3,
            category: 'Matematikk',
            question: 'Hva er 4 i annen?',
            answer: '16',
            css: 'carpet-black-A',
            completed: 0
          },
          {
            id: 4,
            category: 'Matematikk',
            question: 'Hva er 24 delt på 2',
            answer: '12',
            css: 'carpet-black-A',
            completed: 0
          },
          {
            id: 5,
            category: 'Historie',
            question: 'I hvilket år fikk Norge sin grunnlov?',
            answer: '1814',
            css: 'carpet-black-A',
            completed: 0
          },
          {
            id: 6,
            category: 'Norsk',
            question: 'Antall bokstaver i det norske alfabetet?',
            answer: '29',
            css: 'carpet-black-B',
            completed: 0
          },
          {
            id: 7,
            category: 'Matematikk',
            question: 'Er -3 et positivt eller et negativt tall?',
            answer: 'negativt',
            css: 'carpet-black-B',
            completed: 0
          },
          {
            id: 8,
            category: 'Norsk',
            question: 'Idag skal jeg løpe. I går ____ jeg',
            answer: 'løp',
            css: 'carpet-black-B',
            completed: 0
          },
          {
            id: 9,
            category: 'Matematikk',
            question: 'Skriv inn tallene i stigende rekkefølge: [6 5 8 99]',
            answer: '5 6 8 99',
            css: 'carpet-black-B',
            completed: 0
          },
          {
            id: 10,
            category: 'Matematikk',
            question: 'Hva heter denne kjente tall-rekkefølgen? [1 1 2 3 5 8]',
            answer: 'Fibonacci',
            css: 'carpet-black-B',
            completed: 0
          },
          {
            id: 11,
            category: 'Matematikk',
            question: 'Hva er PI',
            answer: '3,14',
            css: 'carpet-black-B',
            completed: 0
          },
          {
            id: 12,
            category: 'Matematikk',
            question: '4 * X = 16. Hva er X?',
            answer: '4',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 13,
            category: 'Engelsk',
            question: 'Hva betyr: I am Norwegian',
            answer: 'jeg er norsk',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 14,
            category: 'Matematikk',
            question: '2 + X = 8. Hva er X?',
            answer: '6',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 15,
            category: 'Matematikk',
            question: 'Hva er 50% av 200?',
            answer: '100',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 16,
            category: 'Historie',
            question: 'Hvilke farge er det mest av i det norske flagget?',
            answer: 'rød',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 17,
            category: 'Geografi',
            question: 'Hvor mange land inngår i Storbrittania?',
            answer: '5',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 18,
            category: 'Geografi',
            question: 'I hvilket fylke ligger Bergen?',
            answer: 'Hordaland',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 19,
            category: 'Norsk',
            question: 'Nå holder jeg på med quiz. I går ___ jeg på med et spill.',
            answer: 'holdt',            
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 20,
            category: 'Matematikk',
            question: '(2x2) + (4x4) = ________',
            answer: '20',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 21,
            category: 'Matematikk',
            question: '(2x2) x (1x4) = _________',
            answer: '16',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 22,
            category: 'Geografi',
            question: 'Hva er Norges høyeste fjell?',
            answer: 'Galdhøpiggen',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 23,
            category: 'Matematikk',
            question: 'Hva er kvadratroten av 25',
            answer: '5',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 24,
            category: 'Engelsk',
            question: 'Hva betyr: What is my name?',
            answer: 'Hva heter jeg',            
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 25,
            category: 'Geografi',
            question: 'I hvilket kontinent ligger Norge?',
            answer: 'Europa',
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 26,
            category: 'Geografi',
            question: 'Hva er hovedstaden i England?',
            answer: 'London',
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 27,
            category: 'Geografi',
            question: 'Hva er hovedstaden i Frankrike?',
            answer: 'Paris',            
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 28,
            category: 'Geografi',
            question: 'Hva er hovedstaden i Sverige?',
            answer: 'Stockholm',
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 29,
            category: 'Fysikk',
            question: 'Hvor mye av et isfjell flyter (1/10 eller 1/5 eller 1/2)?',
            answer: '1/10',
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 30,
            category: 'Kroppen',
            question: 'Ca hvor mange muskler finnes det i kroppen?',
            answer: '600',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 31,
            category: 'Kroppen',
            question: 'Hvor mange knokler finnes det i kroppen?',
            answer: '200',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 32,
            category: 'IT',
            question: 'Hva er selve hjernen i datamaskinen?',
            answer: 'CPU',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 33,
            category: 'Matematikk',
            question: 'Hva er 512 + 512?',
            answer: '1024',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 34,
            category: 'Gåte',
            question: 'Hvem må alle ta av seg hatten for?',
            answer: 'Frisøren',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 35,
            category: 'Matematikk',
            question: 'Hva er 560 - 530?',
            answer: '30',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 36,
            category: 'Gåte',
            question: 'Hva er full av kunnskap, men vet ikke noe som helst?',
            answer: 'Bokhyllen',
            css: 'carpet-black-G',
            completed: 0
          },
          {
            id: 37,
            category: 'Engelsk',
            question: 'Hva betyr: How are you doing?',
            answer: 'Hvordan går det',
            css: 'carpet-black-G',
            completed: 0
          },     
          {
            id: 38,
            category: 'Geografi',
            question: 'Hvor mange fylker finnes det i Norge?',
            answer: '19',
            css: 'carpet-black-G',
            completed: 0
          },      
          {
            id: 39,
            category: 'Geografi',
            question: 'Hvor mange land utgjør Norden?',
            answer: '5',
            css: 'carpet-black-G',
            completed: 0
          },
          {
            id: 40,
            category: 'Geografi',
            question: 'Hvor mange land utgjør Skandinavia?',
            answer: '3',
            css: 'carpet-black-G',
            completed: 0
          },      
          {
            id: 41,
            category: 'Geografi',
            question: 'Hvilket velkjent (ferie-)land ligger sør for Norge?',
            answer: 'Danmark',
            css: 'carpet-black-G',
            completed: 0
          }
        ]
      }
    ]));
  }
};