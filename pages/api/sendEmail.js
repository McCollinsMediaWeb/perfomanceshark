// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, contact, company, message } = req.body;

    let formData = new FormData();
    formData.append("name", name);
    formData.append("Email", email);
    formData.append("Phone", contact);
    formData.append("Company", company);
    formData.append("Message", message);

    // fetch(
    //   "https://script.google.com/macros/s/AKfycbwMwXQH-bXKmfT1WHgi3_Vix8Xh0XmO-qkT2fJm4q6NAfHKXNj9b0md2gkF4pyxVx7z/exec",
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // )
    //   .then((response) => response.json())
    //   .catch((error) => console.error(error));

    //info@per to mcc

    try {
      // Send the lead email
      fetch(
        "https://script.google.com/macros/s/AKfycbxufCHZecse1AfQMdAImwvPX5TkQnRccb7LpMlsXNpCjOVsqO35nxhL5oXXNPaz4rfw/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) =>
          response.status(200).json({ status: "Email sent successfully" })
        )
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "Error sending email" });
    }
  } else {
    res.status(405).json({ status: "Method not allowed" });
  }
}
