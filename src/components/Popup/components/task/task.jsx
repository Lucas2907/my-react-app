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
      setMessage("Insira um valor válido");
      setDisabled(true);
    } else if (input.length < 5) {
      setError(true);
      setTypeMessage(true);
      setMessage("Insira no minimo 5 caracteres");
      setDisabled(true);
    } else if (input.length > 50) {
      setError(true);
      setTypeMessage(true);
      setMessage("Insira no maximo 50 caracteres");
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
      setInput("");
      inputElement.value = "";
      setError(true);
      setTypeMessage(false);
      setMessage("Inserido com sucesso");
      setDisabled(true);
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} formNoValidate>
      <input
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
