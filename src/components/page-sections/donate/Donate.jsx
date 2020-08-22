import React from "react"

import { RadioLabel, RadioInput, RadioCheckMark } from "./style"
import { Title, Pane, Text, Section, Wrapper } from "../../ui"

const data = {
  title: "Support the developers of tomorrow",
  description:
    "Help refugees build digital & soft skills for a career in web development. We are a non-profit organization. Thanks to your support we can improve and keep our program free of charge for students.",
}

// const onSubmit = () => console.log("submitted")

const Donate = () => {
  // once OR monthly
  // const [paymentType, setPaymentType] = useState("once")

  return (
    <Section>
      <Wrapper>
        <Pane>
          <Title>{data.title}</Title>
          <Text>{data.description}</Text>
        </Pane>
        <Pane>
          <form>
            <RadioLabel htmlFor="once">
              One time
              <RadioInput
                type="radio"
                name="support"
                id="once"
                defaultChecked
                // checked="checked"
              />
              <RadioCheckMark />
            </RadioLabel>
            <RadioLabel htmlFor="monthly">
              Monthly
              <RadioInput type="radio" name="support" id="monthly" />
              <RadioCheckMark />
            </RadioLabel>
            <div>
              {/* <label htmlFor="amount-options">Select your amount</label> */}
              <ul id="amount-options">
                <li>€10</li>
                <li>€25</li>
                <li>€50</li>
                <li>€100</li>
                <li>Full scholarship</li>
              </ul>
              {/* <label htmlFor="amount">Select your amount</label> */}
              <input type="number" />
            </div>
          </form>
        </Pane>
      </Wrapper>
    </Section>
  )
}

export default Donate
