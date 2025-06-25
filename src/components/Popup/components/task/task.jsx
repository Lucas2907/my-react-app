import { useState } from "react";
import plusSign from "../../../../assets/images/plussign.svg";

export default function Task({ onAddTask }) {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [typemessage, setTypeMessage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const inputElement = form.elements["new-task"];
    if (input.trim() === "") {
      setError(true);
      setMessage("Insira um valor válido");
      setTypeMessage(true);
      inputElement.value = "";
    } else if (input.length < 5) {
      setError(true);
      setMessage("Insira no minimo 5 caracteres");
      setTypeMessage(true);
    } else if (input.length > 50) {
      setError(true);
      setMessage("Insira no maximo 50 caracteres");
      setTypeMessage(true);
    } else {
      onAddTask(input);
      setInput("");
      setError(true);
      setMessage("Inserido com sucesso");
      setTypeMessage(false);
      inputElement.value = "";
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} formNoValidate>
      <input
        onChange={(e) => setInput(e.target.value)}
        name="new-task"
        className="form__input-task"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={isFocused ? "" : "Add new task..."}
      ></input>
      <span
        className={`${error ? "input__error-visible" : ""}
          ${typemessage ? "input__error" : "input__no-error "}`}
      >
        {error ? message : ""}
      </span>
      <button className="form__task__button" type="submit">
        <img src={plusSign} alt="PlusSign" className="form__task__image" />
      </button>
    </form>
  );
}
