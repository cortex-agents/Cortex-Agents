import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, service, challenge } = await req.json();
    // No submitted field is logged — see the note in /api/contact. The audit
    // request reaches us as email; the host's logs need none of its contents.
    console.log('API /api/audit called');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error('Transporter verify failed:', verifyErr);
      return NextResponse.json({ success: false, error: 'transporter_verify_failed' }, { status: 500 });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email || process.env.EMAIL_USER,
      subject: `FREE AUDIT REQUEST: ${company || 'Anonymous'}`,
      text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\nInterested Service: ${service}\n\nBiggest Challenge/Bottleneck:\n${challenge}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: 'send_failed' }, { status: 500 });
  }
}
