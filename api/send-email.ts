import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Your email address where you want to receive contact form submissions
const TO_EMAIL = 'matriks.dev@gmail.com';
// The "from" email must be from a verified domain in Resend, or use onboarding@resend.dev for testing
const FROM_EMAIL = 'onboarding@resend.dev';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body as ContactFormData;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #00f5d4; border-bottom: 2px solid #00f5d4; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;">
              <strong style="color: #7b2cbf;">Name:</strong><br/>
              ${name}
            </p>
            <p style="margin: 0 0 10px 0;">
              <strong style="color: #7b2cbf;">Email:</strong><br/>
              <a href="mailto:${email}" style="color: #00f5d4;">${email}</a>
            </p>
            ${company ? `
            <p style="margin: 0 0 10px 0;">
              <strong style="color: #7b2cbf;">Company:</strong><br/>
              ${company}
            </p>
            ` : ''}
            <p style="margin: 0;">
              <strong style="color: #7b2cbf;">Message:</strong><br/>
              <span style="white-space: pre-wrap;">${message}</span>
            </p>
          </div>

          <p style="color: #6c757d; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
