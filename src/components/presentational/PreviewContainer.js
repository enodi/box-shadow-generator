import React from "react";

const PreviewContainer = ({
  horizontalOffset,
  verticalOffset,
  blur,
  spread,
  boxColor,
  shadowColor,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
}) => (
    <div
      className="preview"
      style={{
        boxShadow: `${horizontalOffset}px ${verticalOffset}px ${blur}px ${spread}px ${shadowColor}`,
        backgroundColor: `${boxColor}`,
        borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
      }}
    >
    </div>
  );

PreviewContainer.defaultProps = {
  horizontalOffset: "",
  verticalOffset: "",
  blur: "",
  spread: "",
  boxColor: "",
  shadowColor: "",
  topLeft: "",
  topRight: "",
  bottomLeft: "",
  bottomRight: ""
}

export default PreviewContainer;
