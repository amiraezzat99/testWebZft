import Stripe from 'stripe'

export async function payment({
  payment_method_types = ['card'],
  mode = 'payment',
  customer_email = '',
  metadata = {},
  cancel_url = process.env.CANCELURL,
  success_url = process.env.SUCCESSURL,
  discounts = [],
  line_items = [],
}) {
  const stripe = new Stripe(process.env.STRIPR_SECRET_KEY)
  const session = await stripe.checkout.sessions.create({
    payment_method_types,
    mode,
    customer_email,
    metadata,
    cancel_url,
    success_url,
    discounts,
    line_items,
  })
  return session
}
