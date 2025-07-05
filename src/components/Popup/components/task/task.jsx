import { useState } from "react";
import plusSign from "../../../../assets/images/plussign.svg";

export default function Task({ onAddTask }) {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [typemessage, setTypeMessage] = useState(null);
  const [disabled, setDisabled] = useState(true);

  function isValid(e) {
    if (e === "") {
      setError(true);
      setTypeMessage(true);
      setMessage("Enter a valid value");
      setDisabled(true);
    } else if (e.length < 5) {
      setError(true);
      setTypeMessage(true);
      setMessage("Enter at least 5 characters");
      setDisabled(true);
    } else if (e.length > 50) {
      setError(true);
      setTypeMessage(true);
      setMessage("Enter a maximum of 50 characters");
      setDisabled(true);
    } else {
      setError(false);
      setDisabled(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const inputElement = form.elements["new-task"];
    if (input.trim() === "") {
      inputElement.value = "";
    } else {
      onAddTask(input);
      inputElement.value = "";
      setError(true);
      setTypeMessage(false);
      setMessage(`Inserted successfully `);
      setInput("");
      setDisabled(true);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} formNoValidate>
      <input
        minLength={5}
        maxLength={51}
        onChange={(e) => {
          setInput(e.target.value);
          isValid(e.target.value);
        }}
        name="new-task"
        className="form__input-task"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? "" : "Add new task"}
      ></input>
      <span
        className={`${error ? "input__error-visible" : ""} ${
          typemessage ? "input__error" : "input__no-error "
        }`}
      >
        {error ? message : ""}
      </span>
      <button
        className={`form__task__button ${
          disabled ? "form__task__button-disabled" : ""
        }`}
        type="submit"
        disabled={disabled}
      >
        <img src={plusSign} alt="PlusSign" className="form__task__image" />
      </button>
    </form>
  );
}
