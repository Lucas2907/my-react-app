import { useState } from "react";

export default function List({ infos }) {
  const [check, setCheck] = useState([]);

  function changeCheck(id) {
    if (check.includes(id)) {
      setCheck(check.filter((dataId) => dataId != id));
    } else {
      setCheck([...check, id]);
    }
  }
  return (
    <ul className="popup__list">
      {infos.map((data) => {
        return (
          <li className={"list__items"} key={data.id}>
            <p
              className={`list__text ${
                check.includes(data.id) ? "list__text_checked" : ""
              }`}
            >
              {data.name}
            </p>
            <input
              className="list__checkbox"
              type="checkbox"
              onClick={() => changeCheck(data.id)}
            ></input>
          </li>
        );
      })}
    </ul>
  );
}
