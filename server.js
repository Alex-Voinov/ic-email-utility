require('dotenv').config();

const http = require('http');

// Создаем сервер
const server = http.createServer((req, res) => {
  // Устанавливаем заголовки ответа
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  // Отправляем HTML-контент
  res.end('<html><body><h1>Привет</h1></body></html>');
});

// Сервер будет слушать на порту 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});