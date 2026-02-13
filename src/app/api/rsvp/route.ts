import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabaseClient'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface RSVP {
  guest_id: string;
  status: string;
  meal_preference?: string | null;
}

export async function POST(req: Request) {
  const { rsvps, email, guestNames } = await req.json()
  const supabase = await createClient();

  const updates = rsvps.map(({ guest_id, status, meal_preference }: RSVP) =>
    supabase
      .from('guests')
      .update({
        rsvp_status: status,
        rsvp_date: new Date().toISOString(),
        meal_preference: meal_preference
      })
      .eq('id', guest_id)
  )

  await Promise.all(updates)

  if (email) {
    try {
      await resend.emails.send({
        from: 'Maggie & Andrew <maggieandandrew@thehumbles2026.com>',
        to: [email as string],
        subject: 'Confirmation of Your RSVP',
        // Using your Resend dashboard template
        template: {
          id: 'wedding-rsvp-confirmation',
          variables: {
            NAME: guestNames
          }
        }
      });
    } catch (error) {
      console.error('Failed to send confirmation email:', error)
    }
  }

  return NextResponse.json({ success: true })
}
