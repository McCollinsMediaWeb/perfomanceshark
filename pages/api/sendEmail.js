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

    fetch(
      "https://script.google.com/macros/s/AKfycbyc1yi9SRiwKUocR30GcilqBE3z8_Kdzumj-7ijaFAdducnrfmXL2OFsKTXvvkGjXOP/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) =>
        response.status(200).json({ status: "Email sent successfully" })
      )
      .catch((error) => console.error(error));

    // // Configure Nodemailer transport
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.office365.com",
    //   secure: false,
    //   port: "587",
    //   tls: {
    //     ciphers: "SSLv3",
    //     rejectUnauthorized: false,
    //   },
    //   auth: {
    //     // user: "hello@performancesharks.com",
    //     // pass: "Mccollins2024",
    //     user: "info@performancesharks.com",
    //     pass: "G$i]A4JYCjjqSG4",
    //   },
    //   debug: true,
    //   logger: true,
    // });

    // const leadEmailOptions = {
    //   from: "info@performancesharks.com",
    //   to: "info@performancesharks.com",
    //   subject: "New Lead from Website",
    //   text: `Name: ${name}\nEmail: ${email}\nContact: ${contact}\nCompany ${company}\nMessage: ${message}`,
    // };

    // Email options for the thank you message
    // const thankYouEmailOptions = {
    //   from: "info@performancesharks.com",
    //   to: email,
    //   subject: "Performance Sharks - Thank you for connecting with us !",
    //   //   html: htmlContent,
    //   text: "Thank you for contacting us",
    // };

    //     const htmlContent = `<!DOCTYPE html
    //   PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    // <html xmlns="http://www.w3.org/1999/xhtml">

    // <head>
    //   <title>
    //     Web Development Company in Dubai | Web Design Company Dubai-Mccollins
    //   </title>
    //   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    //   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    //   <meta name="x-apple-disable-message-reformatting" />

    //   <style>
    //     @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    //   </style>
    //   <style type="text/css">
    //     body{
    //       font-family: "Poppins", sans-serif;
    //     }

    //     * {
    //       -ms-text-size-adjust: 100%;
    //       -webkit-text-size-adjust: none;
    //       -webkit-text-resize: 100%;
    //       text-resize: 100%;
    //       font-family: "Poppins", sans-serif;
    //     }

    //     * {
    //       -webkit-text-size-adjust: none;
    //     }

    //     a {
    //       outline: none;
    //       color: #40aceb;
    //       text-decoration: underline;
    //     }
    //   </style>
    // </head>

    // <body style="margin: 0; padding: 0" bgcolor="#ffffff">
    //   <table style="min-width: 320px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
    //     <tbody>
    //       <tr style="border-collapse: collapse">
    //         <td style="padding: 0; margin: 0" valign="top">
    //           <table style="
    //                 width: 680px !important;
    //                 border-collapse: collapse;
    //                 border-spacing: 0px;
    //                 padding: 0;
    //                 margin: 0;
    //                 width: 100%;
    //                 height: 100%;
    //                 background-repeat: repeat;
    //                 background-position: center top;
    //               " width="680" cellspacing="0" cellpadding="0">
    //             <tbody>
    //               <tr style="border-collapse: collapse">
    //                 <td style="
    //                       min-width: 680px;
    //                       font-size: 0;
    //                       line-height: 0;
    //                       padding: 0;
    //                       margin: 0;
    //                     ">
    //                   &nbsp;
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </td>
    //       </tr>
    //       <tr style="border-collapse: collapse">
    //         <td style="padding: 0; margin: 0" valign="top">
    //           <table style="
    //                 border-collapse: collapse;
    //                 border-spacing: 0px;
    //                 padding: 0;
    //                 margin: 0;
    //                 width: 100%;
    //                 height: 100%;
    //                 background-repeat: repeat;
    //                 background-position: center top;
    //               " width="100%" cellspacing="0" cellpadding="0">
    //             <tbody>
    //               <tr style="border-collapse: collapse">
    //                 <td style="padding: 0; margin: 0" valign="top" bgcolor="#ffffff">
    //                   <table style="margin: 0 auto" width="680" cellspacing="0" cellpadding="0" border="0" align="center">
    //                     <tbody>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="#" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/1.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="#" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/space.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <p style='font-family: "Poppins", sans-serif;font-weight: 400;font-size: 19px;line-height: 19px;margin: 0;padding: 0;color:#000000 !important;background-color: #ffffff !important;' bgcolor="#ffffff">Hello ${name},</p>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="#" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/space.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <p style='font-family: "Poppins", sans-serif;font-weight: 400;font-size: 19px;line-height: 19px;margin: 0;padding: 0;color:#000000 !important;background-color: #ffffff !important;' bgcolor="#ffffff">Thanks for reaching out to us !</p>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="#" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/space.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <p style='font-family: "Poppins", sans-serif;font-weight: 400;font-size: 19px;line-height: 25px;margin: 0;padding: 0;color:#000000 !important;background-color: #ffffff !important;' bgcolor="#ffffff">At McCollins , we are digital growth partners where we develop customized marketing something for your brand . From Web Development , Performance Marketing to Social Media Marketing and Content Creation , we do all of it in-house. </p>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="#" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/space.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="https://calendar.app.google/iWNfP7kRzxTQM5VV7" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Book&nbsp;a&nbsp;meeting" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/2.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="#" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/space.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="#" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/3.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="border-collapse:collapse;line-height:0;font-size:0;border:0">
    //                         <td style="padding:0;margin:0;line-height:0;font-size:0;border:0" border="0" valign="top" bgcolor="" align="center">
    //                             <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                                 <tbody>
    //                                     <tr>

    //                                         <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                           <a title="Google" target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                               <img title="Google" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/d1.jpg" height="66" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="139" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                           </Link>

    //                                       </td>
    //                                         <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                             <a title="Meta" target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                                 <img title="Meta" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/d2.jpg" height="66" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="134" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                             </Link>
    //                                         </td>
    //                                         <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                           <a title="Snap Chat" target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                               <img title="Snap Chat" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/d3.jpg" height="66" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="133" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                           </Link>
    //                                       </td>
    //                                         <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                             <a title="Tick Tok" target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                                 <img title="Tick Tok" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/d4.jpg" height="66" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="135" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                             </Link>
    //                                         </td>
    //                                         <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                           <a title="we Chat" target="_blank" href="#" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                               <img title="we Chat" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/d5.jpg" height="66" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="139" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                           </Link>
    //                                       </td>
    //                                     </tr>
    //                               </tbody>
    //                             </table>
    //                         </td>
    //                     </tr>
    //                     <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="#" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/4.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                             border-collapse: collapse;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           ">
    //                         <td style="
    //                               padding: 0;
    //                               margin: 0;
    //                               line-height: 0;
    //                               font-size: 0;
    //                               border: 0;
    //                             " border="0" valign="top" bgcolor="#ffffff">
    //                           <a title="Team McCollins Media" href="https://youtu.be/eK6SzU776KY?si=7z51srOe9TP5xiK8" style="
    //                                 -webkit-text-size-adjust: none;
    //                                 -ms-text-size-adjust: none;
    //                                 mso-line-height-rule: exactly;
    //                                 text-decoration: underline;
    //                                 color: #5c68e2;
    //                                 font-size: 14px;
    //                               ">
    //                             <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/5.jpg"
    //                               alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                                   display: block;
    //                                   border: 0;
    //                                   outline: none;
    //                                   text-decoration: none;
    //                                   float: left;
    //                                   line-height: 0;
    //                                   font-size: 0;
    //                                   border: 0;
    //                                 " />
    //                           </Link>
    //                         </td>
    //                       </tr>
    //                       <tr style="
    //                       border-collapse: collapse;
    //                       line-height: 0;
    //                       font-size: 0;
    //                       border: 0;
    //                     ">
    //                   <td style="
    //                         padding: 0;
    //                         margin: 0;
    //                         line-height: 0;
    //                         font-size: 0;
    //                         border: 0;
    //                       " border="0" valign="top" bgcolor="#ffffff">
    //                     <a title="Team McCollins Media" href="#" style="
    //                           -webkit-text-size-adjust: none;
    //                           -ms-text-size-adjust: none;
    //                           mso-line-height-rule: exactly;
    //                           text-decoration: underline;
    //                           color: #5c68e2;
    //                           font-size: 14px;
    //                         ">
    //                       <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/6.jpg"
    //                         alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                             display: block;
    //                             border: 0;
    //                             outline: none;
    //                             text-decoration: none;
    //                             float: left;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           " />
    //                     </Link>
    //                   </td>
    //                 </tr>
    //                 <tr style="border-collapse:collapse;line-height:0;font-size:0;border:0">
    //                   <td style="padding:0;margin:0;line-height:0;font-size:0;border:0" border="0" valign="top" bgcolor="" align="center">
    //                       <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                           <tbody>
    //                               <tr>

    //                                   <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                     <a title="2024&nbsp;Trend&nbsp;for&nbsp;Food&nbsp;and&nbsp;Beverage&nbsp;Marketing" target="_blank" href="https://www.mccollinsmedia.com/blog/2024-trends-for-food-and-beverage-marketing" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                         <img title="2024&nbsp;Trend&nbsp;for&nbsp;Food&nbsp;and&nbsp;Beverage&nbsp;Marketing" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/b1.jpg" height="195" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="231" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                     </Link>

    //                                 </td>
    //                                   <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                       <a title="2024&nbsp;Trends&nbsp;fo&nbsp;SEO" target="_blank" href="https://www.mccollinsmedia.com/blog/2024-trends-for-seo" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                           <img title="2024&nbsp;Trends&nbsp;fo&nbsp;SEO" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/b2.jpg" height="195" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="224" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                       </Link>
    //                                   </td>
    //                                   <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                     <a title="2024&nbsp;Trends&nbsp;for&nbsp;Video&nbsp;Production" target="_blank" href="https://www.mccollinsmedia.com/blog/2024-trends-for-video-production" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                         <img title="2024&nbsp;Trends&nbsp;for&nbsp;Video&nbsp;Production" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/b3.jpg" height="195" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="225" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                     </Link>
    //                                 </td>
    //                                 </td>
    //                               </tr>

    //                         </tbody>
    //                       </table>
    //                   </td>
    //               </tr>
    //               <tr style="
    //                       border-collapse: collapse;
    //                       line-height: 0;
    //                       font-size: 0;
    //                       border: 0;
    //                     ">
    //                   <td style="
    //                         padding: 0;
    //                         margin: 0;
    //                         line-height: 0;
    //                         font-size: 0;
    //                         border: 0;
    //                       " border="0" valign="top" bgcolor="#ffffff">
    //                     <a title="Team McCollins Media" href="#" style="
    //                           -webkit-text-size-adjust: none;
    //                           -ms-text-size-adjust: none;
    //                           mso-line-height-rule: exactly;
    //                           text-decoration: underline;
    //                           color: #5c68e2;
    //                           font-size: 14px;
    //                         ">
    //                       <img title="Team McCollins Media" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/7.jpg"
    //                         alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                             display: block;
    //                             border: 0;
    //                             outline: none;
    //                             text-decoration: none;
    //                             float: left;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           " />
    //                     </Link>
    //                   </td>
    //                 </tr>
    //                 <tr style="border-collapse:collapse;line-height:0;font-size:0;border:0">
    //                   <td style="padding:0;margin:0;line-height:0;font-size:0;border:0" border="0" valign="top" bgcolor="" align="center">
    //                       <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
    //                           <tbody>
    //                               <tr>

    //                                   <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                     <a title="Call&nbsp;us" target="_blank" href="tel:+971559564135" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                         <img title="Call&nbsp;Us" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/c1.jpg" height="38" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="290" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                     </Link>

    //                                 </td>
    //                                   <td align="center" valign="top" style="padding:0;Margin:0;">
    //                                       <a title="Follow&nbsp;us&nbsp;on&nbsp;Linkedin" target="_blank" href="mailto:info@mccollinsmedia.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
    //                                           <img title="Email&nbsp;Us" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/c2.jpg" height="38" alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="390" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
    //                                       </Link>
    //                                   </td>
    //                                 </td>
    //                               </tr>

    //                         </tbody>
    //                       </table>
    //                   </td>
    //               </tr>
    //               <tr style="
    //                       border-collapse: collapse;
    //                       line-height: 0;
    //                       font-size: 0;
    //                       border: 0;
    //                     ">
    //                   <td style="
    //                         padding: 0;
    //                         margin: 0;
    //                         line-height: 0;
    //                         font-size: 0;
    //                         border: 0;
    //                       " border="0" valign="top" bgcolor="#ffffff">
    //                     <a title="Find&nbsp;us&nbsp;on&nbsp;google" href="https://maps.app.goo.gl/TTGc9DtT5tLxQQxQ9" style="
    //                           -webkit-text-size-adjust: none;
    //                           -ms-text-size-adjust: none;
    //                           mso-line-height-rule: exactly;
    //                           text-decoration: underline;
    //                           color: #5c68e2;
    //                           font-size: 14px;
    //                         ">
    //                       <img title="Find&nbsp;us&nbsp;on&nbsp;google" src="https://mccollinsmediaweb.github.io/emailer/thankyou/Images/l1.jpg"
    //                         alt="Web Development Company in Dubai | Web Design Company Dubai-Mccollins" width="680" style="
    //                             display: block;
    //                             border: 0;
    //                             outline: none;
    //                             text-decoration: none;
    //                             float: left;
    //                             line-height: 0;
    //                             font-size: 0;
    //                             border: 0;
    //                           " />
    //                     </Link>
    //                   </td>
    //                 </tr>
    //                     </tbody>
    //                   </table>
    //                 </td>
    //               </tr>

    //             </tbody>
    //           </table>
    //         </td>
    //       </tr>
    //       <tr style="border-collapse: collapse">
    //         <td style="line-height: 0; padding: 0; margin: 0">
    //           <div style="display: none; white-space: nowrap; font: 15px/1px courier">
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    //           </div>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </body>

    // </html>`;

    // try {
    //   // Send the lead email
    //   await transporter.sendMail(leadEmailOptions);
    //   // Send the thank you email
    //   // await transporter.sendMail(thankYouEmailOptions);

    //   res.status(200).json({ status: "Email sent successfully" });
    // } catch (error) {
    //   console.error("Error sending email:", error);
    //   res.status(500).json({ status: "Error sending email" });
    // }
  } else {
    res.status(405).json({ status: "Method not allowed" });
  }
}
