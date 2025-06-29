import pinIcon from "../../../../../assets/images/pinIcon.svg";
import trashIcon from "../../../../../assets/images/trashIcon.svg";

export default function PopupList({ onIconClick }) {
  return (
    <div className={`popup-list popup-list__active`}>
      <ul className="popup-list__items">
        <li className="popup-list__item">
          <div className="popup-list__container">
            <img className="popup-list__image" src={pinIcon} alt="pin icon" />
            <p className="popup-list__text">fix</p>
          </div>
          <div className="popup-list__container" onClick={onIconClick}>
            <img className="popup-list__image" src={trashIcon} alt="pin icon" />
            <p className="popup-list__text">delete</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

//por algum motivo a função passado do List para o PopupList atraves da prop nao esta funcionando!
