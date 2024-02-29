import { useState } from "react";

export function useInput(defaultValue, validator) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const isValid = validator(enteredValue);
  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handelInputBlur() {
    setDidEdit(true);
  }
  return {
    value: enteredValue,
    hasError: didEdit && !isValid && true,
    handleInputChange,
    handelInputBlur,
  };
}
