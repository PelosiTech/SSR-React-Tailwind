const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

const coffeeStores = [
  {
    header: 'Starbucks',
    subHeader: 'Seattle, USA',
    description: 'Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington.',
  },
  {
    header: 'Blue Bottle',
    subHeader: 'Oakland, USA',
    description: 'Blue Bottle Coffee, Inc. is a coffee roaster and retailer headquartered in Oakland, California, United States.',
  },
  {
    header: 'Dutch Bros',
    subHeader: 'Grants Pass, USA',
    description: 'Dutch Bros Coffee is a privately held drive-through coffee chain headquartered in Grants Pass, Oregon, United States.',
  },
  {
    header: 'Costa Coffee',
    subHeader: 'Dunstable, UK',
    description: 'Costa Coffee is a British coffeehouse chain which is a subsidiary of The Coca-Cola Company.',
  },
  {
    header: 'Caffè Nero',
    subHeader: 'London, UK',
    description: 'Caffè Nero is a British European style coffee house brand headquartered in London, England.',
  }
];


app.use('/', expressStaticGzip(path.join(__dirname, 'build'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
}));

app.get('/api/search', (req, res) => {
  const searchTerm = req.query.q;
  const results = coffeeStores.filter(store => 
    store.header.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.json(results);
});

app.get('/api/coffeeStores', (req, res) => {
  res.json(coffeeStores);
});

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
