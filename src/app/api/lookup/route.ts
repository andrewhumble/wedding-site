import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabaseClient'

export async function GET(req: NextRequest) {
  try {
    const name = req.nextUrl.searchParams.get('name')
    const partyId = req.nextUrl.searchParams.get('partyId')
    console.log('API Route called with:', { name, partyId })
    
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Missing Supabase environment variables')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const supabase = await createClient();

    if (name) {
      const { data, error } = await supabase
        .from('guests')
        .select('party_id')
        .eq('full_name', name)

      if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }

      if (!data.length) return NextResponse.json({ error: 'Not found' }, { status: 404 })

      const partyIds = data.map(guest => guest.party_id)
      return NextResponse.json({ partyIds })
    }

    if (partyId) {
      const { data, error } = await supabase
        .from('guests')
        .select('*')
        .eq('party_id', partyId)

      if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json({ error: 'Failed to fetch guests' }, { status: 500 })
      }

      return NextResponse.json({ guests: data })
    }

    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
