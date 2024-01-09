const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
});

async function POST(req) {
    const { data } = await req.json();
    const { amount } = data.amount;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(price) * 100,
            currency: 'USD',
        });

        return {
            client_secret: paymentIntent.client_secret,
            status: 200
        };
    } catch (error) {
        return {
            error: error,
            status: 400
        };
    }
}

module.exports = { POST };