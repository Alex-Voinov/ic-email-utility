require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Обслуживание всех статических файлов из папки 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Отправка файла index.html при запросе на /
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ответ на /api/hi
app.get('/api/hi', (req, res) => {
  res.send('Привет');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
