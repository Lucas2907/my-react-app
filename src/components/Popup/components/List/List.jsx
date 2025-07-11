import optionsIcon from "./../../../../assets/images/optionsIcon.svg";

import { useEffect, useState } from "react";
import PopupList from "./components/PopupList";
import { setKey, getKey } from "../../../../utils/localStorage";

export default function List({ infos, onDeleteItem, onFixItem }) {
  const [check, setCheck] = useState(() => {
    const savedCheck = getKey("checked");
    return savedCheck || [];
  });

  useEffect(() => {
    setKey("checked", check);
  }, [check]);

  const [selectedPopup, setSelectedPopup] = useState();
  const [isOpened, setIsOpened] = useState();

  function changeState(dataId) {
    if (dataId === selectedPopup) {
      setSelectedPopup(dataId);
      setIsOpened(!isOpened);
    } else {
      setSelectedPopup(dataId);
      openPopup();
    }
  }

  function deleteItem(data) {
    onDeleteItem(data);
    setIsOpened(!isOpened);
  }

  function fixItem(data) {
    onFixItem(data);
    setIsOpened(!isOpened);
  }

  function closePopup() {
    setIsOpened(false);
  }

  function openPopup() {
    setIsOpened(true);
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
      <h3 className="popup__title">TO DO LIST</h3>

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
                checked={check.includes(data.id) ? true : false}
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
                {data.id === selectedPopup && isOpened ? (
                  <PopupList
                    onDeleteClick={() => deleteItem(data.id)}
                    onFixClick={() => fixItem(data.id)}
                    onClose={closePopup}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
