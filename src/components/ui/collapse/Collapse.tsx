import { useState, useEffect } from "react"

import debounce from "lodash.debounce"

import { StyledContent, StyledMain } from "./style"
import { KEY_CODE } from "../../../utils/constants"

const Collapse = ({ content, main }) => {
  const [showContent, setShowContent] = useState(false)
  const [contentHeight, setContentHeight] = useState(null)
  const [isFocus, setIsFocus] = useState(false)

  let contentElement

  useEffect(() => {
    let setContentSize = () =>
      setContentHeight(contentElement && contentElement.clientHeight)
    setContentSize = debounce(setContentSize, 500)
    window.addEventListener("resize", setContentSize)

    return () => {
      window.removeEventListener("resize", setContentSize)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setContentSize.cancel()
    }
  }, [contentElement])

  const onToggleHandler = () => {
    setContentHeight(contentElement && contentElement.clientHeight)
    setShowContent(!showContent)
  }

  const onKeyDown = event => {
    if (event.keyCode === KEY_CODE.ENTER || event.keyCode === KEY_CODE.SPACE) {
      onToggleHandler()
    }
  }

  return (
    <>
      <StyledMain
        aria-expanded={showContent}
        onClick={onToggleHandler}
        onKeyDown={onKeyDown}
        role="button"
        tabIndex="0"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      >
        {main(showContent, isFocus)}
      </StyledMain>
      <StyledContent
        aria-hidden={!showContent}
        height={showContent ? contentHeight : 0}
      >
        <div ref={elem => (contentElement = elem)}>{content}</div>
      </StyledContent>
    </>
  )
}

export default Collapse
