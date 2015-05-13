module.exports = {
  // Load Mock Puzzle Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('Puzzle', JSON.stringify([
      {
        name: 'Oppgaver',
        image: 'Matrix.png',
        variants: [
          {
            id: '0',
            group: 'Geografi',
            question: 'Hva er hovedstaden i Sverige?',
            answer: 'Stockholm',
            css: 'carpet-black-A',
            attemps: 0
          },
          {
            id: '1',
            group: 'Geografi',
            question: 'Hva er hovedstaden i Norge?',
            answer: 'Oslo',
            css: 'carpet-black-A',
            attemps: 0
          },
          {
            id: '2',
            group: 'Matematikk',
            question: 'Hva er 5 * 6 ?',
            answer: 30,
            css: 'carpet-black-A',
            attemps: 0
          },
          {
            id: '3',
            group: 'Matematikk',
            question: 'Hva er 6 * 6 ?',
            answer: 36,
            css: 'carpet-yellow-B',
            attemps: 1
          },
        ]
      }
    ]));
  }
};