import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    console.log('API /api/contact called with:', { name, email, subject });

    // transporter using Gmail app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // verify connection configuration (this helps debug auth/network)
    try {
      await transporter.verify();
      console.log('Nodemailer transporter verified ✅');
    } catch (verifyErr) {
      console.error('Transporter verify failed:', verifyErr);
      return NextResponse.json({ success: false, error: 'transporter_verify_failed', details: String(verifyErr) }, { status: 500 });
    }

    // safer mail options: use your mailbox as sender and replyTo user
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email || process.env.EMAIL_USER,
      subject: `${subject || 'No Subject'} - from ${name || 'Anonymous'}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);
    return NextResponse.json({ success: true, info }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
