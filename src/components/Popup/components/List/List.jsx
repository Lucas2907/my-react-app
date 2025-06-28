import optionsIcon from "./../../../../assets/images/optionsIcon.svg";

import { useState } from "react";
import PopupList from "./components/PopupList";

export default function List({ infos }) {
  const [check, setCheck] = useState([]);
  const [selectedPopup, setSelectedPopup] = useState();
  const [isOpened, setIsOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  function changeState(dataId) {
    if (dataId === selectedPopup) {
      setSelectedPopup(dataId);
      setIsOpened(!isOpened);
    } else {
      setIsOpened(true);
      setSelectedPopup(dataId);
    }
  }

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
            <div className="list__container">
              <input
                className="list__checkbox"
                type="checkbox"
                onClick={() => changeCheck(data.id)}
              />
              <div className="list__options">
                <img
                  className={`list__option ${
                    data.id === selectedPopup && isOpened
                      ? "list__option__clicked"
                      : ""
                  }`}
                  src={optionsIcon}
                  onClick={() => {
                    changeState(data.id);
                  }}
                />
                {data.id === selectedPopup && isOpened ? <PopupList /> : ""}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
