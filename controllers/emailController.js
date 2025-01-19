const nodemailer = require('nodemailer');

// Email sending controller
const sendEmail = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Please provide a text field.' });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Используем Gmail (можно изменить на другой сервис)
      auth: {
        user: process.env.EMAIL_USER, // Ваша почта
        pass: process.env.EMAIL_PASS, // Ваш пароль приложения
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,  // Отправка письма самому себе
      subject: 'Self Email',       // Тема, можно оставить любое значение
      text,                       // Текст письма
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully to yourself!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error.stack });
  }
};

module.exports = { sendEmail };
