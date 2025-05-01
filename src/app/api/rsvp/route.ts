import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabaseClient'
// import { Resend } from 'resend'

// const resend = new Resend(process.env.RESEND_API_KEY)

interface RSVP {
  guest_id: string;
  status: string;
}

export async function POST(req: Request) {
//   const { party_id, rsvps, email } = await req.json()
  const { rsvps } = await req.json()
  const supabase = await createClient();

  const updates = rsvps.map(({ guest_id, status }: RSVP) =>
    supabase
      .from('guests')
      .update({ rsvp_status: status, rsvp_date: new Date().toISOString() })
      .eq('id', guest_id)
  )

  await Promise.all(updates)

//   await resend.emails.send({
//     from: 'you@yourdomain.com',
//     to: [email, 'you@yourdomain.com'],
//     subject: 'Wedding RSVP Confirmation',
//     html: `<p>Thank you! We've received your RSVP.</p>`,
//   })

  return NextResponse.json({ success: true })
}
