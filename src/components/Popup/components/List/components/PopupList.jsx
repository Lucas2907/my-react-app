import pinIcon from "../../../../../assets/images/pinIcon.svg";
import trashIcon from "../../../../../assets/images/trashIcon.svg";

export default function PopupList({ onDeleteClick, onFixClick }) {
  return (
    <div className={`popup-list popup-list__active`}>
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
