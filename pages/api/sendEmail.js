// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      secureConnection: false,
      debug: true,
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      auth: {
        user: "hello@performancesharks.com",
        pass: "G$i]A4JYCjjqSG3",
      },
    });

    const leadEmailOptions = {
      from: "hello@performancesharek.com",
      to: "salman@mccollinsmedia.com",
      subject: "New Lead from Website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Email options for the thank you message
    const thankYouEmailOptions = {
      from: "hello@performancesharek.com",
      to: email,
      subject: "Thank You for Your Inquiry",
      text: "Thank you for your inquiry. We will get back to you shortly.",
    };

    try {
      // Send the lead email
      await transporter.sendMail(leadEmailOptions);
      // Send the thank you email
      await transporter.sendMail(thankYouEmailOptions);

      res.status(200).json({ status: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "Error sending email" });
    }
  } else {
    res.status(405).json({ status: "Method not allowed" });
  }
}
