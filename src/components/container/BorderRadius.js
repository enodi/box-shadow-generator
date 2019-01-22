import React from "react";

import Input from "../presentational/Input";
import PreviewContainer from "../presentational/PreviewContainer";

export default class BorderRadius extends React.Component {
  state = {
    topLeft: 10,
    topRight: 10,
    bottomLeft: 10,
    bottomRight: 10,
    boxColor: "#b57d0e"
  }
  handleTopLeft = (event) => {
    this.setState({
      topLeft: event.target.value
    });
  }
  handleTopRight = (event) => {
    this.setState({
      topRight: event.target.value
    });
  }
  handleBottomLeft = (event) => {
    this.setState({
      bottomLeft: event.target.value
    });
  }
  handleBottomRight = (event) => {
    this.setState({
      bottomRight: event.target.value
    });
  }
  handleBoxColor = (event) => {
    event.persist();
    this.setState(() => ({ boxColor: event.target.value }));
  }
  render() {
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      boxColor } = this.state;
    return (
      <div className="content-container">
        <div className="content-container--controls">
          <div className="content-container--display-section content-container__border-radius--display-section">
            {`${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px`}
          </div>
          <Input
            text="Top Left"
            name="tLeft"
            min="0"
            value={topLeft}
            onChange={this.handleTopLeft}
          />
          <Input
            text="Top Right"
            name="tRight"
            min="0"
            value={topRight}
            onChange={this.handleTopRight}
          />
          <Input
            text="Bottom Left"
            name="bLeft"
            min="0"
            value={bottomLeft}
            onChange={this.handleBottomLeft}
          />
          <Input
            text="Bottom Right"
            name="bRight"
            min="0"
            value={bottomRight}
            onChange={this.handleBottomRight}
          />
          <Input
            text="Box Color"
            className="input--color-container"
            type="color"
            name="boxColor"
            value={boxColor}
            onChange={this.handleBoxColor}
          />
        </div>
        <PreviewContainer
          topLeft={topLeft}
          topRight={topRight}
          bottomLeft={bottomLeft}
          bottomRight={bottomRight}
          boxColor={boxColor}
        />
      </div>
    )
  }
}
