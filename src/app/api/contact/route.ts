import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendKey = await process.env.RESEND_KEY;
const resend = new Resend(resendKey);

export async function POST(req: Request) {
  try {
    const { fullName, email: userEmail, message } = await req.json();

    // Trim input to avoid leading/trailing spaces
    const trimmedFullName = fullName?.trim();
    const trimmedUserEmail = userEmail?.trim();
    const trimmedMessage = message?.trim();

    // Basic validation
    if (!trimmedFullName || !trimmedUserEmail || !trimmedMessage) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedUserEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("Form Submission:", {
      fullName: trimmedFullName,
      email: trimmedUserEmail,
      message: trimmedMessage,
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #1e1e1e; color: #ffffff; border-radius: 10px;">
        <h2 style="color: #00bfff; text-align: center;">New Message from ASG Contact Form</h2>
        <div style="background-color: #2a2a2a; padding: 15px; border-radius: 8px;">
          <p><strong style="color: #00bfff;">Name:</strong> ${trimmedFullName}</p>
          <p><strong style="color: #00bfff;">Email:</strong> ${trimmedUserEmail}</p>
          <p><strong style="color: #00bfff;">Message:</strong></p>
          <p style="background-color: #333; padding: 10px; border-radius: 6px;">${trimmedMessage}</p>
        </div>
        <p style="text-align: center; font-size: 12px; color: #bbb;">This is an automated message from ASG Contact Form.</p>
      </div>
    `;

    // Send email
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "arcisgroupllc@gmail.com",
      subject: `Message waiting from ${trimmedFullName} at ${trimmedUserEmail}`,
      html: emailHtml,
    });
    
    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}