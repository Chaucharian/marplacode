require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

router.use((req, res, next) => {
  console.log("/" + req.method);
  next();
});

app.use(express.json());
app.use(express.static("dist"));
app.use("/examples", express.static("examples"));
app.use("/not-gamp-machine", express.static("not-gamp-machine/dist"));
app.use("/", router);

app.listen(port, "0.0.0.0", () => console.log(`Serving UI at ${port}!`));

router.get("/", (req, res) => res.sendFile("index.html"));

router.post("/sendEmail", async (req, res) => {
  const { email } = req.body;
  try {
    await sendEmail(email);
    res.status(200).send(JSON.stringify({ success: true }));
  } catch (error) {
    res.status(500).send(JSON.stringify({ success: false, message: error }));
  }
});

async function sendEmail(email) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"TeAnoto "teanotobusiness@gmail.com', // sender address
    to: "agustinsalinas@outlook.com", // list of receivers
    subject: "Cliente interesado", // Subject line
    text: `Comunicarse con este cliente ${email}`, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
}
