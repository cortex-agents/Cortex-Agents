import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, company, service, challenge } = await req.json();
    console.log('API /api/audit called with:', { name, email, company });

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

    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, info }, { status: 200 });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
