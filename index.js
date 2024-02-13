var express = require('express');
var app = express();

// Константы
const PORT = 3030;
const HOST = '0.0.0.0';

// Подключение шаблонизатора
app.set('view engine', 'ejs')

// Настройка статики файлов для картинок
app.use(express.static('public'));

// game host
app.get('/host/:id', function (req, res) {
  const date = new Date();
  const month = date.getMonth() + 1; // getMonth() возвращает месяц от 0 до 11, добавляем 1 для получения номера месяца от 1 до 12

  if (month >= 3 && month <= 5) {
    // console.log("Весна");
    res.render("host", { server: req.params.id, season: 'spring' })

  } else if (month >= 6 && month <= 8) {
    // console.log("Лето");
    res.render("host", { server: req.params.id, season: 'summer' })

  } else if (month >= 9 && month <= 11) {
    // console.log("Осень");
    res.render("host", { server: req.params.id, season: 'autumn' })

  } else {
    // console.log("Зима");
    res.render("host", { server: req.params.id, season: 'winter' })
  }
});

// const userAgent = req.headers['user-agent'];
// User Agent: Mozilla/5.0 (Windows; U; Windows NT 6.2; en-US; Valve Client/0; ) AppleWebKit/535.15 (KHTML, like Gecko) Chrome/18.0.989.0 Safari/535.11

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
