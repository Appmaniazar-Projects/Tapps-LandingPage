import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter (you'll need to configure these settings)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'water@tapps.app', // Send to Tapps.app
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1973bb, #2196f3); padding: 30px; border-radius: 10px 10px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h2>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">TAPPS - The Water App</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin: 0 0 5px 0; font-size: 16px;">From:</h3>
              <p style="color: #666; margin: 0; font-size: 14px;">
                <strong>${name}</strong><br/>
                ${email}
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #333; margin: 0 0 5px 0; font-size: 16px;">Subject:</h3>
              <p style="color: #666; margin: 0; font-size: 14px;">${subject}</p>
            </div>
            
            <div>
              <h3 style="color: #333; margin: 0 0 5px 0; font-size: 16px;">Message:</h3>
              <p style="color: #666; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef;">
              <p style="color: #999; margin: 0; font-size: 12px;">
                This message was sent from the TAPPS contact form on ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
