import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function GET() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: 'price_1T7PZfB8moqxCyLJW4brHqFQ', quantity: 1 }],
      success_url: process.env.NEXT_PUBLIC_URL + '/?success=1',
      cancel_url: process.env.NEXT_PUBLIC_URL + '/?canceled=1',
    })
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
