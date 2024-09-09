import { createTransport } from 'nodemailer';

const ADMIN_MAIL = process.env.ADMIN_MAIL;

// Create a transporter using Gmail
const transporter = createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: ADMIN_MAIL,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: true,
  },
  debug: false,
});

// Verify connection configuration
const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log('Nodemailer is Ready');
  } catch (error) {
    console.log(error);
  }
};

verifyTransporter();


export default transporter;
