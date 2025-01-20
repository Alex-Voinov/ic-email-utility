require('dotenv').config();

const mailer = require('./mailer'); 
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Обслуживание всех статических файлов из папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Отправка файла index.html при запросе на /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/sendRequest', async (req, res) => {
    try {
      const { text } = req.body;
  
      // Проверка на обязательные поля
      if ( !text) {
        return res.status(400).send('Недостающие обязательные данные');
      }
  
      // Отправка почты через mailer
      const result = await mailer.sendEmail(text);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send('Ошибка при отправке почты: ' + error.message);
    }
  });

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});