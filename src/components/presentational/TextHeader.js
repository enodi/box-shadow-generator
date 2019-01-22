import React from "react";

const TextHeader = ({ text, value, onChange }) => {
  const colorInput = isNaN(value) ? "colorInput" : "";
  return (
    <div className="text-header">
      <span>{text}</span>
      <div>
        <input
          className={colorInput}
          type="text"
          value={value}
          onChange={onChange}
        />
        <span>{colorInput ? "" : "px"}</span>
      </div>
    </div>
  )
}

export default TextHeader;
