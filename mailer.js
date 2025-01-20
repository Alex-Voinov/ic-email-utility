const nodemailer = require('nodemailer');

// Создание транспортера с данными из .env
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_PORT === '465', // true для 465 порта, false для других
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

// Функция для отправки почты
const sendEmail = async ( text) => {
  const mailOptions = {
    from: process.env.MAIL_USER,  // Отправитель
    to: process.env.MAIL_USER,    // Получатель
    subject: 'new request',        // Тема письма
    text: text                    // Текст письма
  };

  console.log(transporter)

  try {
    const info = await transporter.sendMail(mailOptions);
    return `Письмо отправлено: ${info.response}`;
  } catch (error) {
    throw new Error('Ошибка при отправке письма: ' + error.message);
  }
};

module.exports = {
  sendEmail
};
