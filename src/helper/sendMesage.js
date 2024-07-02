import nodemailer from "nodemailer";
import { google } from "googleapis";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectURI = process.env.REDIRECT_URI;
const refreshToken = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectURI
);

oauth2Client.setCredentials({
  refresh_token: refreshToken,
});

export async function sendMessage(name, mobileNo, email, message) {
  try {
    const { token: accessToken } = await oauth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "Gmail",
      secure: true,
      port: 465,
      auth: {
        type: "OAuth2",
        user: "arnabbabon2002@gmail.com",
        clientId,
        clientSecret,
        refreshToken,
        accessToken,
      },
    });

    const mailOptions = {
      from: "Portfolio Message <arnabbabon2002@gmail.com>",
      to: "arnabg3112@gmail.com",
      subject: `Message from Portfolio by ${name}`,
      text: `Name: ${name}\n\nMobileNo: ${mobileNo}\n\nEmail:${email}\n\n My message: ${message}`,
      html: `
        <html>
  <body>
    <div style="font-family: Arial, sans-serif; line-height: 1.6; font-size: 1.2em; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #4CAF50;">New Message from Portfolio</h2>
      </div>
      <div style="background-color: #fff; padding: 15px; border-radius: 10px; box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);">
        <div style="margin-bottom: 10px;">
          <strong style="color: #555;">Name:</strong>
          <span style="font-weight: bolder; color: #333;">${name}</span>
        </div>
        <div style="margin-bottom: 10px;">
          <strong style="color: #555;">Mobile No:</strong>
          <span style="font-weight: bolder; color: #333;">${mobileNo}</span>
        </div>
        <div style="margin-bottom: 10px;">
          <strong style="color: #555;">Email:</strong>
          <span style="font-weight: bolder; color: #333;">${email}</span>
        </div>
        <div style="margin-bottom: 10px;">
          <strong style="color: #555;">Message:</strong>
          <br/>
          <span style="font-weight: bold; color: #333; margin-top: 6px">${message}</span>
        </div>
      </div>
      <div style="text-align: center; margin-top: 20px; color: #999; font-size: 0.8em;">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
`,
    };

    await transport.sendMail(mailOptions);

    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error("Error when sending message:", error);

    return {
      success: false,
      message: "Error when sending message",
    };
  }
}
