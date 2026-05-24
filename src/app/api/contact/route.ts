import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Standard service. You can change this if you use another provider.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format the email content
    const htmlContent = `
      <h2>New Tour Inquiry Received</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service Type:</strong> ${data.service}</p>
      ${data.package ? `<p><strong>Package:</strong> ${data.package}</p>` : ''}
      ${data.dateFrom ? `<p><strong>Date From:</strong> ${data.dateFrom}</p>` : ''}
      ${data.dateTo ? `<p><strong>Date To:</strong> ${data.dateTo}</p>` : ''}
      ${data.pickupLocation ? `<p><strong>Pickup Location:</strong> ${data.pickupLocation}</p>` : ''}
      ${data.dropLocation ? `<p><strong>Drop Location:</strong> ${data.dropLocation}</p>` : ''}
      ${data.pickupTime ? `<p><strong>Pickup Time:</strong> ${data.pickupTime}</p>` : ''}
      ${data.message ? `<p><strong>Additional Message:</strong><br/>${data.message}</p>` : ''}
    `;

    // Send the email
    const mailOptions = {
      from: `"Roopa Tours Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Inquiry from ${data.firstName} - ${data.service}`,
      html: htmlContent,
      replyTo: data.email, // If they had an email field, otherwise it won't reply
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}
