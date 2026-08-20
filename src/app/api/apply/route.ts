import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const cvFile = formData.get('cv') as File | null;

    if (!name || !email || !jobTitle || !cvFile) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Prepare CV attachment
    const buffer = Buffer.from(await cvFile.arrayBuffer());

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Job Application: ${jobTitle} - ${name}`,
      text: `
      You have a new job application for the ${jobTitle} role.
      
      Name: ${name}
      Email: ${email}
      
      Please find their CV attached.
      `,
      attachments: [
        {
          filename: cvFile.name || 'CV.pdf',
          content: buffer,
        },
      ],
    };

    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error('Transporter verify failed:', verifyErr);
      return NextResponse.json({ error: 'Mail server configuration error.' }, { status: 500 });
    }

    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true, message: 'Application submitted successfully.' }, { status: 200 });
    } catch (emailError) {
      console.error("Nodemailer send error:", emailError);
      return NextResponse.json({ error: 'Failed to send application email. Please try again later.' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json({ error: 'Failed to submit application. Please try again later.' }, { status: 500 });
  }
}
