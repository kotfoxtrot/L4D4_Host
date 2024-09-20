var express = require('express');
var app = express();

// Constants
const PORT = 3050;
const HOST = '0.0.0.0';

// Add ejs ejs generate
app.set('view engine', 'ejs')

// Setting up static files for images
app.use(express.static('public'));

function getSeason() {
  const month = new Date().getMonth() + 1; // getMonth() returns the month from 0 to 11, add 1 to get the month number from 1 to 12
  if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else if (month >= 9 && month <= 11) {
    return 'autumn';
  } else {
    return 'winter';
  }
}
app.get('/host/:id', async function (req, res) {
  res.render("host", { server: req.params.id, season: getSeason() });
});

// const userAgent = req.headers['user-agent'];
// User Agent: Mozilla/5.0 (Windows; U; Windows NT 6.2; en-US; Valve Client/0; ) AppleWebKit/535.15 (KHTML, like Gecko) Chrome/18.0.989.0 Safari/535.11

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
