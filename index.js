require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dns = require('dns')
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
// app.get('/api/shorturl', function(req, res) {
//   res.json({ greeting: req.body });
//   dns.lookup('store.steampowered.com', (err, address, family) => {
//     if (err) return console.error(err);
//     console.log('address:', address)
//     console.log('family:', family)
//   })
// });

app.post('/api/shorturl', function(req, res) {
  const data = req.body
  console.log('url:', data.url)
  res.send('Form submitted')
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
