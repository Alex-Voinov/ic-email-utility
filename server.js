require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Отправка файлов верстки на / 
app.get('/', (req, res) => {
  // Отправляем HTML файл, например, index.html
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ответ на /api/hi
app.get('/api/hi', (req, res) => {
  res.send('Привет');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});