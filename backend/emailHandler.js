const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const { email, emailContent } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vsp.daatstudios@gmail.com',
      pass: 'bxdg lzva vyez kqta', 
    },
  });

  // Define email options
  const mailOptions = {
    from: email, // Sender email
    to: 'vsp.daatstudios@gmail.com', // Recipient email
    subject: 'New Contact Form Submission',
    html: emailContent, // Use the HTML content you passed from the frontend
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

module.exports = sendEmail;
