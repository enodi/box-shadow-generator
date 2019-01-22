import React from "react";

import TextHeader from "./TextHeader";

const Input = ({ className, text, min, max, type, name, value, onChange }) => (
  <div className="input--wrapper">
    <TextHeader
      text={text}
      value={value}
      onChange={onChange}
    />
    <input
      className={className}
      type={type}
      min={min}
      max={max}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

Input.defaultProps = {
  min: "-200",
  max: "200",
  type: "range",
  className: "range-slider__input"
}

export default Input;
