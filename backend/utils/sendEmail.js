const nodemailer = require("nodemailer");

// Reusable email sender
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Gmail App Password
  },
});

module.exports = async function sendEmail(to, subject, text) {
  try {
    await transporter.sendMail({
      from: `"HireFlow" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });
  } catch (err) {
    console.error("Email send error:", err);
    throw new Error("Email service failed");
  }
};
