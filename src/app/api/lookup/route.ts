import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabaseClient'

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name')
  const partyId = req.nextUrl.searchParams.get('partyId')
  const supabase = await createClient();

  if (name) {
    const { data, error } = await supabase
      .from('guests')
      .select('party_id')
      .ilike('full_name', `%${name}%`)
      .limit(1)

    if (error || !data.length) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    return NextResponse.json({ partyId: data[0].party_id })
  }

  if (partyId) {
    const { data, error } = await supabase
      .from('guests')
      .select('*')
      .eq('party_id', partyId)

    if (error) return NextResponse.json({ error: 'Failed to fetch guests' }, { status: 500 })

    return NextResponse.json({ guests: data })
  }

  return NextResponse.json({ error: 'Missing parameters' }, { status: 400 })
}
