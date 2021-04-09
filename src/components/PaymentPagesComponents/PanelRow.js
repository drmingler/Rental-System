import React, {useState} from "react";
import {ReactComponent as CheckIcon} from "../../assets/img/check.svg";

const PanelRow = ({
  plan,
  price,
  duration,
  showTick,
  setSubscribe,
  subscribe
}) => {
  const [active] = useState(true);
  function handleSubscribe() {
    setSubscribe(!subscribe);
  }
  return (
    <div className={`panel-row ${active && "active"}`}>
      <div className="plan-type">
        {showTick && (
          <div className="icon">
            <CheckIcon />
          </div>
        )}
        <span className="type">{plan}</span>
      </div>
      <div className="plan-price">
        <span className="price">{price}</span>
        <span>/</span>
        <span className="plan-duration">{duration}</span>
      </div>
      {showTick && <button className="subscribe-button-cancel">Cancel</button>}
      {!showTick && (
        <button className="subscribe-button" onClick={handleSubscribe}>
          Subscribe
        </button>
      )}
    </div>
  );
};

export default PanelRow;
