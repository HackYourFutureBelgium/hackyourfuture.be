import React, { useState } from "react"

import {
  StyledContainer,
  StyledDropdown,
  StyledDropdownList,
  StyledDropdownListItem,
} from "./style"
import Input from "../input/Input"
import { StyledP as P } from "../p/style"

const InputAutocomplete = ({
  suggestions,
  onSelect,
  initialValue,
  inputProps,
}) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [userInput, setUserInput] = useState(initialValue || "")

  const onChange = e => {
    const {
      currentTarget: { value },
    } = e
    const newFilteredSuggestions = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    )

    // Update the user input and filtered suggestions, reset the active
    // suggestion and make sure the suggestions are shown
    setActiveSuggestion(0)
    setFilteredSuggestions(newFilteredSuggestions)
    setShowSuggestions(true)
    setUserInput(value)
  }

  const onClick = e => {
    setActiveSuggestion(0)
    setFilteredSuggestions([])
    setShowSuggestions(false)
    setUserInput(e.currentTarget.innerText)
    onSelect(e.currentTarget.innerText)
  }

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0)
      setShowSuggestions(false)
      setUserInput(filteredSuggestions[activeSuggestion])
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return
      }

      setActiveSuggestion(activeSuggestion - 1)
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }

      setActiveSuggestion(activeSuggestion + 1)
    }
  }

  let suggestionsListComponent

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <StyledDropdown>
          <StyledDropdownList>
            {filteredSuggestions.map((suggestion, index) => (
              <StyledDropdownListItem
                key={suggestion}
                onClick={onClick}
                isActive={index === activeSuggestion}
              >
                {suggestion}
              </StyledDropdownListItem>
            ))}
          </StyledDropdownList>
        </StyledDropdown>
      )
    } else {
      suggestionsListComponent = (
        <StyledDropdown>
          <P>No suggestions</P>
        </StyledDropdown>
      )
    }
  }

  return (
    <StyledContainer>
      <Input
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        {...inputProps}
      />
      {suggestionsListComponent}
    </StyledContainer>
  )
}

InputAutocomplete.defaultProps = {
  inputProps: {},
}

export default InputAutocomplete
