import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_mFpKP0JmQWp9mQ2FjetxyzlH", {
      stripeAccount: "acct_1DUXo0B6dm2WDTHv",
    })
  }
  return stripePromise
}

export default getStripe
