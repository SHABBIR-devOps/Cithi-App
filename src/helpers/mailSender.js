const nodemailer = require ("nodemailer");
const { otpVerifecationTemplate } = require("./htmlTemplates");
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "shabbirhsifat@gmail.com",
    pass: "dzlr msbc hrrb wbsp",
  },
});






const sendmail =  async (email ,template) => {
  const info = await transporter.sendMail({
    from: "Cithi",
    to: email ,
    subject: "OTP Verifecation",
    text: "Hello world?", // plain‑text body
    html:template , // HTML body
  });

  console.log("Message sent:", info.messageId);
}



module.exports = sendmail