"use server";

import { Resend } from "resend";
import { ContactEmailTemplate } from "../components/email/ContactEmailTemplate";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  try {
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "delivered@resend.dev",
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      react: ContactEmailTemplate({ name, email, message }) as React.ReactElement,
    });

    if (data.error) {
      return { error: data.error.message };
    }

    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Failed to send email. Please try again later." };
  }
}
