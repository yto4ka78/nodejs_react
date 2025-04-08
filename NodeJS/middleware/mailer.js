const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASS,
  },
});

await transporter.sendMail({
  from: "Цветочный дом <yourmail@gmail.com>",
  to: newEmail,
  subject: "Подтверждение email",
  html: `<p>Код подтверждения: <b>${code}</b></p>`,
});
