const musiciansArray1 = [
  { name: 'Musician A', instrument: 'Piano', genre: 'Classical', experience: 8 },
  { name: 'Musician B', instrument: 'Guitar', genre: 'Rock', experience: 4 },
];

const musiciansArray2 = [
  { name: 'Musician C', instrument: 'Drums', genre: 'Jazz', experience: 6 },
  { name: 'Musician D', instrument: 'Violin', genre: 'Classical', experience: 10 },
];


const mergedMusicians = [...musiciansArray1, ...musiciansArray2];


const experiencedMusicians = mergedMusicians.filter(musician => musician.experience >= 5);


const updatedMusicians = experiencedMusicians.map(musician => ({
  ...musician,
  experience: musician.experience + 2
}));

const firstGuitarist = updatedMusicians.find(musician => musician.instrument === 'Guitar');


const hasJazzMusician = updatedMusicians.some(musician => musician.genre === 'Jazz');


console.log('Updated Musicians:', updatedMusicians);
console.log('First Musician who plays Guitar:', firstGuitarist);
console.log('Is there any Jazz musician?', hasJazzMusician);