import pBtnIcon from "../assets/images/p-btn-icon.svg";

export default function CompanyCard(props) {
    return (
      <button
        type="button"
        className="card"
        onClick={props.onClick}
        aria-label={`View bio for ${props.name}, ${props.title}`}
      >
        <div
          className="c-card-img"
          style={{ backgroundImage: `url(${props.cardImage})` }}
        ></div>
        <div className="card-info-container">
          <div className="card-info">
            <span className="card-name">{props.name}</span>
            <span className="card-title">{props.title}</span>
          </div>
          <div className="p-btn-container">
            <span className="plus-btn" aria-hidden="true">
              <img src={pBtnIcon} alt="" />
            </span>
          </div>
        </div>
      </button>
    );
  }
