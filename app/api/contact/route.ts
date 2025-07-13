import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Manually load environment variables
dotenv.config();

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Temporary hardcoded values for testing
    const EMAIL_USER = process.env.EMAIL_USER || 'dathkishor@gmail.com';
    const EMAIL_PASS = process.env.EMAIL_PASS || 'azou lyvq hqjn hdhi';
    
    console.log('EMAIL_USER:', EMAIL_USER);
    console.log('EMAIL_PASS exists:', !!EMAIL_PASS);
    console.log('EMAIL_PASS length:', EMAIL_PASS?.length);

    // Check environment variables
    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables');
      return NextResponse.json(
        { error: 'Email configuration error' }, 
        { status: 500 }
      );
    }

    console.log('Creating transporter...');
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    console.log('Verifying transporter...');
    await transporter.verify();

    console.log('Sending email...');
    const mailOptions = {
      from: EMAIL_USER, // Use your email as sender
      to: EMAIL_USER,   // Send to yourself
      replyTo: email,               // Set reply-to as the form submitter
      subject: `Contact Form Submission from ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email sending failed:', error);
    
    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Email authentication failed' }, 
          { status: 500 }
        );
      }
      if (error.message.includes('Missing credentials')) {
        return NextResponse.json(
          { error: 'Email credentials not configured' }, 
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}