import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Escape user input before putting it in the HTML email body.
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !isEmail(email) || !message || message.length > 5000) {
      return NextResponse.json({ message: "Please check the form fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio contact form" <${process.env.EMAIL_USER}>`,
      to: "tobidechamp15@gmail.com",
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return NextResponse.json({ message: "Form submission received and email sent" }, { status: 200 });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json({ message: "Error processing form submission" }, { status: 500 });
  }
}
