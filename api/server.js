const express = require('express');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => [
    res.send('Hello from server!')
]);

server.get('/wizards', (req, res) => {
    const wizards = [
      {
        id: 1,
        name: 'Harry Potter',
      },
      {
        id: 2,
        name: 'Ronald Weasley',
      },
      {
        id: 3,
        name: 'Hermoine Granger',
      },
      {
        id: 4,
        name: 'Draco Malfoy',
      },
    ];
  
    res.status(200).json(wizards);
  });


server.get('/api/wizards', (req,res) => {
    res.status(200).json(wizards)
});

module.exports = server;