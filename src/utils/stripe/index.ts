import { loadStripe } from "@stripe/stripe-js"

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_51LtuIuAwSpPsVM3a17NgcmkhQ7WWTlX4dXWoMcEi6i5oxWIQnQeJouneqq6TcsagoGEKKSlHEig8mGkhKLNpWuTm00ik9P6nxi", {
      stripeAccount: "acct_1LtuIuAwSpPsVM3a",
    })
  }
  return stripePromise
}

export default getStripe
