import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    // Deliberately logs no submitted field. The enquiry itself is delivered by
    // email; repeating the sender's name or address in the host's server logs
    // would store personal data we never need and cannot easily delete.
    console.log('API /api/contact called');

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
      // The cause is logged server-side only — a stringified mail-server error
      // can carry account details and internals that no browser needs.
      return NextResponse.json({ success: false, error: 'transporter_verify_failed' }, { status: 500 });
    }

    // safer mail options: use your mailbox as sender and replyTo user
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email || process.env.EMAIL_USER,
      subject: `${subject || 'No Subject'} - from ${name || 'Anonymous'}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact enquiry delivered');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'send_failed' }, { status: 500 });
  }
}
