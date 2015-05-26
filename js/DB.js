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
            question: 'I hvilket år fikk Norge sin grullov?',
            answer: '1814',
            css: 'carpet-black-A',
            completed: 0
          },
          {
            id: 6,
            category: 'Norsk',
            question: 'Hvor mange bokstaver finnes det i det norske alfabetet?',
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
            answer: 'Fibonaccifølgen',
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
            question: 'Hva er X: 4 * X = 16',
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
            question: 'Hva er X: 2 + X = 8',
            answer: '6',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 15,
            category: '',
            question: '',
            answer: '',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 16,
            category: '',
            question: '',
            answer: '',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 17,
            category: '',
            question: '',
            answer: '',
            css: 'carpet-black-C',
            completed: 0
          },
          {
            id: 18,
            category: '',
            question: '',
            answer: '',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 19,
            category: 'Norsk',
            question: '',
            answer: '',            
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 20,
            category: '',
            question: '',
            answer: '',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 21,
            category: '',
            question: '',
            answer: '',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 22,
            category: 'Geografi',
            question: '',
            answer: '',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 23,
            category: '',
            question: '',
            answer: '',
            css: 'carpet-black-D',
            completed: 0
          },
          {
            id: 24,
            category: '',
            question: '',
            answer: '',            
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 25,
            category: 'Matematikk',
            question: '',
            answer: '',
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 26,
            category: '',
            question: '',
            answer: '',
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 27,
            category: '',
            question: '',
            answer: '',            
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 28,
            category: 'Engelsk',
            question: '',
            answer: '',
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 29,
            category: '',
            question: '',
            answer: '',
            css: 'carpet-black-E',
            completed: 0
          },
          {
            id: 30,
            category: 'Matematikk',
            question: '',
            answer: '',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 31,
            category: 'Matematikk',
            question: '',
            answer: '',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 32,
            category: 'Matematikk',
            question: '',
            answer: '',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 33,
            category: 'Matematikk',
            question: '',
            answer: '',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 34,
            category: 'Norsk',
            question: '',
            answer: '',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 35,
            category: 'Geografi',
            question: '',
            answer: '',
            css: 'carpet-black-F',
            completed: 0
          },
          {
            id: 36,
            category: 'Geografi',
            question: '',
            answer: '',
            css: 'carpet-black-G',
            completed: 0
          },
          {
            id: 37,
            category: 'Geografi',
            question: '',
            answer: '',
            css: 'carpet-black-G',
            completed: 0
          },     
          {
            id: 38,
            category: 'Geografi',
            question: '',
            answer: '',
            css: 'carpet-black-G',
            completed: 0
          },      
          {
            id: 39,
            category: 'Geografi',
            question: '',
            answer: '',
            css: 'carpet-black-G',
            completed: 0
          },
          {
            id: 40,
            category: 'Geografi',
            question: '',
            answer: '',
            css: 'carpet-black-G',
            completed: 0
          },      
          {
            id: 41,
            category: 'Geografi',
            question: '',
            answer: '',
            css: 'carpet-black-G',
            completed: 0
          }
        ]
      }
    ]));
  }
};