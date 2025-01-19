const nodemailer = require('nodemailer');

// Email sending controller
const sendEmail = async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).json({ error: 'Please provide to, subject, and text fields.' });
  }

  try {
    console.log('123')
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
      to,
      subject,
      text,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
};

module.exports = { sendEmail };
