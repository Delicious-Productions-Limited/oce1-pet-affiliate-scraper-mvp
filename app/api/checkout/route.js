import Stripe from 'stripe'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY
    if (!stripeKey) {
      return NextResponse.json({ error: 'Stripe is not configured' }, { status: 503 })
    }

    const stripe = new Stripe(stripeKey)
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://growthauditkit.com/pet-affiliate-scanner'
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: 'price_1T7PZfB8moqxCyLJW4brHqFQ', quantity: 1 }],
      success_url: baseUrl + '/?success=1',
      cancel_url: baseUrl + '/?canceled=1',
    })
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
