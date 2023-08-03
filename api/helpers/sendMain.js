const nodemailer = require("nodemailer")

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: "vc8bptest@gmail.com",
      pass: "lcguwrjcatuwsrjj",
    },
    from: "vc8bptest@gmail.com"
  });


  const mailOptions = {
    from: `Durga State`,
    to: options.to,
    subject: options.subject,
    html: options.emailhtml,
    text: options?.emailtext || options.emailhtml,
  };

  transporter.sendMail(mailOptions,  (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;