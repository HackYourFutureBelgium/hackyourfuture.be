const fetchStripeAPI = async (path, data) => {
  const options: RequestInit = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow",
    referrer: "no-referrer",
  }

  if (typeof data !== "undefined") {
    Object.assign(options, {
      body: JSON.stringify(
        Object.assign(data, {
          successUrl: `https://hackyourfuture.be/#success`,
          cancelUrl: `https://hackyourfuture.be/#cancel`,
        })
      ),
    })
  }

  const response = await fetch(`https://stripe.hyf.be${path}`, options)
  const json = await response.json()

  if (response.ok !== true) {
    throw new Error(json.detail)
  }

  return json
}

const getSessionDonation = async (amount, message) => {
  return await fetchStripeAPI(`/checkout/session/donation`, {
    amount,
    currency: "eur",
    message,
  })
}

const getSessionPlan = async plan => {
  return await fetchStripeAPI(`/checkout/session/plan`, {
    plan,
  })
}

export { getSessionPlan, getSessionDonation }
