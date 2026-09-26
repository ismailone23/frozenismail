"use server";

import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import * as React from "react";
import { ContactEmailTemplate } from "../components/email/ContactEmailTemplate";

export async function sendEmail(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const contactEmail = process.env.CONTACT_EMAIL;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);

  if (!smtpHost || !smtpUser || !smtpPassword || !contactEmail || !Number.isInteger(smtpPort)) {
    return { error: "Email service is not configured yet. Please try again later." };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? smtpUser,
      to: contactEmail,
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: await render(React.createElement(ContactEmailTemplate, { name, email, message })),
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email", error);
    return { error: "Failed to send email. Please try again later." };
  }
}
