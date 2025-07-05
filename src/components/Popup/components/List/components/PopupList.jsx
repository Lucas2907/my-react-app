import pinIcon from "../../../../../assets/images/pinIcon.svg";
import trashIcon from "../../../../../assets/images/trashIcon.svg";

import { useEffect, useRef } from "react";

export default function PopupList({ onDeleteClick, onFixClick, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }

    if (onClose) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!onClose) return null;

  return (
    <div ref={ref} className={`popup-list popup-list__active`}>
      <ul className="popup-list__items">
        <li className="popup-list__item">
          <div className="popup-list__container" onClick={onFixClick}>
            <img className="popup-list__image" src={pinIcon} alt="pin icon" />
            <p className="popup-list__text">fix</p>
          </div>
          <div className="popup-list__container" onClick={onDeleteClick}>
            <img className="popup-list__image" src={trashIcon} alt="pin icon" />
            <p className="popup-list__text">delete</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
