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
            port: 587,
            secure: false,  // Использование STARTTLS
            auth: {
              user: 'codelife.auntification@gmail.com',
              pass: 'upxnpcredqrwfovi'
            },
            logger: true,  // Включить логирование
            debug: true    // Включить подробное отладочное сообщение
          });



        // Email options
        const mailOptions = {
            from: 'codelife.auntification@gmail.com',
            to: 'VoinovAlex1900@yandex.ru',  // Отправка письма самому себе
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
