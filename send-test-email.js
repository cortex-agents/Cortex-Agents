// send-test-email.js  (node)
const nodemailer = require('nodemailer');
require('dotenv').config(); // if you have dotenv installed; otherwise ensure .env.local is sourced

async function run() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log('Transport verified ✅');
  } catch (err) {
    console.error('Verify failed:', err);
    return;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: 'tester@example.com',
    subject: 'Test email from send-test-email.js',
    text: 'This is a debug test. If you see this in inbox, nodemailer works.',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Send success:', info);
  } catch (err) {
    console.error('Send failed:', err);
  }
}

run();
