import express from 'express'; 

const app = express();
const PORT = 3000;


// The data below is a TEMPORARY database.
const pets = [
  { id: 1, name: 'Fluffy', type: 'cat' },
  { id: 2, name: 'Buddy', type: 'dog' },
  { id: 3, name: 'Goldie', type: 'fish' },
  { id: 4, name: 'Max', type: 'hamster' }
];

const videogames = [
  { id: 1, name: 'The Legend of Zelda: Breath of the Wild', genre: 'Action-adventure' },
  { id: 2, name: 'Super Mario Odyssey', genre: 'Platformer' },
  { id: 3, name: 'GTA V', genre : 'Sandbox' },
  { id: 4, name: 'Kingdom Hearts', genre: 'RPG' }
];

const songs = [
  { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen' },
  { id: 2, title: 'Beat It', artist: 'Michael Jackson' },
  { id: 3, title: 'Hotel California', artist: 'Eagles' },
  { id: 4, title: 'Stairway to Heaven', artist: 'Led Zeppelin' }
];

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.get('/favorite-food', (req, res) => {
  res.json({ message: 'My favorite food is pizza!' });
});

app.get('/videogames', (req, res) => {
  res.json(videogames);
});

app.get('/videogames/count', (req, res) => {
  res.json({ count: videogames.length });
});

app.get('/videogames/:id', (req, res) => {
  const gameId = parseInt(req.params.id);
  const game = videogames.find(g => g.id === gameId);  
})
app.get('/pets', (req, res) => {
  res.json(pets);
});

app.get('/pets/:id', (req, res) => {
  const petId = parseInt(req.params.id);
  const pet = pets.find(p => p.id === petId); 
})
app.get('/songs', (req, res) => {
  res.json(songs);
});

app.get('/songs/:id', (req, res) => {
  const songId = parseInt(req.params.id);
  const song = songs.find(s => s.id === songId);
})
app.get('/songs/count', (req, res) => {
  res.json({ count: songs.length });
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/hello', (req, res) => {
  res.send('Hello, this is the hello route!');
});

app.get('/api/me', (req, res) => {
  const myInfo = {
    name: 'Justin Vincent',
    age: 36,
    occupation: 'Freelance Artist'
  };
  res.json(myInfo);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

