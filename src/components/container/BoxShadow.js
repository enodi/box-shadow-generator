import React from "react";

import Input from "../presentational/Input";
import PreviewContainer from "../presentational/PreviewContainer";

export default class BoxShadow extends React.Component {
  state = {
    horizontalOffset: 10,
    verticalOffset: 10,
    blur: 5,
    spread: 0,
    boxColor: "#b57d0e",
    shadowColor: "#404040"
  }
  handleHorizontalOffset = (event) => {
    this.setState({
      horizontalOffset: event.target.value
    });
  }
  handleVerticalOffset = (event) => {
    event.persist();
    this.setState(() => ({ verticalOffset: event.target.value }));
  }
  handleBlur = (event) => {
    event.persist();
    this.setState(() => ({ blur: event.target.value }));
  }
  handleSpread = (event) => {
    event.persist();
    this.setState(() => ({ spread: event.target.value }));
  }
  handleBoxColor = (event) => {
    event.persist();
    this.setState(() => ({ boxColor: event.target.value }));
  }
  handleShadowColor = (event) => {
    event.persist();
    this.setState(() => ({ shadowColor: event.target.value }));
  }
  render() {
    const {
      horizontalOffset,
      verticalOffset,
      blur,
      spread,
      boxColor,
      shadowColor } = this.state;
    return (
      <div className="content-container">
        <div className="content-container--controls">
          <div className="content-container--display-section content-container__box-shadow--display-section">
            {`${horizontalOffset}px ${verticalOffset}px ${blur}px ${spread}px ${shadowColor}`}
          </div>
          <Input
            text="Horizontal Length"
            name="hOffset"
            value={horizontalOffset}
            onChange={this.handleHorizontalOffset}
          />
          <Input
            text="Vertical Length"
            name="vOffset"
            value={verticalOffset}
            onChange={this.handleVerticalOffset}
          />
          <Input
            text="Blur Radius"
            name="blur"
            min="0"
            value={blur}
            onChange={this.handleBlur}
          />
          <Input
            text="Spread Radius"
            name="spread"
            value={spread}
            onChange={this.handleSpread}
          />
          <Input
            text="Box Color"
            className="input--color-container"
            type="color"
            name="boxColor"
            value={boxColor}
            onChange={this.handleBoxColor}
          />
          <Input
            text="Shadow Color"
            className="input--color-container"
            type="color"
            name="shadowColor"
            value={shadowColor}
            onChange={this.handleShadowColor}
          />
        </div>
        <PreviewContainer
          horizontalOffset={horizontalOffset}
          verticalOffset={verticalOffset}
          blur={blur}
          spread={spread}
          shadowColor={shadowColor}
          boxColor={boxColor}
        />
      </div>
    )
  }
}
