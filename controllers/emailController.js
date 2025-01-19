const nodemailer = require('nodemailer');

// Email sending controller
const sendEmail = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Please provide a text field.' });
  }

  try {
    console.log(234)
    // Create a transporter
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,  // Используйте 465 для SSL
        secure: false,  // false для TLS, true для SSL
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false,  // Чтобы избежать ошибок с SSL-соединением
        },
      });
      

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,  // Отправка письма самому себе
      subject: 'Self Email',       // Тема, можно оставить любое значение
      text,                       // Текст письма
    };

    console.log(mailOptions)

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully to yourself!' });
    console.log(123)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Failed to send email', details: error.stack });
  }
};

module.exports = { sendEmail };
