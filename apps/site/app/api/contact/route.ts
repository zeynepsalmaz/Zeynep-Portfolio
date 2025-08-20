import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  // Ortam değişkenlerinden alın
  const user = process.env.EMAIL_USER
  const pass = process.env.EMAIL_PASS
  const to = 'zeynepsalmazzs@gmail.com'

  if (!user || !pass) {
    return NextResponse.json({ error: 'Email credentials not set.' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  })

  try {
    await transporter.sendMail({
      from: user,
      to,
      subject: `Portfolio Contact Form: ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
  }
}
